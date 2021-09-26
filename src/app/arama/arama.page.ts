import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { baseUrl } from '../global';

@Component({
    selector: 'app-arama',
    templateUrl: './arama.page.html',
    styleUrls: ['./arama.page.scss'],
})
export class AramaPage implements OnInit {
    title = 'Sağlıklı Gıda Bilgi Uygulaması';
    aramaYapildi = false;
    sonuclar: any;
    markaSayisi = 0;
    urunSayisi = 0;
    aramaTipi = 'urun';
    duyurular: any;

    slideOptions = {
        initialSlide: 0,
        slidesPerView: 2,
        autoplay: true
      };

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.http.get(baseUrl + "/duyurular").subscribe((data: any) => {
            this.duyurular = data;
            console.log(data);
        },
        (error: any) => {
            this.duyurular = null;
            console.log("oops", error);
        });

    }

    changeSegment(event) {
        this.aramaTipi = event.detail.value;
    }

    onSubmit(aranacak_kelime) {
        let formData = new FormData();
        formData.append("aranacak_kelime", aranacak_kelime);

        this.http.post(baseUrl + "/ara", formData).subscribe((data: any) => {
                this.sonuclar = data;
                this.markaSayisi = data.markalar.length;
                this.urunSayisi = data.urunler.length;
                console.log(this.urunSayisi);
                this.aramaTipi = 'urun';

                if (this.urunSayisi <= 0) {
                    this.aramaTipi = 'marka';
                }

                this.aramaYapildi = true;
            },
            (error: any) => {
                this.sonuclar = null;
                console.log("oops", error);
            });
    }
}