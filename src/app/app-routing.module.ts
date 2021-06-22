import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';


const routes: Routes = [
    { path: '', component: PostListComponent },
    { path: 'home', component: PostListComponent},
    { path: 'post/:postId', component: PostDetailComponent},
    { path: 'user/:userId', component: UserDetailComponent},
    { path: 'album/:albumId', component: ImageGalleryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
