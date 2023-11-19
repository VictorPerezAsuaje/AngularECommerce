import { Injectable, signal } from '@angular/core';
import { CartItem } from '../../data/data';

@Injectable({
  providedIn: 'root'
})
export class GlobalStateService {
  public $cartItems = signal<CartItem[]>([]);

  constructor() { }
}
