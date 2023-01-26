import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {CustomerManagementService} from "../../core/services/customer-management.service";

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent {
  amount!: number;

  constructor(private http: HttpClient,
              private router: Router,
              private cstService: CustomerManagementService) {}

  withdraw(){
    // @ts-ignore
    const token = JSON.parse(localStorage.getItem('customer')).token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    const formData = {
      "amount": this.amount,
    };
    console.log(formData)


    this.cstService.withdraw(formData,headers)
      .subscribe(response => {
        console.log(response)
        this.router.navigate(['/']).then();
      });
  }
}
