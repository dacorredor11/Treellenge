import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../users/user.model';



@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private storage: SQLiteObject;
  user = new BehaviorSubject([]);
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private platform: Platform, private sqlite: SQLite, private httpClient: HttpClient, private sqlPorter: SQLitePorter) {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'db_treellenge_5_30_2020.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          this.storage = db;
          this.getFakeData();
        });
    });
  }

  dbState() {
    return this.isDbReady.asObservable();
  }

  fetchUser(): Observable<User[]> {
    return this.user.asObservable();
  }

  getFakeData() {
    this.httpClient.get(
      'assets/dump.sql',
      { responseType: 'text' }
    ).subscribe(data => {
      this.sqlPorter.importSqlToDb(this.storage, data)
        .then(_ => {
          this.getUsers();
          this.isDbReady.next(true);
        })
        .catch(error => console.error(error));
    });
  }

  getUsers() {
    return this.storage.executeSql('SELECT * FROM users', []).then(res => {
      let items: User[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            id: res.rows.item(i).id,
            user_name: res.rows.item(i).user_name,
            image: res.rows.item(i).image,
            person_id: res.rows.item(i).person_id
          });
        }
      }
      this.user.next(items);
    });
  }

  // Add
  addSong(id, user_name, image, person_id) {
    let data = [id, user_name, image];
    return this.storage.executeSql('INSERT INTO users (id, user_name, image) VALUES (?, ?, ?)', data)
    .then(res => {
      this.getUsers();
    });
  }

  //get a single user
  getUser(id): Promise<User> {
    return this.storage.executeSql('SELECT * FROM songtable WHERE id = ?', [id]).then(res => { 
      return {
        id: res.rows.item(0).id,
        user_name: res.rows.item(0).user_name,  
        image: res.rows.item(0).image,
        person_id: res.rows.item(0).person_id 
      }
    });
  }

  // Delete
  deleteUser(id) {
    return this.storage.executeSql('DELETE FROM users WHERE id = ?', [id])
    .then(_ => {
      this.getUsers();
    });
  }

  updateUser(id, user: User) {
    let data = [user.user_name, user.image];
    return this.storage.executeSql(`UPDATE users SET user_name = ?, image = ? WHERE id = ${id}`, data)
    .then(data => {
      this.getUsers();
    })
  }

}
