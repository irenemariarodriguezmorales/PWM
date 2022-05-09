import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private firestore: AngularFirestore, private router: Router) { }

  generateNewId() {

    return String(Math.floor((Math.random()*6)+1));

  }

 //----------------------------------------------------- Users (Collection: Users) ------------------------------------------------//
  
 getAllUsers() {
  return new Promise<any>((resolve)=> {
  this.firestore.collection('Users')
  .valueChanges({ idField: 'id' })
  .subscribe(users => resolve(users));
  })
}

  addUser(newId: string, name: string, email: string, password: string) {
    this.firestore.collection("Users")
    .doc(newId)
    .set({name:name,email:email,password:password, type:"user"});
  }

  addONG(newId: string, name: string, email: string, direccion: string, code: string, tlf: string, password:string) {
    this.firestore.collection("Users")
    .doc(newId)
    .set({name:name, email:email, direccion:direccion, code:code, tlf:tlf, password:password, type:"ong"});
  }

  
  //----------------------------------------------------- Animals (Collection: AnimalDatabase) ------------------------------------------------//

  getAllAnimals() {
    return new Promise<any>((resolve)=> {
    this.firestore.collection('AnimalDataBase')
    .valueChanges({ idField: 'id' })
    .subscribe(animals => resolve(animals));
    })
  }

  async addAnimal(newId: string, name: string, type: string, description: string, foto:string) {
    await this.firestore.collection("AnimalDataBase")
    .doc(newId)
    .set({name:name,type:type,description:description,images:foto});

    window.location.reload();
  }

  async updateAnimal(id:any, name:string, description:string) {
    await this.firestore.collection("AnimalDataBase")
    .doc(id)
    .update({ name:name,description:description});

    this.router.navigate(['Mainpage_admin']);

  }
    

  async deleteAnimal(id: string) {
    await this.firestore.collection('AnimalDataBase').doc(id).delete();
    window.location.reload();
  }

  //----------------------------------------------------- Comments (Collection: CommentSection) ------------------------------------------------//

  getAllComments() {
    return new Promise<any>((resolve)=> {
      this.firestore.collection('CommentSection')
      .valueChanges({ idField: 'id' })
      .subscribe(comments => resolve(comments));
    })
  }

  async addComment(newId: string, text: string) {
    await this.firestore.collection("CommentSection")
    .doc(newId)
    .set({texto:text});
    window.location.reload();
  }

  async deleteComment(id: string) {
    await this.firestore.collection('CommentSection').doc(id).delete();
    window.location.reload();
  }

}
