import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute } from "@angular/router";
import { baseUrl } from '../../global';

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.page.html',
  styleUrls: ['./kategori.page.scss'],
})
export class KategoriPage implements OnInit {
  liste_id: number;
  kategori_id: number;
  kategori: any;
  markalar: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.liste_id = Number(this.route.snapshot.parent.parent.paramMap.get('id'));
    this.kategori_id = Number(this.route.snapshot.paramMap.get('id'));
    this.http.get(baseUrl + "/kategoriler/" + this.kategori_id).subscribe((data) => {
      this.kategori = data;
    });
    this.http.get(baseUrl + "/listeler/" + this.liste_id + "/kategoriler/" + this.kategori_id).subscribe((data) => {
      this.markalar = data;
    });
  }
}

