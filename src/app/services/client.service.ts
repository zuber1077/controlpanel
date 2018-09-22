import { Injectable } from '@angular/core';
import {
  FirebaseObjectObservable,
  FirebaseListObservable, AngularFireDatabase } from "angularfire2/database";
import "rxjs/add/operator/map";
import { Observable } from "rxjs";

// for Observables

// Import Models
import { Client } from '../models/Client';

@Injectable()
export class ClientService {
  clients: FirebaseListObservable<any[]>;
  client: FirebaseObjectObservable<any>;


  constructor(
    public af:AngularFireDatabase
  ) { 
    this.clients = this.af.list("/clients") as FirebaseListObservable<Client[]>;
   }

   getClients() {
     return this.clients;
   }

}
