import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, SampleData } from '../../data/data';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart, faShoppingCart, faMagnifyingGlassPlus, faStar, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

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
  numberOfSelectedProducts = 1;
  discountApplied = 0;
  maxRating = [1, 2, 3, 4, 5];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      const index = this.sampleData.products.findIndex(x => x.id === params['id']);

      if (index === -1)
        this.router.navigate(['/shop']);

      this.product = this.sampleData.products[index];
    });
  }

  getRating(): string {
    return this.product.rating * 18 + "px";
  }

  getPrice() {
    return this.product.price * this.numberOfSelectedProducts - this.product.price * this.discountApplied;
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

  add() {
    this.numberOfSelectedProducts = this.numberOfSelectedProducts + 1;
    this.applyBundleDiscount();
  }

  remove() {
    if (this.numberOfSelectedProducts === 1) return;

    this.numberOfSelectedProducts = this.numberOfSelectedProducts - 1;
    this.applyBundleDiscount();
  }

  updateNumberOfItemsSelected(event: Event) {
    if (!(event.target)) {
      this.numberOfSelectedProducts = 1;
      this.applyBundleDiscount();
      return;
    }

    const input = (event.target as HTMLElement);
    if (!input) {
      this.numberOfSelectedProducts = 1;
      this.applyBundleDiscount();
      return;
    }

    if (!Number(input.textContent)) {
      this.numberOfSelectedProducts = 1;
      input.textContent = this.numberOfSelectedProducts.toString();
      this.applyBundleDiscount();
      return;
    }

    if (Number(input.textContent) <= 0) {
      this.numberOfSelectedProducts = 1;
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
