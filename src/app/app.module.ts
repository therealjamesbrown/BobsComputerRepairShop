/**
 * 
 * ================================
 * ; Title: BCRS PROJECT
 * ; Authors: Sarah Kovar; James Brown; Brendan Mulhern
 * ; Modified by: James Brown
 * ; Date: 10/14/2020
 * ; Description: Application for Bobs Computer Repair Shop.
 * ================================
 * 
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { BaseLayoutComponent } from './shared/base-layout/base-layout.component';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './pages/signin/signin.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CookieService } from 'ngx-cookie-service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { AdministrationComponent } from './pages/administration/administration.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { AboutComponent } from './pages/about/about.component';
import { MatTableModule } from '@angular/material/table';
import { PostDialogComponent } from './pages/post-dialog/post-dialog.component';
import { PutDialogComponent } from './pages/put-dialog/put-dialog.component';
import { PatchDialogComponent } from './pages/patch-dialog/patch-dialog.component';
import { RolemanagementComponent } from './pages/administration/rolemanagement/rolemanagement.component';
import { CatalogmanagementComponent } from './pages/administration/catalogmanagement/catalogmanagement.component';
import { PurchasegraphComponent } from './pages/administration/purchasegraph/purchasegraph.component';
import { SecurityquestionmanagementComponent } from './pages/administration/securityquestionmanagement/securityquestionmanagement.component';
import { UsermanagementComponent } from './pages/administration/usermanagement/usermanagement.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DeleteRecordDialogComponentComponent } from './pages/administration/rolemanagement/delete-record-dialog-component/delete-record-dialog-component.component';
import { CreateRoleDialogComponent } from './pages/administration/dialogs/create-role-dialog/create-role-dialog.component';
import { CreateSecurityquestionDialogComponent } from './pages/administration/dialogs/create-securityquestion-dialog/create-securityquestion-dialog.component';
import { DeleteSecurityquestionDialogComponent } from './pages/administration/dialogs/delete-securityquestion-dialog/delete-securityquestion-dialog.component';
import { UpdateRoleDialogComponent } from './pages/administration/dialogs/update-role-dialog/update-role-dialog.component';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BaseLayoutComponent,
    AuthLayoutComponent,
    SigninComponent,
    AdministrationComponent,
    NotFoundComponent,
    ProfileComponent,
    ContactComponent,
    PricingComponent,
    AboutComponent,
    PostDialogComponent,
    PutDialogComponent,
    PatchDialogComponent,
    RolemanagementComponent,
    CatalogmanagementComponent,
    PurchasegraphComponent,
    SecurityquestionmanagementComponent,
    UsermanagementComponent,
    DeleteRecordDialogComponentComponent,
    CreateRoleDialogComponent,
    CreateSecurityquestionDialogComponent,
    DeleteSecurityquestionDialogComponent,
    UpdateRoleDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatDividerModule,
    MatDialogModule,
    MatMenuModule,
    MatListModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
