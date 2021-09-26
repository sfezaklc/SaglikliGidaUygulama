import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ModalController} from "@ionic/angular";
import {HaberPage} from "./haber/haber.page";
import {baseUrl} from '../global';
import {DuyuruPage} from "../duyurular/duyuru/duyuru.page";

@Component({
    selector: 'app-haberler',
    templateUrl: './haberler.page.html',
    styleUrls: ['./haberler.page.scss'],
})
export class HaberlerPage implements OnInit {
    haberler: any;

    constructor(private http: HttpClient, public modalController: ModalController) {
    }

    async haberModal(id) {
        const modal = await this.modalController.create({
            component: HaberPage,
            cssClass: 'my-custom-class',
            componentProps: {
                'id': id
            }
        });
        return await modal.present();
    }

    ngOnInit() {
        this.http.get(baseUrl + "/haberler").subscribe((data) => {
            this.haberler = data;
        })
    }

}
