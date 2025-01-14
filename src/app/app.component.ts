import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
  // timerSubscription!:Subscription
  // ngOnInit(): void {
  //   const newObservable = interval(1000)
  //   this.timerSubscription = newObservable.subscribe((data) => {
  //     console.log( new Date().toLocaleTimeString() + ' ' + data)
  //   })
  // }
  // cancelTime(){
  //   console.log("cancelling the time")
  //   this.timerSubscription.unsubscribe()
  // }
}
