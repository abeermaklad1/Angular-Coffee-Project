import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  baseURL = 'https://jsonplaceholder.typicode.com';

  constructor(public myClient: HttpClient) { }

  getAllUsers() {
    return this.myClient.get(`${this.baseURL}/users`);
  }
  getUsersById(userId: any) {
    return this.myClient.get(`${this.baseURL}/users/${userId}`);
  }
  addUser(user: {name: string, age: number}) {
    return this.myClient.post(`${this.baseURL}/users`,user);

  }
  deleteUser(userId: any) {
    return this.myClient.delete(`${this.baseURL}/users/${userId}`);
  }
  editUser(userId: any, user: {name: string, age: number}) {
    return this.myClient.put(`${this.baseURL}/users/${userId}`, user);
  }
}
