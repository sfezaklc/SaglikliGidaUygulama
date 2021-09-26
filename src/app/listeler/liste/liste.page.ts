import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import { baseUrl } from '../../global';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.page.html',
  styleUrls: ['./liste.page.scss'],
})
export class ListePage implements OnInit {
  id: number;
  liste: any;
  kategoriler: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.http.get(baseUrl + "/listeler/" + this.id).subscribe((data) => {
      this.liste = data;
    });
    this.http.get(baseUrl + "/listeler/" + this.id + "/kategoriler").subscribe((data) => {
      this.kategoriler = data;
    });
  }

}
