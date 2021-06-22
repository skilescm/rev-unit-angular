import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserDisplayComponent } from './user-display/user-display.component';
import { UserAlbumComponent } from './user-album/user-album.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    PostListComponent,
    PostDetailComponent,
    UserDetailComponent,
    CommentListComponent,
    UserDisplayComponent,
    UserAlbumComponent,
    ImageGalleryComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
