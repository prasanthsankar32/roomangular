import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
book;
  constructor(public http: HttpClient, public router: Router) { }

  ngOnInit() {
    this.book = new FormGroup({
      startupName: new FormControl(),
      passWord: new FormControl(),
      confPwd: new FormControl(),
      email: new FormControl()
    });
  }
  submitData() {
    this.http
      .post("http://localhost:3000/userSignUp", this.book.value)
      .toPromise()
      .then(response => {
        this.book = response;
        this.router.navigate(["./login"]);
        error => {
          console.log("error");
        };
      });
  }

}
