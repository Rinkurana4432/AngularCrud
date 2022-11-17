import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Data } from './data';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
   // get All Data from database
    getData(){
      return this.http.get<Data[]>("http://localhost:3000/Datahub")
    }
    // create data in database
    createData(data:Data){
      return this.http.post<Data[]>("http://localhost:3000/Datahub", data);
    }
    //Get single data by id
    getDataById(id:number){
      return this.http.get<Data>(`http://localhost:3000/Datahub/${id}`);
    }
    //update Data
    updatedata(data:Data){
      return this.http.put<Data>(`http://localhost:3000/Datahub/${data.id}`,data);

    }
    
  }
