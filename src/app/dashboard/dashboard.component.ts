import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../utils/entities/user.entity';
import { GraphBarComponent } from './graph-bar/graph-bar.component';

@Component({
  selector: 'app-dashboard',
  imports: [GraphBarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  providers: [UserService],
})
export class DashboardComponent {
  user: Partial<User> = {};
  constructor(private userService: UserService) {
    this.userService.getUser().subscribe((res) => {
      //@ts-expect-error the proprierty exists
      this.user = res.results[0];
    });
  }
}
