import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { repos } from '../models/repos';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GitHubService {

   baseURL= "https://api.github.com/";

   constructor(private httpClient: HttpClient){
   }

   getRepos(userName: string, PageNo: string, SortOn: string): Observable<repos[]> {

        const params = new HttpParams()
                .set('page', PageNo)
                .set('sort', SortOn);
   
        console.log(params.toString());

        return this.httpClient.get<repos[]>(this.baseURL + 'users/' + userName + '/repos', {params});
   }
}
