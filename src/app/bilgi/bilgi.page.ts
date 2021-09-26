import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-bilgi',
  templateUrl: './bilgi.page.html',
  styleUrls: ['./bilgi.page.scss'],
})
export class BilgiPage implements OnInit {
  isim: string;
  eposta: string;
  konu: string;
  mesaj: string;

  constructor(private emailComposer: EmailComposer) {}

  ngOnInit() {
  }

  mailGonder() {
    let email = {
      to: 'fezaklc98@gmail.com',
      subject: this.konu,
      body: this.mesaj + "\n\nGönderen: " + this.isim + "(" + this.eposta + ")",
      isHtml: true
    }

    this.emailComposer.open(email);
  }
}
