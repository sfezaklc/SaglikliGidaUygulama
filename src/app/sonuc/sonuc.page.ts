import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import { baseUrl } from '../global';

@Component({
    selector: 'app-sonuc',
    templateUrl: './sonuc.page.html',
    styleUrls: ['./sonuc.page.scss'],
})
export class SonucPage implements OnInit {
    tip: string;
    id: number;
    sonuc: any;

    constructor(private route: ActivatedRoute, private http: HttpClient) {
    }

    ngOnInit() {
        this.tip = this.route.snapshot.paramMap.get('tip');
        this.id = Number(this.route.snapshot.paramMap.get('id'));

        var url = baseUrl + "/" + (this.tip == 'marka' ? 'markalar' : 'urunler') + "/" + this.id;

        this.http.get(url).subscribe((data: any) => {
                this.sonuc = data;
                if (this.tip == 'marka') {
                    this.http.get(baseUrl + "/ara/marka/" + this.id).subscribe((data: any) => {
                        console.log(data);
                        this.sonuc.uygunsuzluklar = data;
                    })
                }
            },
            (error: any) => {
                this.sonuc = null;
                console.log("oops", error);
            });
    }

}
