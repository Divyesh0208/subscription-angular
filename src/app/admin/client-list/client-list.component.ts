import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditClientComponent } from '../edit-client/edit-client.component';
import { BaseService } from 'src/app/service/base.service';
import { Apiurl } from 'src/app/service/apiRoutepath';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

export interface ClientData {
  id?: string;
  clientName: string;
  email: string;
  mobileNumber: string;
  address: string;
  startDate: Date;
  endDate: Date;
  password: string;
  confirmPassword?: string;
}

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent implements OnInit {
  displayedColumns: string[] = [
    'clientName',
    'email',
    'mobileNumber',
    'address',
    'startDate',
    'endDate',
    'actions',
  ];
  dataSource!: MatTableDataSource<ClientData>;

  constructor(
    private dialog: MatDialog,
    private baseService: BaseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.baseService.get(Apiurl.clients).then((res) => {
      this.dataSource = new MatTableDataSource(res);
      console.log('this.dataSource: ', this.dataSource.filteredData);
    });
  }

  addClient() {
    this.dialog.open(EditClientComponent, {
      width: '500px',
      disableClose: true,
      // height: '900px'
    });
  }

  editClient(data: ClientData) {
    // console.log('editClient: ', data);
    this.dialog.open(EditClientComponent, {
      width: '500px',
      disableClose: true,
      data: data,
      // height: '900px'
    });
  }

  deleteClient(data: ClientData) {
    // console.log('deleteClient: ', id);
    // this.baseService.delete(Apiurl.clients + '/' + id).then((res) => {
    //   console.log(res);
    // });
    // this.fetchData();

    Swal.fire({
      title: 'Confirmation',
      text: `Are you sure you want to delete Client "${data.clientName}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((res) => {
      if (res.isConfirmed) {
        // this.router.navigate(['dashboard/lottery']);
        this.baseService.delete(`${Apiurl.clients}/${data.id}`).then((res) => {
          console.log('delete res: ', res);
        });
      }
    });
  }
}
