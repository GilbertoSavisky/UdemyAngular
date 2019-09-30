import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { NotificationService } from '../notifications.service';


@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snack-visibility', [
      state('hidden', style({
        opacity: 0,
        bottom: '0px'
      })),
      state('visible', style({
        opacity: 1,
        bottom: '30px'
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  snackVisibility = 'hidden';
  message: string;
  constructor(private notificationService: NotificationService) { }


  ngOnInit() {
    this.notificationService.notifier._do((message: string) => {
      this.message = message;
      this.snackVisibility = 'visible';
    }).switchMap((message: any) => Observable.timer(3000)).subscribe((timer: any) => this.snackVisibility = 'hidden');
  }
}
