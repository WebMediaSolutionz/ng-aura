// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import 'hammerjs';

// Routing
import { routing } from './app.routing';

// Services
import { WebService } from './shared/services/web.service';
import { AuthService } from './shared/services/auth.service';
import { AuthManager } from './shared/services/auth.manager';
import { ConfigService } from './shared/services/config.service';
import { ValidationService } from './shared/services/validation.service';
import { PasswordRulesService } from './shared/services/password-rules.service';
import { ErrorDisplayService } from './shared/services/error-display.service';

// Pipes
import { CapitalizePipe } from './shared/pipes/capitalize.pipe';

// Components
import { AppComponent } from './app.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PulseLogoComponent } from './shared/components/pulse-logo/pulse-logo.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PageTitleComponent } from './shared/components/page-title/page-title.component';
import { FieldComponent } from './shared/components/field/field.component';
import { SettingsComponent } from './components/settings/settings.component';
import { GeneralComponent } from './components/partials/settings/general/general.component';
import { PracticesAndRolesComponent } from
'./components/partials/settings/practices-and-roles/practices-and-roles.component';
import { PrivacyPolicyComponent } from
'./components/partials/settings/privacy-policy/privacy-policy.component';
import { PatientSummaryComponent } from
'./components/partials/settings/patient-summary/patient-summary.component';
import { InteractionWarningsComponent } from
'./components/partials/settings/interaction-warnings/interaction-warnings.component';
import { PasswordRulesComponent } from
'./components/partials/settings/password-rules/password-rules.component';
import { PulseComponentLibComponent } from
'./components/pulse-component-lib/pulse-component-lib.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CapitalizePipe,
    SignUpComponent,
    LoginComponent,
    UserComponent,
    DashboardComponent,
    PulseLogoComponent,
    FooterComponent,
    PageNotFoundComponent,
    PageTitleComponent,
    FieldComponent,
    SettingsComponent,
    GeneralComponent,
    PracticesAndRolesComponent,
    PrivacyPolicyComponent,
    PatientSummaryComponent,
    InteractionWarningsComponent,
    PasswordRulesComponent,
    PulseComponentLibComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    routing
  ],
  providers: [
    WebService,
    AuthService,
    ConfigService,
    AuthManager,
    ValidationService,
    PasswordRulesService,
    ErrorDisplayService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
