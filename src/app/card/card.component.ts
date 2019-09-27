import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from "@angular/router";
import { HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
bookcontent;
  constructor(public activatedRoute: ActivatedRoute, public http: HttpClient) { }
  cards = [
    {
      img: "assets/img/2.jpg",
      title: "Heaven On Earth",
      author:"Michael Shermer",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet"
    },
    {
      img:"assets/img/3.jpg",
      title:"Human Universe",
      author:"Brian Cox",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet"
    },
    {
      img:"assets/img/5.jpg",
      title:"Lost and Founder",
      author:"Rand Fishkin",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet"
    }
  ]
  ngOnInit() {
  }

}
