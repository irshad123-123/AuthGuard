import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./component/home/home.component";
import { ProductsComponent } from "./component/products/products.component";
import { UsersComponent } from "./component/users/users.component";
import { FairsComponent } from "./component/fairs/fairs.component";
import { FairsCardComponent } from "./component/fairs/fairs-card/fairs-card.component";
import { UserDetailComponent } from "./component/users/user-detail/user-detail.component";
import { FormComponent } from "./component/users/form/form.component";
import { ProdDetailComponent } from "./component/products/prod-detail/prod-detail.component";
import { PageNotFoundComponent } from "./component/page-not-found/page-not-found.component";
import { ProdCardComponent } from "./component/products/prod-card/prod-card.component";
import { AuthComponent } from "./component/auth/auth.component";
import { AuthGuard } from "./services/auth.guard";

const appRoute : Routes = [
    {
        path : '',
        component : AuthComponent
    },
    {
        path : 'home',
        component : HomeComponent
    },
    {
        path : 'products',
        component : ProductsComponent,
        children : [
            {
                path : 'single/:prodId',
                component : ProdCardComponent
            },
            {
                path : ':prodId',
                component : ProdDetailComponent
            }
        ]
    },
    {
        path : 'users',
        component : UsersComponent,
        canActivate : [AuthGuard],
        children : [
            {
               path : 'form',
               component :  FormComponent
            },
            {
               path : 'form/:id/edit',
               component : FormComponent 
            },
            {
               path : ':id',
               component : UserDetailComponent 
            }
        ]
    },
    {
        path : 'fairs',
        component : FairsComponent,
        canActivate : [AuthGuard],
        children : [
            {
                path : ':fairId',
                component : FairsCardComponent
            }
        ]
    },
    {
        path : 'page-not-found',
        component : PageNotFoundComponent
    },
    {
        path : '**',
        redirectTo : 'page-not-found'
    }
]

@NgModule({
    imports : [RouterModule.forRoot(appRoute)],
    exports : []
})
export class RoutingModule{}