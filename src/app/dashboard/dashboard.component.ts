import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
book;
  constructor(public http: HttpClient, public router: Router) { }

  ngOnInit() {
    this.book = new FormGroup({
      adminName: new FormControl(),
      passWord: new FormControl()
  });
}
submitData() {
  this.http
    .post("http://localhost:3000/userLogIn", this.book.value)
    .toPromise()
    .then(response =>{
      if(response=="Success"){
        this.router.navigate(['././admintimeslot']);
      }
      else{
        console.log('error');
      }
      error => {
        console.log("error");
      };
    });
}

}
