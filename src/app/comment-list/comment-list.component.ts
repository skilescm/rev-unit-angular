import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  @Input() postId: number = 0;
  comments: any = [];

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    console.log(this.postId, "post id sent to comment list");
    this.dataService.getListOfComments(this.postId).subscribe((data: any )=> {
      this.comments = data;
      console.log(this.comments, "list of comments");
    })
  }

}
