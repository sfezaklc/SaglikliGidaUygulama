import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {HttpClient} from "@angular/common/http";
import {baseUrl} from '../../global';

@Component({
    selector: 'app-haber',
    templateUrl: './haber.page.html',
    styleUrls: ['./haber.page.scss'],
})
export class HaberPage implements OnInit {
    @Input("id") id;
    haber: any;

    constructor(public modalCtrl: ModalController, private http: HttpClient) {
    }

    ngOnInit() {
        this.http.get(baseUrl + "/haberler/" + this.id).subscribe((data) => {
            this.haber = data;
        })
    }

    dismissModal() {
        this.modalCtrl.dismiss();
    }

}
