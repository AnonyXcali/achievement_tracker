import { RouterModule , Routes } from '@angular/router';
import { AppComponent } from '../app.component';

//custom route components

import { HomepageComponent } from '../homepage/homepage.component';

//custom route components


export const routes : Routes  = [
  { path : '' , component : HomepageComponent }
]
