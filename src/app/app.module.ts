import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './shared/component/home/home.component';
import { FairsComponent } from './shared/component/fairs/fairs.component';
import { ProductsComponent } from './shared/component/products/products.component';
import { UsersComponent } from './shared/component/users/users.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './shared/app-routing.module';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FairsCardComponent } from './shared/component/fairs/fairs-card/fairs-card.component';
import { UserCardComponent } from './shared/component/users/user-card/user-card.component';
import { UserDetailComponent } from './shared/component/users/user-detail/user-detail.component';
import { FormComponent } from './shared/component/users/form/form.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import { GetConfirmComponent } from './shared/component/get-confirm/get-confirm.component';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { ProdDetailComponent } from './shared/component/products/prod-detail/prod-detail.component';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';
import { ProdCardComponent } from './shared/component/products/prod-card/prod-card.component';
import { AuthComponent } from './shared/component/auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FairsComponent,
    ProductsComponent,
    UsersComponent,
    NavbarComponent,
    FairsCardComponent,
    UserCardComponent,
    UserDetailComponent,
    FormComponent,
    GetConfirmComponent,
    ProdDetailComponent,
    PageNotFoundComponent,
    ProdCardComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    RouterModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,
    MatCardModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
