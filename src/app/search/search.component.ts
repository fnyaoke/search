import { Component, Input, OnInit } from '@angular/core';
import { Users } from 'src/app/class/users';
import { IQuery } from 'src/app/interfaces/query';
import { RequestService } from 'src/app/service/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public query: IQuery = {query:"", type:""};
  check: boolean;

  constructor(public results:RequestService) { }

  submit(){
    this.check = undefined;
    setTimeout(()=>{
      if (this.query.type === "User"){
        this.check = true;
      } if (this.query.type === "Repository"){
        this.check = false;
      }
    }, 300)
  }

  ngOnInit(): void {
  }
}
