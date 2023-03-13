import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { UserViewComponent } from './user-view/user-view.component';
import { ModeratorViewComponent } from './moderator-view/moderator-view.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminExchangeComponent } from './admin-exchange/admin-exchange.component';
import { LogoutComponent } from './logout/logout.component';
import { CurrentUserComponent } from './current-user/current-user.component';
import { OrderbookComponent } from './orderbook/orderbook.component';
import { ChartModule } from 'angular-highcharts';
import { ChartComponent } from './chart/chart.component';
import { ChartPieComponent } from './chart-pie/chart-pie.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { UserTradingComponent } from './user-trading/user-trading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    AdminViewComponent,
    UserViewComponent,
    ModeratorViewComponent,
    HomeNavbarComponent,
    AdminNavbarComponent,
    AdminUsersComponent,
    AdminExchangeComponent,
    LogoutComponent,
    CurrentUserComponent,
    OrderbookComponent,
    ChartComponent,
    ChartPieComponent,
    UserNavbarComponent,
    UserTradingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
