import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { faCartShopping, faSignIn, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartService } from '../../services/cartService/cart.service';

export interface MegaMenuItem {
  title: string,
  description: string,
  url: string
}

export interface MegaMenu {
  name: string,
  items: MegaMenuItem[]
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  faCartShopping = faCartShopping;
  faSignIn = faSignIn;
  faX = faX;

  activeMegaMenu?: MegaMenu;
  megaMenus: MegaMenu[] = [
    {
      name: "plants",
      items: [
        {
          title: "Perennials",
          description: "Explore our collection of perennial plants that come back year after year, adding beauty to your garden effortlessly.",
          url: "/shop"
        },
        {
          title: "Roses",
          description: "Discover the elegance and fragrance of our rose varieties, perfect for gardens, bouquets, and special occasions.",
          url: "/shop"
        },
        {
          title: "Climbers",
          description: "Find climbing plants that bring vertical interest to your garden, creating stunning natural backdrops.",
          url: "/shop"
        },
        {
          title: "Indoor",
          description: "Enhance your indoor spaces with our selection of houseplants, bringing greenery and freshness to your home.",
          url: "/shop"
        },
        {
          title: "Outdoor",
          description: "Elevate your outdoor areas with our outdoor plant options, making your garden or patio more inviting and beautiful.",
          url: "/shop"
        },
        {
          title: "Bedding",
          description: "Create cozy and colorful garden beds with our bedding plants, transforming your outdoor space.",
          url: "/shop"
        }
      ]
    },
    {
      name: "bulbs",
      items: [
        {
          title: "Tulips",
          description: "Brighten your garden with vibrant tulip varieties, adding a burst of color and charm in the spring.",
          url: "/shop"
        },
        {
          title: "Daffodils",
          description: "Welcome spring with the cheerful blooms of daffodils, a classic and beloved flower for your garden.",
          url: "/shop"
        },
        {
          title: "Alliums",
          description: "Add a touch of elegance to your garden with alliums, known for their unique spherical flower heads.",
          url: "/shop"
        },
        {
          title: "Iris",
          description: "Explore the beauty of iris flowers, available in a wide range of colors, to enhance your garden's appeal.",
          url: "/shop"
        },
        {
          title: "Amaryllis",
          description: "Cultivate stunning amaryllis bulbs, known for their large, striking blooms, as a centerpiece in your garden.",
          url: "/shop"
        },
        {
          title: "Muscari",
          description: "Create a charming atmosphere with muscari flowers, also called grape hyacinths, for a unique garden touch.",
          url: "/shop"
        }
      ]
    },
    {
      name: "seeds",
      items: []
    },
    {
      name: "materials",
      items: []
    },
    {
      name: "tools",
      items: []
    },
  ]

  cartMenuOpen: boolean = false;

  constructor(private cartService: CartService) {
  }

  getCartItems() {
    return this.cartService.getCartItems();
  }

  getTotal() {
    let total = 0;
    this.cartService.getCartItems().forEach(x => total += x.price * x.amount);
    return total;
  }

  removeItem(id: string) {
    this.cartService.removeCartItem(id);
  }

  closeMegaMenu() {
    this.activeMegaMenu = undefined;
  }

  closeCartMenu() {
    this.cartMenuOpen = false;
  }

  openCartMenu() {
    this.cartMenuOpen = true;
  }

  toggleMegaMenu(name: string) {
    const menu = this.megaMenus.find(x => x.name === name);
    if (!menu || this.activeMegaMenu?.name === menu.name || menu?.items.length === 0) {
      this.activeMegaMenu = undefined;
      return;
    }

    this.activeMegaMenu = menu;
  }
}
