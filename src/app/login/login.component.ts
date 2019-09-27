import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
      .post("http://localhost:3000/userLogIn", this.book.value)
      .toPromise()
      .then(response => {
        if (response === true) {
          this.router.navigate(["./home"]);
        }
        else {
          console.log('error')
        }
        // this.router.navigate(["./home"]);
        error => {
          console.log("error");
        };
      });
  }

}
