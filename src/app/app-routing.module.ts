import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';


const routes: Routes = [
    { path: '', component: PostListComponent },
    { path: 'home', component: PostListComponent},
    { path: 'post/:postId', component: PostDetailComponent},
    { path: 'user/:userId', component: UserDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
