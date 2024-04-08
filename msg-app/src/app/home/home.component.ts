import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../service/service.service"
import { Router,ActivatedRoute } from '@angular/router';
import {FormGroup,FormControl,Validators,FormArray} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formData = new FormData();
  name: string
  Owner:string
  Receiver:string
  Subject:string
  date:string='2017'
  Message:string
  user:string
  username:any
  users:[]
  constructor(public router: ActivatedRoute,public api:ServiceService ,public nav:Router ) {
    this.router.params.subscribe((routerParams) => {
      this.name = routerParams.name;

    });
    this.getUser()
   }
 async SendFN(){
    let obj={
      Owner:this.name ,
      Receiver:this.Receiver,
      Subject:this.Subject,
      date:this.date,
      Message:this.Message
    }
     let Message = await this.api.SendMassage(obj);
  if (Message['status'] === 1) {
      alert('message sent');
      window.location.reload();
  } else {
    alert('some fild is empty');
    window.location.reload();
  }
  }
  async getUser(){
    let user=await this.api.getUser();
    this.users=user['data'];

  }
  linkTo(name){
    this.nav.navigate([ '/Management/'+ name ]);
  }
  ngOnInit(): void {

  }

}
