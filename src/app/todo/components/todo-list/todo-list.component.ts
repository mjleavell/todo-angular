import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource, MatSort } from '@angular/material';
import { TodoDataService } from '../../services/todo-data.service';
import { TodoItem } from '../../models/todo-item.model';

@Component({
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  constructor(private router: Router, private todoDataSvc: TodoDataService) { }

  displayedColumns: string[] = ['id', 'name', 'description', 'createDate', 'dueDate', 'completedDate', 'isLate', 'isPastDue'];
  items: MatTableDataSource<TodoItem>;

  @ViewChild(MatSort, null) sort: MatSort;

  ngOnInit() {
    this.todoDataSvc.getAll().subscribe(data => {
      this.items = new MatTableDataSource(data);
      this.items.sort = this.sort;
    });
  }

  public itemClicked(row: TodoItem) {
    this.router.navigate(['/todo', row.id]);
  }
}
