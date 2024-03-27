import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CareersComponent } from './components/careers/careers.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/service/services/services.component';
import { SoftwareDevelopComponent } from './components/service/software-develop/software-develop.component';
import { MobileApplicationComponent } from './components/service/mobile-application/mobile-application.component';
import { DigitalMarketComponent } from './components/service/digital-market/digital-market.component';
import { TestingComponent } from './components/service/testing/testing.component';
import { ExpertiseComponent } from './layout/expertise/expertise.component';
import { AngularComponent } from './layout/angular/angular.component';
import { ReactJSComponent } from './layout/react-js/react-js.component';
import { MongoDBComponent } from './layout/mongo-db/mongo-db.component';
import { SQLComponent } from './layout/sql/sql.component';
import { JavaComponent } from './layout/expertise/java/java.component';
import { WebComponentComponent } from './components/service/web-component/web-component.component';
import { ItStaffComponent } from './components/service/it-staff/it-staff.component';
import { QualityAssuranceComponent } from './components/service/quality-assurance/quality-assurance.component';
import { MicroftTechnologiesComponent } from './layout/microft-technologies/microft-technologies.component';
import { PythonDevelopmentComponent } from './layout/python-development/python-development.component';
import { SaleforceComponent } from './layout/saleforce/saleforce.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component'; 
import { SupportComponent } from './components/service/support/support.component';
import { IonicComponent } from './layout/expertise/ionic/ionic.component';

const routes: Routes = [
  {path:''  ,component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'service',component:ServicesComponent,
      children:[
        {path:'software-develop',component:SoftwareDevelopComponent,data: { route: 'software-develop',title:'softwar' }},
        {path:'testing',component:TestingComponent,data: { route: 'software-develop' }},
        {path:'mobile-application',component:MobileApplicationComponent,data: { route: 'mobile-application' }},
        {path:'digital-market',component:DigitalMarketComponent,data: { route: 'digital-market' }},
        {path:'web-component',component:WebComponentComponent},
        {path:'it-staff',component:ItStaffComponent},
        {path:'quality-assurance',component:QualityAssuranceComponent},
        {path:'support',component:SupportComponent}
      ]
    },
    {path:'expertise',component:ExpertiseComponent,
      children:[
        {path:'angular',component:AngularComponent,data: { route: 'angular' }},
        {path:'react-js',component:ReactJSComponent,data: { route: 'react-js' }},
        {path:'mongo-db',component:MongoDBComponent,data: { route: 'mongo-db' }},
        {path:'sql',component:SQLComponent,data: { route: 'sql' }},
        {path:'java',component:JavaComponent},
        {path:'microsoft-technologies',component:MicroftTechnologiesComponent},
        {path:'python-development',component:PythonDevelopmentComponent},
        {path:'saleforce',component:SaleforceComponent},
        {path:'ionic',component:IonicComponent}
      ]
    },
    {path:'portfolio',component:PortfolioComponent},
  {path:'careers',component:CareersComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'support',component:SupportComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
