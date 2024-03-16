import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apiurl } from './apiRoutepath';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: HttpClient) { }

  get(url:any): Promise<any>{

    // const login_token = localStorage.getItem('token');

    // if(login_token !== null){
    //   var token = new HttpHeaders().set('Authorization',`Bearer ${login_token}`)
    // }

    return new Promise(async (resolve, reject) => {
      // this.http.get(Apiurl.routePath + url , {params:data ,headers:token}).subscribe((response:any)=>{
      this.http.get(Apiurl.routePath + url).subscribe((response:any)=>{
        resolve(response);
      },(err)=>{
        reject(err);
      })
    })
  }

  post(url: any, params: any,headers?: HttpHeaders): Promise<any> {
    // const login_token = localStorage.getItem('token_key');

    // if (login_token !== null) {
    //   var header = new HttpHeaders().set("Authorization", `Bearer ${login_token}`);
    //   }
    return new Promise(async (resolve, reject) =>
        // this.http.post(Apiurl.routePath + url, params, { headers: header }).subscribe((response) => {
        this.http.post(Apiurl.routePath + url, params).subscribe((response) => {
            resolve(response);
        },
            (error) => {
                console.log('error: ', error);
                reject(error);
            })
    );
}

// getDataById(id: number): Promise<any> {

//   const login_token = localStorage.getItem('token_key');

//   if (login_token !== null) {
//       var header = new HttpHeaders().set("Authorization", `Bearer ${login_token}`);
//   }


//   return new Promise(async (resolve, reject) =>
//         this.http.get(`http://localhost:33333/api/shopping/add/product/${id}`, { headers: header }).subscribe((response) => {
//             resolve(response);
//         },
//             (error) => {
//                 console.log('error: ', error);
//                 reject(error);
//             })
//     );
// }
delete(url: any): Promise<any> {
  // const login_token = localStorage.getItem('token_key');
  // if (login_token !== null) {
  //     var header = new HttpHeaders().set("Authorization", `Bearer ${login_token}`);
  // }

  return new Promise(async (resolve, reject) =>
      // this.http.delete(Apiurl.routePath + url, { headers: header }).subscribe((data) => {
      this.http.delete(Apiurl.routePath + url).subscribe((data) => {
          resolve(data);
      }, (error) => {
          reject(error);
      })
  );
}

put(url: any, params: any): Promise<any> {
  // const login_token = localStorage.getItem('token_key');
  // if (login_token !== null) {
  //     var header = new HttpHeaders().set("Authorization", `Bearer ${login_token}`);
  // }
  return new Promise(async (resolve, reject) =>
      // this.http.put(Apiurl.routePath + url, params, { headers: header }).subscribe((data) => {
      this.http.put(Apiurl.routePath + url, params).subscribe((data) => {
          resolve(data);
      },
          (error) => {
              reject(error);
          })
  );
}
}
