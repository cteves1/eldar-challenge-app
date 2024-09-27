import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CardModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  posts: any[] = [];

  constructor(private userService: UserService) {
    
  }

  ngOnInit(): void {
    this.userService.getPosts().subscribe({
      next: (data) => {
        this.posts = data;
        console.log('Posts fetched:', this.posts);
      },
      error: (error) => {
        console.error('Error fetching posts:', error);
      },
    });
  }

}
