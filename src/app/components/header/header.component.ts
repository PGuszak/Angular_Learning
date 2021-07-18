import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = "Task Tracker";
  showAddTask:boolean = false;
  subscription!: Subscription;

  constructor(private uiService:UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value));
    //this componeents subscription var is our sucscription to our observable to our uiservice component 
    // onToggle function and settings our variable of "showAddTask" to our value we are taking in
   }

  ngOnInit(): void {
  }

  toggleAddTask() {
    // console.log("toggle here"); //to make sure the html calls the right function before moving forward drilling down
    this.uiService.toggleAddTask();
  }

}
