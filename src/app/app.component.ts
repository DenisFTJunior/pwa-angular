import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatActionList, MatListItem } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatActionList, MatListItem, MatIcon],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'pwa';
  date = new Date().toDateString();

  ngAfterContentInit() {
    if (Notification.permission === 'granted')
      setTimeout(() => this.notify(), 1000);
    else
      Notification.requestPermission().then((res) => {
        res === 'granted' && this.notify();
      });
  }

  notify() {
    const res = new Notification('Hello, World!', { tag: 'n' });
    return res;
  }
}
