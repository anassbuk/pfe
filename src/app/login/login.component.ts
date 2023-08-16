import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
declare var $:any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login :FormGroup|any;
  constructor(private _http:HttpClient, private _route: Router) { }
 
  ngOnInit(): void {
    this.login= new FormGroup({
      'email':new FormControl(),
      'password': new FormControl(),
    })
  }

  logindata(login:FormGroup){
    //console.log(this.login.value)
    this._http.get<any>("http://localhost:3000/singup")
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.email === this.login.value.email && a.password === this.login.value.password
      });
      if(user){
        alert('You are in !! ')
        this.login.reset();
        //$('.form-box').css('display','none');
       this._route.navigate(['home']);
      }else{
        alert('User not found')
        this._route.navigate(['login']);
      }
    
    },err=>{
      alert('Somthing was not corect ')
    }
    )
   
  }
  sbtn(){

  }

}
