import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CareersComponent } from './components/careers/careers.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
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
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { JavaComponent } from './layout/expertise/java/java.component';
import { WebComponentComponent } from './components/service/web-component/web-component.component';
import { ItStaffComponent } from './components/service/it-staff/it-staff.component';
import { QualityAssuranceComponent } from './components/service/quality-assurance/quality-assurance.component';
import { MicroftTechnologiesComponent } from './layout/microft-technologies/microft-technologies.component';
import { SaleforceComponent } from './layout/saleforce/saleforce.component';
import { PythonDevelopmentComponent } from './layout/python-development/python-development.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SupportComponent } from './components/service/support/support.component';
import { IonicComponent } from './layout/expertise/ionic/ionic.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactUsComponent,
    FooterComponent,
    HomeComponent,
    CareersComponent,
    AboutComponent,
    ServicesComponent,
    SoftwareDevelopComponent,
    MobileApplicationComponent,
    DigitalMarketComponent,
    TestingComponent,
    ExpertiseComponent,
    AngularComponent,
    ReactJSComponent,
    MongoDBComponent,
    SQLComponent,
    SidebarComponent,
    ImageSliderComponent,
    JavaComponent,
    WebComponentComponent,
    ItStaffComponent,
    QualityAssuranceComponent,
    MicroftTechnologiesComponent,
    SaleforceComponent,
    PythonDevelopmentComponent,
    PortfolioComponent,
    SupportComponent,
    IonicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
