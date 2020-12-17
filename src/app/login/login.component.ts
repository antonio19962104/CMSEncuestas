import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/Usuario';
import { validationMessage } from '../models/validationMessage';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  objVal = new validationMessage();
  msg = this.objVal.account_validation_messages;
  token: any;
  constructor(private data: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  login(data: Usuario) {
    this.data.login(data).subscribe(
      data => localStorage.setItem('tokenValidation', data.token),// = data,
      error => alert('error' + error)
    );
    if (localStorage.getItem('tokenValidation') != null && localStorage.getItem('tokenValidation') != '') {
      this.router.navigate(['/dashboard']);
    }
  }

}
