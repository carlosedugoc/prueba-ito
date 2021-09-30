import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from './user.interface';

@Injectable({
  providedIn: 'root'
})

export class MainService {

  ELEMENT_DATA: IUser[] = [
    {user: 'Hydrogen',email: 'Hydrogen@gmail.com', name:'Hydrogen', surname: 'H', active: true},
    {user: 'Helium',email: 'Helium@gmail.com', name:'Helium', surname: 'He', active: true},
    {user: 'Lithium',email: 'Lithium@gmail.com', name:'Lithium', surname: 'Li', active: true},
    {user: 'Beryllium',email: 'Beryllium@gmail.com', name:'Beryllium', surname: 'Be', active: true},
    {user: 'Boron',email: 'Boron@gmail.com', name:'Boron', surname: 'B', active: true},
    {user: 'Carbon',email: 'Carbon@gmail.com', name:'Carbon', surname: 'C', active: true},
    {user: 'Nitrogen',email: 'Nitrogen@gmail.com', name:'Nitrogen', surname: 'N', active: true},
    {user: 'Oxygen',email: 'Oxygen@gmail.com', name:'Oxygen', surname: 'O', active: true},
    {user: 'Fluorine',email: 'Fluorine@gmail.com', name:'Fluorine', surname: 'F', active: true},
    {user: 'Neon',email: 'Neon@gmail.com', name:'Neon', surname: 'Ne', active: true},
    {user: 'Sodium',email: 'Sodium@gmail.com', name:'Sodium', surname: 'Na', active: true},
    {user: 'Magnesium',email: 'Magnesium@gmail.com', name:'Magnesium', surname: 'Mg', active: true},
    {user: 'Aluminum',email: 'Aluminum@gmail.com', name:'Aluminum', surname: 'Al', active: true},
    {user: 'Silicon',email: 'Silicon@gmail.com', name:'Silicon', surname: 'Si', active: true},
    {user: 'Phosphorus',email: 'Phosphorus@gmail.com', name:'Phosphorus', surname: 'P', active: true},
    {user: 'Sulfur',email: 'Sulfur@gmail.com', name:'Sulfur', surname: 'S', active: true},
    {user: 'Chlorine',email: 'Chlorine@gmail.com', name:'Chlorine', surname: 'Cl', active: true},
    {user: 'Argon',email: 'Argon@gmail.com', name:'Argon', surname: 'Ar', active: true},
    {user: 'Potassium',email: 'Potassium@gmail.com', name:'Potassium', surname: 'K', active: true},
    {user: 'Calcium',email: 'Calcium@gmail.com', name:'Calcium', surname: 'Ca', active: true},
  ];

  selectedData


  constructor() {
    this.data.next(this.ELEMENT_DATA)
  }

  private data = new BehaviorSubject<IUser[]>([])
  data$ = this.data.asObservable()

  public getData() {
    return this.ELEMENT_DATA
  }

  public setData(valor) {
    this.ELEMENT_DATA.unshift(valor)
    this.data.next(this.ELEMENT_DATA)
  }

  public updateData(valor) {
    this.ELEMENT_DATA = this.ELEMENT_DATA.filter(x => x.email !== valor.email)
    this.ELEMENT_DATA.push(valor)
    this.data.next(this.ELEMENT_DATA)
  }

  public searchData(valor:string) {
    if(valor) {
      let data = [...this.ELEMENT_DATA.filter(x => x.user.toLowerCase().includes(valor.toLowerCase()))]
      this.data.next(data)
    }else {
      this.data.next(this.ELEMENT_DATA)
    }
  }

}




