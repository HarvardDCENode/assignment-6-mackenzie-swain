import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  toDoList = [
    {
      _id: 1,
      title: "Wash dishes",
      description: "Clean off the dishes and load into the dishwasher",
      assignee: "Everyone",
      type: "daily",
      completed: false
    },
    {
      _id: 2,
      title: "Unload dishwasher",
      description: "In the morning unload the dishwasher to start the day",
      assignee: "Dad",
      type: "daily",
      completed: false
    },
    {
      _id: 3,
      title: "Pick up shoes",
      description: "Put shoes in their respective cubby at the end of the day",
      assignee: "Everyone",
      type: "daily",
      completed: false
    },
    {
      _id: 4,
      title: "Laundry",
      description: "Start the laundry. Move from washer to dryer",
      assignee: "Mom",
      type: "daily",
      completed: false
    },
    {
      _id: 5,
      title: "Wipe counters",
      description: "Wipe down counters in the kitchen at the end of the day",
      assignee: "Mackenzie",
      type: "daily",
      completed: false
    },
    {
      _id: 6,
      title: "Trash",
      description: "Take out the trash to the end of the block",
      assignee: "Mackenzie",
      type: "weekly",
      completed: false
    },
    {
      _id: 7,
      title: "Bring in the garabage bins",
      description: "After trash day bring the garabage bins back to the garage",
      assignee: "John",
      type: "weekly",
      completed: false
    },
    {
      _id: 8,
      title: "Pay credit card",
      description: "Pay off credit card",
      assignee: "Dad",
      type: "weekly",
      completed: false
    },
    {
      _id: 9,
      title: "Grocery shopping",
      description: "Make a list and go to the store for the week",
      assignee: "Mom",
      type: "weekly",
      completed: false
    },
    {
      _id: 10,
      title: "Vacuum",
      description: "Living and dining room",
      assignee: "John",
      type: "weekly",
      completed: false
    }
  ];

  constructor() { }

  listTasks() {
    return this.toDoList;
  }
  listTaskByType(type: string) {
    return this.toDoList.filter(task => task.type === type)
  }

  findDailyTaskById(id: number) {
    return this.toDoList.find(task => {
      return task._id == id;
    });
  }

  findDailyTaskByAssignee(assignee: string) {
    return this.toDoList.filter(task => task.assignee == assignee);
  }

  getAssignees() {
    const assigneeList: string[] = [];
    this.toDoList.forEach(task => {
      if(!assigneeList.includes(task.assignee)) {
        assigneeList.push(task.assignee)
      }
    });
    return assigneeList;
  }
}
