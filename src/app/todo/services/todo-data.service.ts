import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppSettingsService } from '../../core/services/app-settings.service';
import { TodoItem } from '../models/todo-item.model';

@Injectable()
export class TodoDataService {
  constructor(private appSettingsSvc: AppSettingsService, private httpClient: HttpClient) { }

  private baseUrl = `${this.appSettingsSvc.settings.apiUrl}/v1/todoitems`;

  // gets list of todo items
  public getAll(): Observable<Array<TodoItem>> {
    return this.httpClient.get<Array<TodoItem>>(this.baseUrl);
  }

  // gets single todo item
  public get(id: number): Observable<TodoItem> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.get<TodoItem>(url);
  }
}
