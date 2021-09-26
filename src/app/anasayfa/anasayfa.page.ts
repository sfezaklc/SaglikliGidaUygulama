import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ModalController} from "@ionic/angular";
import {DuyuruPage} from "../duyurular/duyuru/duyuru.page";
import {baseUrl} from '../global';
import {HaberPage} from "../haberler/haber/haber.page";

@Component({
    selector: 'app-anasayfa',
    templateUrl: './anasayfa.page.html',
    styleUrls: ['./anasayfa.page.scss'],
})
export class AnasayfaPage implements OnInit {
    duyurular: any;
    haberler: any;
    toggled: boolean;

    slideOptions = {
        initialSlide: 0,
        slidesPerView: 2,
        autoplay: true
    };

    constructor(private http: HttpClient, public modalController: ModalController) {
        this.toggled = false;
    }

    ngOnInit() {
        this.http.get(baseUrl + "/duyurular").subscribe((data) => {
            this.duyurular = data;
        });

        this.http.get(baseUrl + "/haberler").subscribe((data) => {
            this.haberler = data;
        });
    }

    toggleSearch() {
        this.toggled = this.toggled ? false : true;
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


}
