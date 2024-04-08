import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from "../service/service.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  checked = false;
  disabled = false;
  showAddUser:boolean=false;
  newname:string
  username:string
  name:any
  autouser:any
  constructor(public api:ServiceService ,public nav:Router  ) { }
  visibleAddUser(){
    this.showAddUser=!this.showAddUser
    this.getUser()
       }
  ngOnInit(): void {
    this.getUser()
  }
  async getUser(){
    let username = await this.api.getUser();
    localStorage.manager = JSON.stringify(username['data']);
    }
  async ConectFn(name){
    if(!this.name ){
      alert('enter user name')
      return;
          }else{
            let autouser = await this.api.findUser(this.name);
            this.autouser = autouser['data'];
            if(this.autouser.length >0){
              this.nav.navigate([ '/Home/'+ name ]);
            }else{
              alert('user name not found')
            }
          }


  }
  async AddUserFn(){
    let obj={
      name:this.newname,
    }
    let user = await this.api.insertUser(obj);
    if (user['status'] === 1) {
        alert('לקוח חדש נוצר');
        window.location.reload();
    } else {
      alert('שגיאה בעדכון');
      window.location.reload();
    }
  }
}
