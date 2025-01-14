import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs'
import { takeWhile } from 'rxjs/operators';
@Component({
  selector: 'app-takewhile',
  templateUrl: './takewhile.component.html',
  styleUrl: './takewhile.component.scss'
})
export class TakewhileComponent implements OnInit {
    ngOnInit(): void {
      interval(1000).pipe(takeWhile((x , i) => x <= 5)).subscribe((data) => {
        console.log(data , "take while")
      },
      (error) => {
        console.log(error)
      },
      () => {
        console.log("Complete take while")
      }
    )
    }
}
