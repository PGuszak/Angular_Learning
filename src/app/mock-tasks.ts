import { Task } from "./Tasks"; 
//so it will make the schema fit and so we can type out exported const db as an array of that schema

export const TASKS: Task[] = [
    {
        id: 1,
        text: "task 1",
        day: "May 5th at 2:30pm",
        reminder: false
    },
    {
        id: 2,
        text: "task 2",
        day: "June 5th at 2:30pm",
        reminder: false
    },
    {
        id: 3,
        text: "task 3",
        day: "July 5th at 2:30pm",
        reminder: false
    },
    {
        id: 4,
        text: "task 4",
        day: "August 5th at 2:30pm",
        reminder: false
    },
    {
        id: 5,
        text: "task 5",
        day: "September 5th at 2:30pm",
        reminder: false
    }

]