import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EditClientComponent } from 'src/app/admin/edit-client/edit-client.component';
import { Apiurl } from 'src/app/service/apiRoutepath';
import { BaseService } from 'src/app/service/base.service';
import { EditCustomerComponent } from '../edit-customer/edit-customer.component';
import { data } from 'src/assets/CountryData';
import Swal from 'sweetalert2';

export interface CustomerData {
  id?: string;
  clientId?: string;
  customerName: string;
  email: string;
  mobileNumber: string;
  country: string;
  state: string;
  city: string;
}

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit{
  displayedColumns: string[] = [
    'customerName',
    'email',
    'mobileNumber',
    'country',
    'state',
    'city',
    'actions',
  ];
  dataSource!: MatTableDataSource<CustomerData>;
  clientId!: string;

  constructor(
    private baseService: BaseService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.fetchData();
    this.clientId = JSON.parse(localStorage.getItem('client') || '').clientId;
    // console.log("this.states: ", Object.keys(data["India"]));
  }

  fetchData(){
    this.baseService.get(Apiurl.customers).then( (res:CustomerData[]) => {
      console.log("res: ", res);
      const filteredData = res.filter( customer => customer.clientId === this.clientId)
      console.log("filteredData: ", filteredData);
      console.log((this.clientId));
      
      console.log("data: ", data);

      this.dataSource = new MatTableDataSource(filteredData);
      console.log("this.dataSource: ", this.dataSource.filteredData);
    })
  }

  addCustomer() {
    this.dialog.open(EditCustomerComponent,{
      width: '500px'
    })
  }

  editCustomer(data: CustomerData) {
    console.log("edit data: ", data);

    this.dialog.open(EditCustomerComponent,{
      width: '500px',
      data: data
    })
    
  }

  deleteCustomer(data: CustomerData) {
      Swal.fire({
        title: 'Confirmation',
        text: `Are you sure you want to delete Customer "${data.customerName}"?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
      }).then((res) => {
        if (res.isConfirmed) {
          // this.router.navigate(['dashboard/lottery']);
          this.baseService.delete(`${Apiurl.customers}/${data.id}`).then( (res) => {
            console.log("delete res: ", res);
          })
        }
      });
  }
}
