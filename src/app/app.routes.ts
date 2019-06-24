import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServiceComponent } from './components/service/service.component';
import { BlogComponent } from './components/blog/blog.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent ,
     },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'service', component: ServiceComponent },
    { path: 'blog', component: BlogComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];


export const appRouting = RouterModule.forRoot(routes);

