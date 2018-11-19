
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full',
        canActivate : [ AuthGuard ]
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate : [ AuthGuard ]
    },
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: RegisterComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
