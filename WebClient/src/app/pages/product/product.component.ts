import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItem, Product, SampleData } from '../../data/data';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart, faShoppingCart, faMagnifyingGlassPlus, faStar, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../../services/cartService/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterLink, RouterLinkActive],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  sampleData = SampleData;
  faHeart = faHeart;
  faShoppingCart = faShoppingCart;
  faMagnifyingGlassPlus = faMagnifyingGlassPlus;
  faStar = faStar;
  faPlus = faPlus;
  faMinus = faMinus;

  product!: Product;
  numberOfSelectedProducts = 0;
  discountApplied = 0;
  maxRating = [1, 2, 3, 4, 5];

  activeTab: string = 'productDetails';

  currentProductRating = 0;

  constructor(private router: Router, private route: ActivatedRoute, private cartService: CartService) {
    this.route.params.subscribe(params => {
      const index = this.sampleData.products.findIndex(x => x.id === params['id']);

      if (index === -1)
        this.router.navigate(['/shop']);

      this.product = this.sampleData.products[index];
    });

    this.numberOfSelectedProducts = cartService.getCartItemAmount(this.product.id);
    this.applyBundleDiscount();
  }

  getRating(value: number, starWidth: number): string {
    return value * starWidth + "px";
  }

  getPrice() {
    return this.product.price * this.numberOfSelectedProducts - this.product.price * this.discountApplied;
  }

  handleRatingChange(event: Event) {
    let input = event.target as HTMLInputElement;

    if (Number(input.value) < 0)
      input.value = "0";

    if (Number(input.value) > 5)
      input.value = "5";

    this.currentProductRating = Math.round(Number(input.value) * 10) / 10;
  }

  applyBundleDiscount() {
    if (this.numberOfSelectedProducts >= 20)
      this.discountApplied = 0.4;
    else if (this.numberOfSelectedProducts >= 15)
      this.discountApplied = 0.3;
    else if (this.numberOfSelectedProducts >= 10)
      this.discountApplied = 0.2;
    else if (this.numberOfSelectedProducts >= 5)
      this.discountApplied = 0.1;
    else
      this.discountApplied = 0;
  }

  addToCart() {
    if (this.numberOfSelectedProducts === 0) return;

    this.cartService.addToCart({
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      totalPrice: this.getPrice(),
      hasDiscount: this.discountApplied !== 0,
      discountApplied: this.discountApplied,
      amount: this.numberOfSelectedProducts
    });
  }

  add() {
    this.numberOfSelectedProducts = this.numberOfSelectedProducts + 1;
    this.applyBundleDiscount();
  }

  remove() {
    if (this.numberOfSelectedProducts === 0) return;

    this.numberOfSelectedProducts = this.numberOfSelectedProducts - 1;
    this.applyBundleDiscount();
  }

  updateNumberOfItemsSelected(event: Event) {
    if (!(event.target)) {
      this.numberOfSelectedProducts = 0;
      this.applyBundleDiscount();
      return;
    }

    const input = (event.target as HTMLElement);
    if (!input) {
      this.numberOfSelectedProducts = 0;
      this.applyBundleDiscount();
      return;
    }

    if (!Number(input.textContent)) {
      this.numberOfSelectedProducts = 0;
      input.textContent = this.numberOfSelectedProducts.toString();
      this.applyBundleDiscount();
      return;
    }

    if (Number(input.textContent) < 0) {
      this.numberOfSelectedProducts = 0;
      input.textContent = this.numberOfSelectedProducts.toString();
      this.applyBundleDiscount();
      return;
    }

    this.numberOfSelectedProducts = (Number)(input.textContent);
    input.focus();
    input.click();
    this.applyBundleDiscount();
  }
}
