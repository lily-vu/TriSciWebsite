import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CurrentProjectsComponent } from './current-projects/current-projects.component';
import { OurPartnersComponent } from './our-partners/our-partners.component';
const routes: Routes =
    [
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
      },
      {
        path: 'about-us',
        component: AboutUsComponent
      },
        {
            path: 'current-projects',
            component: CurrentProjectsComponent
        },
        {
            path: 'our-partners',
            component: OurPartnersComponent
        }

    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
