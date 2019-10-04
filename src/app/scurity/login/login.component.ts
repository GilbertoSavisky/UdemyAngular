import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'app/shared/message/notifications.service';
import { LoginService } from './login.service';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  navigateTo: string;

  constructor(private fb: FormBuilder,
    private loginService: LoginService,
    private notificatioService: NotificationService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
   }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required]),
    })
    this.navigateTo = this.activatedRoute.snapshot.params['to'] || '/'
  }

  login() {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe( user => this.notificatioService.notify(`Bem vindo, ${user.name}`),
      response => this.notificatioService.notify(response.error.message),
      () => {
        this.router.navigate([this.navigateTo]);
      });
  }

}
