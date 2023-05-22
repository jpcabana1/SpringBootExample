import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-grid-button',
  templateUrl: './home-grid-button.component.html',
  styleUrls: ['./home-grid-button.component.css'],
})
export class HomeGridButtonComponent implements OnInit {
  @Input() customerId!: string;

  constructor(private router: Router) {}

  ngOnInit() {}

  click() {
    this.router.navigate(['/order-by-customer'], {
      queryParams: { customerId: this.customerId },
    });
  }
}