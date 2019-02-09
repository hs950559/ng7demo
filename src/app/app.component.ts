import { Component, OnInit } from '@angular/core';
import { repos } from './models/repos';
import { GitHubService } from './services/github-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userName = 'hs950559';
  pageNo  = '2';
  sortOn = 'description';

  repos$: Observable<repos[]>;

  loading = false;
  errorMessage = '';

  constructor(private githubService: GitHubService) {
  }

  public getRepos() {
      this.loading = true;
      this.errorMessage = '';
      this.repos$ = this.githubService.getRepos(this.userName,this.pageNo,this.sortOn);
          // .subscribe((response) => {this.repos = response;},
          //            (error) => {
          //                this.errorMessage = error.message;
          //             },
          //             () => {this.loading = false;})

  }

  ngOnInit() {
    this.getRepos();
    console.log(this.githubService);
  }
}
