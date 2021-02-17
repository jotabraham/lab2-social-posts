import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  showForm: boolean = false;

  myPosts:Post[] = [
    {
      title: "Mondays",
      thought: "Am I right"
    },
    {
      title: "Is that me?",
      thought: "Being able to tolerate the sound of your own voice in a video is probably the highest form of self acceptance"
    },
    {
      title: "ohshitohshitohshit",
      thought: "Anxiety is like when video game combat music is playing but you can't find any enemies"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onDelete = (index:number):void => {
    this.myPosts.splice(index, 1);
  }

  onSubmit = (post: Post):void => {
    this.myPosts.push(post);
    this.toggleForm();
  }

  toggleForm = () =>{
    this.showForm = !this.showForm;
  }

}
