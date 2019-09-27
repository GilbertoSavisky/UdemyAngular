import { NgModule } from '@angular/core';
import { OrderService } from 'app/order/order.services';
import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.service';
import { RestaurantsService } from 'app/restaurants/restaurants.service';

@NgModule({
  providers: [ShoppingCartService, OrderService, RestaurantsService]
})
export class CoreModule {}
