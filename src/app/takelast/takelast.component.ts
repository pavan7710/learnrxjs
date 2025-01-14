import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take , takeLast  } from 'rxjs/operators'

@Component({
  selector: 'app-takelast',
  templateUrl: './takelast.component.html',
  styleUrl: './takelast.component.scss'
})
export class TakelastComponent implements OnInit {
  ngOnInit(): void {
      interval(500).pipe( take(10) , takeLast(5)  ).subscribe((data) => {
        console.log(data)
      })
  }
}
