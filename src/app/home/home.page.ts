import { Component, OnInit } from '@angular/core';
import { Films } from '../models/film/film.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private api: ApiService) {}

  films! : Films

  loading : boolean = false

  ngOnInit(): void {
    this.api.callApi().then((data)=>{
      this.films = data,
      this.loading = true
    })
  }

}
