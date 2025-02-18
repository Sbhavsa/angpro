import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    { id: 1, name: 'ERP', description: 'We also provide custom-designed ERP Solutions tailored according to the precise requirements of the clients.', imageUrl: '04-Software-Solution-1.jpg', category: 'software' },
    { id: 2, name: 'IoT Device', description: 'Smart IoT Device',  imageUrl: 'baani.png', category: 'hardware' },
    { id: 3, name: 'RTOMS', description: 'RTOMS stands of Real Time Order Management system where user can place order online.', imageUrl: '01-Software-Solution-1.jpg', category: 'software' },
    { id: 4, name: 'SMSP', description: 'SMSP is Android Operating System based Milk Procurement System is specially',  imageUrl: '03-Software-Solution-1.jpg', category: 'software' }
  ];
  getProductsByCategory(category: 'software' | 'hardware'): Observable<Product[]> {
    const filteredProducts = this.products.filter(product => product.category.toLowerCase() === category.toLowerCase());
    console.log('Filtered Products:', filteredProducts); // Debugging
    return of(filteredProducts);
  }
  

  constructor() { }
}


