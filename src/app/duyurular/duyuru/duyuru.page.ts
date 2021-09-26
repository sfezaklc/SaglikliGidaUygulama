import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {HttpClient} from "@angular/common/http";
import {baseUrl} from '../../global';

@Component({
    selector: 'app-duyuru',
    templateUrl: './duyuru.page.html',
    styleUrls: ['./duyuru.page.scss'],
})
export class DuyuruPage implements OnInit {
    @Input("id") id;
    duyuru: any;

    constructor(public modalCtrl: ModalController, private http: HttpClient) {
    }

    ngOnInit() {
        this.http.get(baseUrl + "/duyurular/" + this.id).subscribe((data) => {
            this.duyuru = data;
        })
    }

    dismissModal() {
        this.modalCtrl.dismiss();
    }

}
