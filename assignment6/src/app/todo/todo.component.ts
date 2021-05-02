import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  providers: [ TodoService ],
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  dailyTasks: any;
  weeklyTasks: any;
  tasks: any;  
  taskByAssignee: any;
  showByType = false;
  showByAssignee = true;


  ngOnInit(): void {
    this.dailyTasks = this.todoService.listTaskByType('daily');
    this.weeklyTasks = this.todoService.listTaskByType('weekly');;

    this.taskByAssignee = this.organizeByAssignee(this.todoService.getAssignees());
    this.getAssigneeTasksInLists(this.taskByAssignee);
  }

  organizeByAssignee(assignees: string[]) {
    type Task = {
      id?: number;
      title: string;
      description: string;
      assignee: string;
      type: string;
      completed: boolean;
    };

    let taskByAssignee = new Map<string, Task[]>();

    for (let i in assignees) {
      taskByAssignee.set(assignees[i], this.todoService.findDailyTaskByAssignee(assignees[i]));
    }
    return taskByAssignee;
  }

  getAssigneeTasksInLists(name: string) {
    return this.todoService.findDailyTaskByAssignee(name);
  }

  getKeys(map: any[]){
    return Array.from(map.keys());
  }

  sortByAssignee() {
    this.showByAssignee = true;
    this.showByType = false;
  }

  sortByType() {
    this.showByAssignee = false;
    this.showByType = true;
  }

}
