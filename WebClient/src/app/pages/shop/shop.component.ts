import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Product, SampleData } from '../../data/data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart, faShoppingCart, faMagnifyingGlassPlus, faX } from '@fortawesome/free-solid-svg-icons';

interface ShopFilter {
  type?: string,
  categories?: string[],
  minPrice: number,
  maxPrice: number
}

export interface ProductType {
  name: string;
}

export interface ProductCategory {
  name: string;
}

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, FontAwesomeModule, FormsModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})

export class ShopComponent {
  sampleData = SampleData;
  faHeart = faHeart;
  faShoppingCart = faShoppingCart;
  faMagnifyingGlassPlus = faMagnifyingGlassPlus;
  faX = faX;

  minPrice: number = 0;
  maxPrice: number = 0;

  products: Product[] = this.sampleData.products;
  filteredProducts?: Product[];
  filter: ShopFilter = {
    minPrice: 0,
    maxPrice: 0
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const products = this.products.sort(x => x.price);
      this.maxPrice = Math.ceil(products[products.length - 1].price);
      this.minPrice = Math.floor(products[0].price);

      this.filter = {
        type: params["type"],
        categories: [],
        maxPrice: this.maxPrice,
        minPrice: this.minPrice
      };

      if (params["category"])
        this.filter.categories?.push(params["category"]);

      this.applyFilter();
    });
  }

  handleCategoryClear() {
    this.filter.categories = [];
    this.applyFilter();
  }

  handleTypeClear() {
    this.filter.type = undefined;
    this.applyFilter();
  }

  handleMaxPriceChange(event: Event) {
    this.filter.maxPrice = (Number)((event.target as HTMLInputElement).value);
    this.applyFilter();
  }

  handleTypeFilterChange(name: string) {
    this.filter.type = name;
    this.applyFilter();
  }

  handleCategoryFilterChange(name: string) {
    if (this.filter.categories?.includes(name)) {
      this.filter.categories = this.filter.categories?.filter(category => category !== name);
    }
    else {
      this.filter.categories?.push(name);
    }

    this.applyFilter();
  }

  applyFilter() {
    this.filteredProducts = this.products.filter(product => {
      let categoryMatch = true;
      let typeMatch = true;
      let priceMatch = true;

      if (this.filter.categories && this.filter.categories?.length > 0)
        categoryMatch = this.filter.categories?.includes(product.category.name) ?? false;

      if (this.filter.type)
        typeMatch = product.type.name === this.filter.type;

      priceMatch = product.price >= this.filter.minPrice && product.price < this.filter.maxPrice;

      return categoryMatch && typeMatch && priceMatch;
    });

  }
}
