import {Component, OnInit, Input} from '@angular/core';

import {CustomerService} from '../customer.service';
import {Customer} from '../customer';

@Component({
  selector: 'customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  @Input() customer: Customer;

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
  }

  updateActive(isActive: boolean) {
    this.customerService.updateCustomer(this.customer.$key, {active: isActive})
  }

  deleteCustomer() {
    this.customerService.deleteCustomer(this.customer.$key)
  }

}