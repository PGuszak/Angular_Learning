import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable } from 'rxjs';
import { Task } from '../Tasks';
//never need an event emitter in this file since this file deals with 
//the obersvables for the event emmitter 
const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = "http://localhost:5000/tasks";

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl); //need the get with the "<>" because this is an observable (like a vector type)
  }

  deleteTask(task: Task): Observable<Task> { //needs to be of type observable because thats what it will return takes in a task: Task
    const url = `${this.apiUrl}/${task.id}`; //  UNDERSTAND HOW THIS WORKS AND WHY WITH THE ${} STUFF
    return this.http.delete<Task>(url);
  }

  //this function is of type event Obserbable 
  // as it takes in an event emmiter from the tasks.components
  // this is the function that makes the api calls and changes the html
  //this is a observable because it is always running to see if anything has changed
  //  on the event 
  updateTaskReminder(task:Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }

  addTask(task:Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }
}
