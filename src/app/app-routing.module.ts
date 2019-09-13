import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";
import { ViewTournamentComponent } from "./manage-tournament/view-tournament/view-tournament.component";
import { AddTournamentComponent } from "./manage-tournament/add-tournament/add-tournament.component";
import { AuthGuard } from "./auth/Authguard";
import { ManageTournamentComponent } from "./manage-tournament/manage-tournament.component";
import { EditTournamentComponent } from "./manage-tournament/edit-tournament/edit-tournament.component";

// const routes: Routes = [];

const routes: Routes = [
  { path: "", component: HomeComponent, canActivate: [AuthGuard] },
  // { path: '', component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  {
    path: "manage-tournament",
    component: ManageTournamentComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "view-tournament",
        component: ViewTournamentComponent
      },
      {
        path: "add-tournament",
        component: AddTournamentComponent
      }
    ]
  }, //, loadChildren: './manage-tournament/#ManageTournamentComponent'
  // { path: 'team-setup', component: TeamSetupComponenent }, // yet to create this component
  // { path: 'fixture-setup', component: FixtureSetupComponenent }, // yet to create this component
  // { path: "add-tournament", component: AddTournamentComponent },
  // { path: "view-tournament", component: ViewTournamentComponent },
  { path: "edit-tournament", component: EditTournamentComponent },

  { path: "**", redirectTo: "", pathMatch: "full" }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
