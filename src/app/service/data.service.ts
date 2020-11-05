import { Injectable } from '@angular/core';
import { Users } from 'src/app/class/users';
import { Repository } from 'src/app/class/repos';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IQuery } from '../interfaces/query';

@Injectable({
  providedIn: 'root',
})
export class DataService {
    public results: Users;
    public repos = [];
}
export class RequestService {
  public results: Users;
  public repos = [];

  private;

  constructor(private http: HttpClient) {}

  getRepos(query: IQuery) {
    this.results = new Users(0, '', '', '', '');
    this.repos = [];

    let userUrl =
      'https://api.github.com/users/' +
      query.query +
      '?access_token=' +
      environment.apiKey;

    let repoUrl =
      'https://api.github.com/users/' +
      query.query +
      '/repos?access_token=' +
      environment.apiKey;

    let promise = new Promise((resolve,reject)=>{
      this.http.get(repoUrl).toPromise().then((response: Repository[])=>{
        for(let repo of response){
          this.repos.push(new Repository(repo.id, repo.name, repo.owner, repo.description))
        }
        resolve()
      },
      error=>{
        this.repos = [new Repository(null, "Unavailable", new Users(0, null, null, null, null) , null)];
        console.log("No repository response from Github API");
        reject(error);
      })
    })
    return promise;

    // this.http.get(userUrl).subscribe((data: User) => {
    //   this.results = new User(
    //     data.id,
    //     data.name,
    //     data.login,
    //     data.avatar_url,
    //     repoUrl
    //   );
    // });
  }
  reposUrl() {}
}
