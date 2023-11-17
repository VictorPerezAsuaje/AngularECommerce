import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ProductComponent } from './pages/product/product.component';
import { PostComponent } from './pages/post/post.component';
import { BlogComponent } from './pages/blog/blog.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home page',
    component: HomeComponent
  },
  {
    path: 'shop',
    title: 'Shop',
    component: ShopComponent
  },
  {
    path: 'shop/product/:id',
    title: 'Product',
    component: ProductComponent
  },
  {
    path: 'blog',
    title: 'Blog',
    component: BlogComponent
  },
  {
    path: 'blog/post/:slug',
    title: 'Post',
    component: PostComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];
