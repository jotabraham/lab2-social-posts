import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() postObject!: Post;
  // Step 1
  @Output() deleted = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  // step 2
  deletePost = ():void => {
    this.deleted.emit();
  }
}

// 1.create output decorator in child TS
// 2.create method/event emitter in child TS
// 3.add listener/method to child HTML
// 4.create function in parent TS
// 5.reference event (from child) in parent HTML
// 6.reference function from parent TS in Parent HTML
