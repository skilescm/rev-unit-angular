import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';



@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.getListOfPosts().subscribe((data: any )=> {
      this.posts = data;
    })
    
  }

}
