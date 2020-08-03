import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})

export class LoginScreenContainerСomponent implements OnInit { 
  username: string;
  password: string;
  url: string = '/login';

  constructor(/*public $http: ng.IHttpService*/) {
  }

  ngOnInit(): void {
  }

  handleClick(): void{
    console.log(this.username + ' ' + this.password);
    
    /*this.$http.post(this.url, {username: this.username, password: this.password}).then((response: any) => {
      console.log(response.data);
      return response.data;
  });*/
  }

}
