import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  @Input()
  taskList!: string[];
 
  newtask!: string;
  constructor() { }

  ngOnInit(): void {
  
  }

  addTodo(){
    this.taskList.unshift(this.newtask);
    localStorage.setItem('my_tasks',JSON. stringify(this.taskList))
    this.newtask=' ';
  }

}
