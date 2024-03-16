import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Apiurl } from 'src/app/service/apiRoutepath';
import { BaseService } from 'src/app/service/base.service';
import { data } from 'src/assets/CountryData';
import Swal from 'sweetalert2';
import { CustomerData } from '../customer-list/customer-list.component';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss'],
})
export class EditCustomerComponent implements OnInit {
  customerForm!: FormGroup;
  customerPrefillData!: CustomerData;
  isEdit = false;

  contries!: string[];
  states!: string[];
  cities!: string[];

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EditCustomerComponent>,
    private baseService: BaseService,
    @Inject(MAT_DIALOG_DATA) data: CustomerData
  ) {
    this.customerPrefillData = data;
  }

  ngOnInit(): void {
    this.defaultSelection();
    this.initializeForm();
    if (this.customerPrefillData) {
      this.isEdit = true;
      this.setFormData();
    }
  }
  
  defaultSelection(){
    this.contries = Object.keys(data);
    // this.states = Object.keys(data['United States']);
    // this.cities = data['United States']['California'];
  }

  onCountrySelect() {
    const selectedCountry = this.customerForm.value.country;
  
    this.states = Object.keys(data[selectedCountry]);
  
    const selectedState = this.states[0];
    // this.customerForm.get('state')?.setValue(selectedState);
  
    // const cities = data[selectedCountry][selectedState];
  
    // const selectedCity = cities[0];
    // this.customerForm.get('city')?.setValue(selectedCity);
    // console.log("this.customerForm.get('city'): ", this.customerForm.get('city')?.value);
  }
  

  onStateSelect() {
    const selectedCountry = this.customerForm.value.country;
    const selectedState = this.customerForm.value.state;
    console.log(this.customerForm.value.state);
    this.cities = data[selectedCountry][selectedState];
    this.customerForm.get('city')?.setValue(this.cities[0]);
  }

  initializeForm() {
    this.customerForm = this.formBuilder.group({
      customerName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      // country: [this.contries[0], Validators.required],
      // state: [this.states[0], Validators.required],
      // city: [this.cities[0], Validators.required],
    });
  }

  setFormData() {

    this.customerForm.get('customerName')?.setValue(this.customerPrefillData.customerName);
    this.customerForm.get('email')?.setValue(this.customerPrefillData.email);
    this.customerForm.get('mobileNumber')?.setValue(this.customerPrefillData.mobileNumber);
    this.customerForm.get('country')?.setValue(this.customerPrefillData.country);
    this.customerForm.get('state')?.setValue(this.customerPrefillData.state);
    this.customerForm.get('city')?.setValue(this.customerPrefillData.city);

    // this.customerForm.setValue(this.customerPrefillData);
  }

  addCustomer() {
    this.customerForm.markAllAsTouched();

    if (this.customerForm.valid) {
      console.log(this.customerForm.value);
      let addData = this.customerForm.value;
      let clientId = JSON.parse(localStorage.getItem('client') || '').clientId;
      addData.clientId = clientId;
      console.log("clientId: ", clientId);

      this.baseService
        .post(Apiurl.customers, addData)
        .then((res) => {
          console.log('res: ', res);
          Swal.fire({
            icon: 'success',
            title: 'Successful!',
            text: `Customer "${this.customerForm.value.customerName}" Added Successfully`,
            showConfirmButton: false,
            timer: 1000
          });
          this.dialogRef.close();
        });
    } else {
      console.log('invalid');
    }
  }

  editCustomer() {
    this.customerForm.markAllAsTouched();
    if (this.customerForm.valid) {
      console.log(this.customerForm.value);

      this.baseService
        .put(
          Apiurl.customers + '/' + this.customerPrefillData.id,
          this.customerForm.value
        )
        .then((res) => {
          console.log('edit res', res);
          Swal.fire({
            icon: 'success',
            title: 'Successful!',
            text: `Client "${this.customerForm.value.customerName}" Edited Successfully`,
            showConfirmButton: false,
            timer: 1000
          });
          this.dialogRef.close();
        });
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
