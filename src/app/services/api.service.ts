import { HttpClient } from "@angular/common/http";
import { Films } from "../models/film/film.model";
import { Injectable } from "@angular/core";
import { promises } from "dns";

@Injectable()

export class ApiService{


    constructor(private client: HttpClient){}

    endpoind ='https://swapi.dev/api/films'

    async callApi(): Promise<Films>{
        return new Promise((resolve , reject)=>{
            this.client.get(this.endpoind).subscribe((data: any)=>{
                let result:Films = {title: data.title, episode_id: data.episode_id, opening_crawl: data.opening_crawl, director: data.director,
                producer: data.producer,
                release_date: data.release_date
                }
                resolve(result)
            })
        })
    }
}