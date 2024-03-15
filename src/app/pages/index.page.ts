import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="p-8 h-screen bg-gray-300">
      <h1 class="text-3xl font-medium flex gap-3 items-center">Hello World!</h1>
    </div>
  `,
  styles: [
    `
      .logo {
        will-change: filter;
      }
      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
      .logo.angular:hover {
        filter: drop-shadow(0 0 2em #42b883aa);
      }
      .read-the-docs {
        color: #888;
      }
    `,
  ],
})
export default class HomeComponent {
  count = 0;

  increment() {
    this.count++;
  }
}
