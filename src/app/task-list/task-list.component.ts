import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() tasks :any;
  searchText!: string;
  constructor() { }

  ngOnInit(): void {
  }

  removeTodo(index:number){
  this.tasks.splice(index,1)
  localStorage.setItem('my_tasks',JSON. stringify(this.tasks))
  }

  checked(index:number){
    this.tasks.checked(index,1)
    localStorage.setItem('my_tasks',JSON. stringify(this.tasks))
  }

}
