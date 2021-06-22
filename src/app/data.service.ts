import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

  export class DataService {
    private REST_API_SERVER = "https://jsonplaceholder.typicode.com";
  

  constructor(private HttpClient: HttpClient) { }

  public getListOfPosts() {
    return this.HttpClient.get(this.REST_API_SERVER+'/posts');
  }

  public getListOfComments(postId: number) {
    return this.HttpClient.get(this.REST_API_SERVER+`/posts/${postId}/comments`)
  }

  public getUser(userId: number) {
    return this.HttpClient.get(this.REST_API_SERVER+`/users/${userId}`)
  }

  public getPost(postId: number) {
    return this.HttpClient.get(this.REST_API_SERVER+`/posts/${postId}`)
  }

  public getAlbums(userId: number) {
    return this.HttpClient.get(this.REST_API_SERVER+`/albums?userId=${userId}`)
  }
}
