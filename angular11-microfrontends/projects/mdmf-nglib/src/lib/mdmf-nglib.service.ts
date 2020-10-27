import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MdmfNglibService {

  private callCount: number = 0;

  constructor() { 
    console.log("Constructing Example Service");
  }

  increment(): number {
    this.callCount++;
    return this.callCount;
  }
}
