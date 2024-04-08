import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../service/service.service"
import { Router,ActivatedRoute } from '@angular/router';
import {FormGroup,FormControl,Validators,FormArray} from '@angular/forms';
@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
  checked = false;
  disabled = false;
  showSentmsg:boolean=true;
  showRecivemsg:boolean=false;
  name:any
  Sentmassage:any
  Incomemassage:any
  massages:any
  constructor(public router: ActivatedRoute,public api:ServiceService ,public nav:Router) {
    this.router.params.subscribe((routerParams) => {
      this.name = routerParams.name;
    });
    this.findSentMassage()
    this.findIncomeMassage()
   }
   visibleAddUser(){
    this.showSentmsg=!this.showSentmsg
    this.showRecivemsg=!this.showRecivemsg;
           }

  ngOnInit(): void {
  }
  async delMassage(id){
    let massages=await this.api.deleteMassage(id)
    this.massages=massages['data']
    this.findSentMassage()
    this.findIncomeMassage()

  }
  linkTo(name){
    this.nav.navigate([ '/Home/'+ name ]);
  }
  async findSentMassage(){
    let massage = await this.api.findSentMassage(this.name);
    this.Sentmassage = massage['data'];
  }
async findIncomeMassage(){
  let massage = await this.api.findIncomeMassage(this.name);
  this.Incomemassage = massage['data'];
}
}
