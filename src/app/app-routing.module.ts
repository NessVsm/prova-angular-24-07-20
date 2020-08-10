import { Routes, RouterModule } from '@angular/router';
import {ContactListContainerComponent} from './containers/contact-list-container/contact-list-container.component';
import {HomeContainerComponent} from './containers/home-container/home-container.component';
import {EditContactContainerComponent} from './containers/edit-contact-container/edit-contact-container.component';


const routes: Routes = [
    { path: '', component: HomeContainerComponent },
    { path: 'home', component: HomeContainerComponent },
    { path: 'list', component: ContactListContainerComponent },
    { path: 'add', component: EditContactContainerComponent },
    { path: 'edit', component: EditContactContainerComponent },

];

export const RoutingModule = RouterModule.forRoot(routes);
