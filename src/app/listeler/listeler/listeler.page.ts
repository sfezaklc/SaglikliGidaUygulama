import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { baseUrl } from '../../global';

@Component({
    selector: 'app-listeler',
    templateUrl: './listeler.page.html',
    styleUrls: ['./listeler.page.scss'],
})
export class ListelerPage implements OnInit {
    listeler: any;

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.http.get(baseUrl + "/listeler").subscribe((data) => {
            this.listeler = data;
        })
    }
}
