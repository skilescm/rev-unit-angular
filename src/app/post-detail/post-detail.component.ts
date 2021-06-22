import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  
  post: any = [];
  userNumber: number = 0;
  postNumber: number = 0;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    //get the product id from the current route
    const routeParams = this.route.snapshot.paramMap;
    const postIdFromRoute = Number(routeParams.get('postId'));

    this.dataService.getPost(postIdFromRoute).subscribe((data: any )=> {
      this.post = data;
      const userId = Number(this.post['userId']);
      const postId = Number(this.post['id']);
      this.userNumber = userId;
      this.postNumber = postId;
    })
  }

}
