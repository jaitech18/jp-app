import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private actRoute: ActivatedRoute) { }
   title = 'JP-app'
  ngOnInit(): void {
    this.title = this.actRoute.snapshot.params.title;
  }
}
