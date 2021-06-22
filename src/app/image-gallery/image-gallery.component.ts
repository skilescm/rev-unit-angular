import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {

  photos: any = [];

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
     //get the product id from the current route
     const routeParams = this.route.snapshot.paramMap;
     const albumIdFromRoute = Number(routeParams.get('albumId'));
 
     this.dataService.getPhotos(albumIdFromRoute).subscribe((data: any )=> {
       console.log(data, "photo list from album");
       this.photos = data;
       
     })
  }

}
