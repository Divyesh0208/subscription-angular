import { Component, Inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { ClientData } from '../client-list/client-list.component';
import { BaseService } from 'src/app/service/base.service';
import { Apiurl } from 'src/app/service/apiRoutepath';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss'],
})
export class EditClientComponent implements OnInit {

  showPassword = false;
  clientForm!: FormGroup;
  clientPrefilledData!: ClientData;
  isEdit = false;

  constructor(
    private formBuilder: FormBuilder,
    private baseService: BaseService,
    private dialogRef: MatDialogRef<EditClientComponent>,
    @Inject(MAT_DIALOG_DATA) data: ClientData
  ) {
    this.clientPrefilledData = data;
    console.log('clientData', data);
  }

  ngOnInit(): void {
    this.initializeForm();
    if (this.clientPrefilledData) {
      this.isEdit = true;
      this.setFormData();
    }
  }

  toggleVisibility(){
    this.showPassword = !this.showPassword;
  }

  initializeForm() {
    this.clientForm = this.formBuilder.group({
      clientName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      address: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: [
        '',
        [Validators.required],
        [this.confirmPasswordAsyncValidator.bind(this)],
      ],
    });
  }

  confirmPasswordAsyncValidator(
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      const password = control.parent?.get('password');
      const confirmPassword = control.parent?.get('confirmPassword');
      if (
        password &&
        confirmPassword &&
        password.value !== confirmPassword.value
      ) {
        resolve({ passwordMismatch: true });
      } else {
        resolve(null);
      }
    });
  }

  setFormData() {
    this.clientForm.get('clientName')?.setValue(this.clientPrefilledData.clientName);
    this.clientForm.get('email')?.setValue(this.clientPrefilledData.email);
    this.clientForm.get('mobileNumber')?.setValue(this.clientPrefilledData.mobileNumber);
    this.clientForm.get('address')?.setValue(this.clientPrefilledData.address);
    this.clientForm.get('startDate')?.setValue(this.clientPrefilledData.startDate);
    this.clientForm.get('endDate')?.setValue(this.clientPrefilledData.endDate);

    const decryptedBytes = CryptoJS.AES.decrypt(this.clientPrefilledData.password, 'zxcvbnm!@#$%^');
    const decryptedPassword = decryptedBytes.toString(CryptoJS.enc.Utf8);
    console.log("this.clientPrefilledData.password: ", this.clientPrefilledData.password);
    console.log("decryptedPassword: ", decryptedPassword);

    this.clientForm.get('password')?.setValue(decryptedPassword);
    this.clientForm.get('confirmPassword')?.setValue(decryptedPassword);
  }

  addClient() {
    this.clientForm.markAllAsTouched();
    if (this.clientForm.valid) {
      console.log(this.clientForm.value);
      const addClientData = this.clientForm.value;
      delete addClientData['confirmPassword'];

      addClientData.password =  CryptoJS.AES.encrypt(addClientData.password, 'zxcvbnm!@#$%^').toString();
      console.log("addClientData: ", addClientData);

      this.baseService.post(Apiurl.clients, addClientData).then( (res) => {
        
        console.log("res: ", res);
        Swal.fire({
          icon: 'success',
          title: 'Successful!',
          text: `Client ${this.clientForm.value.clientName} Added Successfully`,
          showConfirmButton: false,
          timer: 1000
        });
        this.dialogRef.close();
      })

    } else {
      console.log('invalid');
    }
  }

  editClient() {
    this.clientForm.markAllAsTouched();
    if (this.clientForm.valid) {
      console.log(this.clientForm.value);

      this.baseService.put(Apiurl.clients + '/' +  this.clientPrefilledData.id, this.clientForm.value).then ( (res) => {

        console.log("edit res", res);
        Swal.fire({
          icon: 'success',
          title: 'Successful!',
          text: `Client ${this.clientForm.value.clientName} Edited Successfully`,
          showConfirmButton: false,
          timer: 1000
        });
        this.dialogRef.close();
      })

    } else {
      console.log('invalid');
    }
  }

  cancel() {
    Swal.fire({
      title: 'Confirmation',
      text: 'Are you sure you want to cancel the form?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((res) => {
      if (res.isConfirmed) {
        // this.router.navigate(['dashboard/lottery']);
        this.dialogRef.close();
      }
    });
  }
}
