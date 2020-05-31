import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { DatabaseService } from './../services/database.service';
import { Observable } from 'rxjs'
import { ToastController } from '@ionic/angular';
import { Router } from "@angular/router";


@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  mainForm: FormGroup;
  Data: any[] = []

  constructor(private db: DatabaseService, public formBuilder: FormBuilder, private router: Router, private toast: ToastController) { }

  ngOnInit() {
    this.db.dbState().subscribe((res) => {
      if(res){
        this.db.fetchUser().subscribe(item => {
          this.Data = item
        })
      }
    });
  
    this.mainForm = this.formBuilder.group({
      user_name: [''],
      person_id: [''],
      image: ['']
    })
  }

  storeData() {
    this.db.addUser(
      this.mainForm.value.user_name,
      this.mainForm.value.image,
      this.mainForm.value.person_id
    ).then((res) => {
      this.mainForm.reset();
    })
  }

  deleteSong(id){
    this.db.deleteUser(id).then(async(res) => {
      let toast = await this.toast.create({
        message: 'Usuario eliminado',
        duration: 2500
      });
      toast.present();      
    })
  }

}
