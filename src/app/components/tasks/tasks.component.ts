import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../Tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = []; //sets out variable of tasks of type array of tasks to our TASKS that is exported from db mocktasks.ts

  constructor(private taskservice: TaskService) { }

  ngOnInit(): void {
    this.taskservice.getTasks().subscribe((tasks) => (this.tasks = tasks)); 
    //make the services folder to make a seperate service for making out tasks variable
    //so that we can just import the service to get the tasks by a function call where ever
    //in this case to put in in the constructor function to populate it first thing on program start
  }

  deleteTask(task: Task) { //connects to the task serivice with the various functions
    this.taskservice.deleteTask(task).subscribe(() =>
      (this.tasks = this.tasks.filter(t => t.id !== task.id)));
    //FIGURE OUT WHAT SUBSCIRBE DOES!!!!!!!!!!!!!
  }

  toggleReminder(task: Task) //will connect to the services
  {
    task.reminder = !task.reminder;
    // console.log(task.reminder); //for debugging
      //instead use the task.service to update the reminder on the back end 
      //  as the front end is the one liner "if true use the class to color"
      //uses the subscribe because this is an observable function call
      this.taskservice.updateTaskReminder(task).subscribe();
  }

  addTask(task:Task) {
    console.log(task); //use this to debug as to make sure the %event var works in the html
  
    //go to serice first to make the request line then come back to call the service
    this.taskservice.addTask(task).subscribe((task) =>(this.tasks.push(task)));
    //ask about the whole function that is in the subscrible parens - don't get how they work
  }
}
