import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { skip, take } from 'rxjs/operators';

@Component({
  selector: 'app-skipoperator',
  templateUrl: './skipoperator.component.html',
  styleUrl: './skipoperator.component.scss'
})
export class SkipoperatorComponent implements OnInit {
  ngOnInit(): void {
    interval(500).pipe(  take(20) , skip(10) ).subscribe((data) => {
      console.log(data)
    } , error => {
      console.log(error)
    } , () => {
      console.log("complete")
    })
  }
}
