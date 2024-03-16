import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientData } from 'src/app/admin/client-list/client-list.component';
import { Apiurl } from 'src/app/service/apiRoutepath';
import { BaseService } from 'src/app/service/base.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  admin = { email: 'admin@gmail.com', password: 'admin@123' };
  client = { email: 'client@gmail.com', password: 'client@123' };

  showPassword = false;
  loginForm!: FormGroup;
  clients!: ClientData[];
  clientId!: string;
  clientName!: string;
  clientEndSubscriptionDate!: Date;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private baseService: BaseService
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.fetchClients();
  }

  fetchClients(): void {
    this.baseService.get(Apiurl.clients).then((res: ClientData[]) => {
      console.log(res);
      this.clients = res;
      // this.clients = res.map((item) => {
      //   return {
      //     email: item.email,
      //     password: item.password,
      //   };
      // });
      console.log('this.clients: ', this.clients);
    });
  }

  initializeForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  toggleVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      console.log('admin: ', this.admin);
      console.log('credentials: ', credentials);
      
      let clientCheck = false;
      this.clients.find(client => {
        console.log(client);
        if((client.email === credentials.email) && (client.password === credentials.password)){
          clientCheck = true;

          client.id ? this.clientId = client.id : null;
          client.clientName ? this.clientName = client.clientName : null;
          client.endDate ? this.clientEndSubscriptionDate = new Date(client.endDate) : null;
        }
      })
      if (
        credentials.email === this.admin.email &&
        credentials.password === this.admin.password
      ) {
        localStorage.setItem('admin', 'true');
        Swal.fire({
          icon: 'success',
          title: 'Login Successful!',
          showConfirmButton: false,
          timer: 1000,
          // text: 'Welcome to our application',
        });
        this.router.navigate(['admin']);
      }
      // else if (
      //   credentials.email === this.client.email &&
      //   credentials.password === this.client.password
      // ) {
      //   localStorage.setItem('client', 'true');
      //   Swal.fire({
      //     icon: 'success',
      //     title: 'Login Successful!',
      //     // text: 'Welcome to our application',
      //   });
      //   this.router.navigate(['client']);
      // }
      else if(clientCheck){
        if(this.clientEndSubscriptionDate < new Date()){
          const endDate = this.clientEndSubscriptionDate.toLocaleDateString("en-GB")
          console.log("endDate: ", endDate);
          console.log("subscription end");
          Swal.fire({
            icon: 'error',
            title: 'Login Failed!',
            text: `Subscription expired on ${endDate}. Please renew to continue access`,
          });
        }
        else{
          const setData = { client: true, clientId:  this.clientId, clientName: this.clientName };
          localStorage.setItem('client', JSON.stringify(setData));
          Swal.fire({
            icon: 'success',
            title: 'Login Successful!',
            showConfirmButton: false,
            timer: 1000,
            // text: 'Welcome to our application',
          });
          this.router.navigate(['client']);
        }
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed!',
          text: 'Invalid Email or Password please try again',
        });
      }
    }
  }
}
