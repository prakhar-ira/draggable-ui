import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  droppedData = '';
  counter = 0;
  counter1 = 0;
  dragEnd(event) {
    this.droppedData = '';
  console.log('Element was dragged', event);
  }

  refresh() {
    this.counter = 0;
    this.counter1 = 0;
  }
  onDrop(data: any): void {
    this.droppedData = data.dropData;
    switch (this.droppedData) {
      case 'Tea' : this.counter ++;
                    break;
      case 'Coffee' : this.counter1 ++;
                    break;
      default: break;
    }
    setTimeout(() => {
      this.droppedData = '';
    }, 2000);
  }
}
