import { Injectable } from '@angular/core';
import { CartItem } from '../../data/data';
import { GlobalStateService } from '../globalState/global-state.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private globalState: GlobalStateService) {
  }

  addToCart(cartItem: CartItem) {
    const product = this.globalState.$cartItems().find(x => x.id === cartItem.id);

    if (!product) {
      this.globalState.$cartItems().push(cartItem);
      sessionStorage.setItem('cart', JSON.stringify(this.globalState.$cartItems()));
      return;
    }

    product.id = cartItem.id;
    product.name = cartItem.name;
    product.price = cartItem.price;
    product.totalPrice = cartItem.totalPrice;
    product.hasDiscount = cartItem.hasDiscount;
    product.discountApplied = cartItem.discountApplied;
    product.amount = cartItem.amount;
    sessionStorage.setItem('cart', JSON.stringify(this.globalState.$cartItems()));
  }

  getCartItems(): CartItem[] {
    return JSON.parse(sessionStorage.getItem('cart') ?? '[]');
  }

  getCartItemAmount(id: string): number {
    const cart: CartItem[] = JSON.parse(sessionStorage.getItem('cart') ?? '[]');
    return cart.find(x => x.id === id)?.amount ?? 0;
  }

  removeCartItem(id: string) {
    this.globalState.$cartItems.set(this.globalState.$cartItems().filter(x => x.id !== id));
    sessionStorage.setItem('cart', JSON.stringify(this.globalState.$cartItems()));
  }
}
