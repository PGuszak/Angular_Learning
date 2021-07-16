//just the file the is the schema for the mock-tasks.ts db
export interface Task {
    id?: number, //the "?" makes the feild optional
    text: string,
    day: string,
    reminder: boolean
}