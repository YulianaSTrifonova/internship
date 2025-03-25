import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToDoItem } from '../../shared/models/ToDoItem';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor(private http: HttpClient) { }

  /*
  private getStandardOptions: any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }
  */

  getToDos() {
    /* let options = this.getStandardOptions(); */
    return this.http.get('assets/todos.json' /* , options */);
    // the get method returns an Observable

    //this.http.post(url, body, options)
  }

  /*
  private addToDo(todo: ToDoItem) {
    let options = this.getStandardOptions();

    options.header = options.headers.set('Authorization','value-needed-for-authorization');
    this.http.post('assets/todos.json', todo, options)
  }
  */
}
