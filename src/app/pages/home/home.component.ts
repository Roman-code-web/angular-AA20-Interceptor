import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/servicios/userdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //1.declaro variables
  listaUser:any=[];
  nombreApp!:string;
  //2.
  constructor( private userdataservice:UserdataService){}

  //4.
  ngOnInit(): void {
    this.getlistarUser();
    this.nombreApp= this.userdataservice.nombreAPP;
  }

  //3.
  getlistarUser(){
    this.userdataservice.getUser().subscribe(
      res=>{
        this.listaUser=res
      },
      error=>{}
    )
  }
}
