import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Tasks';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  TaskName!: string;
  TaskDate!: string;    //can be named here but pay attention to the names in the schema to not get confused
  TaskReminder: boolean = false;
  showAddTask!: boolean; //this is the flag to toggle the whole component
  subscription!: Subscription;

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.TaskName) {
      alert("Please enter in a Task Name!");
      return;
    }
    
    const newTask = {
      text: this.TaskName,
      day: this.TaskDate,   //must follow the structure of the db schema - feilds must be the same names
      reminder: this.TaskReminder,
    }

    this.onAddTask.emit(newTask); //this function to add the task is now a functiont that can be called by the other html docs
            // specicfically in the tasks.components.html or the parent component

    this.TaskName = '';
    this.TaskDate = '';
    this.TaskReminder = false;
  }

}
