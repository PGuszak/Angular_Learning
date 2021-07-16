import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter(); //IMPORTANT LINE to know how it works
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  //now can use fa-icon in as html tag
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: Task) { //make sure to type the variables just like in c++
    // console.log(task); //for testing to see if the click of the button works
    this.onDeleteTask.emit(task); //now that we have the function go to the html of the outlayer container (tasks)
  }

  onToggle(task: Task) { //use the event emmiter above to make this event a thing for when called in the tasks tasks.component.ts
    this.onToggleReminder.emit(task);
  }

}
