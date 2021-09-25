import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import HomeMemberModel from '../models/HomeMember.model';

@Injectable({
  providedIn: 'root',
})
export class HomeMembersService {
  public homeMembers: HomeMemberModel[] = [];
  constructor(public http: HttpClient) {
    this.getHomeMembers();
  }

  getHomeMembers() {
    this.http
      .get<HomeMemberModel[]>('http://localhost:3001/homemembers')
      .subscribe(
        (homeMembers) => (this.homeMembers = homeMembers),
        (error) =>
          alert(
            'HTTP error: ' +
              ' Status: ' +
              error.status +
              ' Message: ' +
              error.error.error
          )
      );
  }
}
