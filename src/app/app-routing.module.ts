import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminExchangeComponent } from './admin-exchange/admin-exchange.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ModeratorViewComponent } from './moderator-view/moderator-view.component';
import { RegisterComponent } from './register/register.component';
import { UserTradingComponent } from './user-trading/user-trading.component';
import { UserViewComponent } from './user-view/user-view.component';

const routes: Routes = [
  { path: 'home', 
    component: HomeComponent 
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: 'register',
    component: RegisterComponent
  }
  ,
  { path: 'user-view',
    component: UserViewComponent
  }
  ,
  { path: 'user-trading',
  component: UserTradingComponent
  }
  ,
  { path: 'moderator-view',
    component: ModeratorViewComponent
  }
  ,
  { path: 'admin-view',
    component: AdminViewComponent
  },
  { path: 'admin-users',
    component: AdminUsersComponent
  },
  { path: 'admin-exchange',
    component: AdminExchangeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
