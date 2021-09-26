import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ModalController} from "@ionic/angular";
import {DuyuruPage} from "./duyuru/duyuru.page";
import {baseUrl} from '../global';

@Component({
    selector: 'app-duyurular',
    templateUrl: './duyurular.page.html',
    styleUrls: ['./duyurular.page.scss'],
})
export class DuyurularPage implements OnInit {
    duyurular: any;

    constructor(private http: HttpClient, public modalController: ModalController) {
    }

    async duyuruModal(id) {
        const modal = await this.modalController.create({
            component: DuyuruPage,
            cssClass: 'my-custom-class',
            componentProps: {
                'id': id
            }
        });
        return await modal.present();
    }

    dismissModal() {
        this.modalController.dismiss();
    }

    ngOnInit() {
        this.http.get(baseUrl + "/duyurular").subscribe((data) => {
            this.duyurular = data;
        })
    }

}
