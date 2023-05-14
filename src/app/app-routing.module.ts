import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllContactsComponent } from './all-contacts/all-contacts.component';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { ViewContactsComponent } from './view-contacts/view-contacts.component';
import { EditContactsComponent } from './edit-contacts/edit-contacts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  //all contacts : path - http://localhost:4200/
  {
    path :'' , component:AllContactsComponent
  },
  //add-Contact : path - http://localhost:4200/add-Contact
  {
    path :'add-Contacts' , component :AddContactsComponent
  },
  //view-Contact : path - http://localhost:4200/view-Contact/id (path parameter run chiyana server nu manasilavan  aanu :  engane kodukune)
  {
    path :'view-Contact/:id' , component : ViewContactsComponent
  },
  //edit-Contact : path - http://localhost:4200/edit-Contact/id
   {
    path : 'edit-Contact/:id' , component : EditContactsComponent
   },
   //page-note-found : http://localhost:4200/edfsdfdsf
   {
    path : '**',component :PageNotFoundComponent
   }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
