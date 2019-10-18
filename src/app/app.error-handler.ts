import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { LoginService } from './scurity/login/login.service';
import { NotificationService } from './shared/message/notifications.service';

@Injectable()
export class ApplicationErrorHandler  extends ErrorHandler {

  constructor(private notificationService: NotificationService, private injector: Injector) {
    super();
  }
  handleError(erroResponse: HttpErrorResponse | any) {
    if ( erroResponse instanceof HttpErrorResponse) {
      const message = erroResponse.error.message;
      switch (erroResponse.status) {
        case 401:
          this.injector.get(LoginService).handleLogin();
          break;
        case 403:
          this.notificationService.notify(message || 'Não autorizado.');
          break;
        case 404:
            this.notificationService.notify(message || 'Recurso não encontrado. Verifique o console para mais detalhes.');
          break
      }
    }
    super.handleError(erroResponse)
  }
}
