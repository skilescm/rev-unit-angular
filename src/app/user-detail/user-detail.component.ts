import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: any = [];
  albums: any = [];

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {    

    //get the user's id from the current route
    const routeParams = this.route.snapshot.paramMap;
    const userIdFromRoute = Number(routeParams.get('userId'));

    this.dataService.getUser(userIdFromRoute).subscribe((data: any )=> {
      this.user= data;
      console.log(this.user, "user detail data");
    })

    this.dataService.getAlbums(userIdFromRoute).subscribe((data: any) => {
      console.log(data, "user's albums");
      this.albums = data;
    })
  
  }

}
