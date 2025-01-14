import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators'
@Component({
  selector: 'app-takeoperator',
  templateUrl: './takeoperator.component.html',
  styleUrl: './takeoperator.component.scss'
})
export class TakeoperatorComponent implements OnInit {
  ngOnInit(): void {
     interval(500).pipe(take(5)).subscribe((data) => {
      console.log(data)
     } , error => {
      console.log(error)
     }
    
    )
  }
}
