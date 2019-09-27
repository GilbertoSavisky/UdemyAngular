import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/observable/timer';
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
      transition('visible => hidden', animate('500ms 0s ease-out')),
      transition('hidden => visible', animate('500ms 0s ease-in'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  snackVisibility = 'hidden';
  message: string;
  constructor(private notificationsService: NotificationService) { }


  ngOnInit() {
    this.notificationsService.notifier.subscribe(message => {
      this.message = message;
      this.snackVisibility = 'visible';
      Observable.timer(3000).subscribe(timer => this.snackVisibility = 'hidden');
    });
  }
}
