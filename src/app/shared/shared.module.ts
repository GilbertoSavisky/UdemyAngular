import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeaveOrderGuard } from 'app/order/leave-order-guard';
import { OrderService } from 'app/order/order.services';
import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.service';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { LoggedInGuard } from 'app/scurity/loggedin.guard';
import { LoginService } from 'app/scurity/login/login.service';
import { InputComponent } from './input/input.component';
import { NotificationService } from './message/notifications.service';
import { SnackbarComponent } from './message/snackbar/snackbar.component';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  declarations: [
    InputComponent,
    RadioComponent,
    RatingComponent,
    SnackbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    InputComponent,
    RadioComponent,
    RatingComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SnackbarComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ShoppingCartService,
        LoginService,
        RestaurantsService,
        OrderService,
        NotificationService,
        LoggedInGuard,
        LeaveOrderGuard
      ]
    };
  }
}
