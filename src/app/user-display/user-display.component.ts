import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {
  @Input() userId: number = 0;

  user: any = [];
  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    console.log(this.userId, "user id passed to getUser");
    this.dataService.getUser(this.userId).subscribe((data: any) => {
      console.log(data);
      this.user = data;
    })
  }

}
