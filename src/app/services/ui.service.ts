import { Injectable } from '@angular/core';
import { observable, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  //function to toggle add task
  toggleAddTask(): void {
    console.log(123);
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask); //toggles the boolean val
  }

  onToggle(): Observable<any> { //this is what I will subscrible to when using the toggleAddTask() in code will to this.onToggle.subscribe();
    return this.subject.asObservable(); //return the observable function so we can toggle the value when called
  }
}
