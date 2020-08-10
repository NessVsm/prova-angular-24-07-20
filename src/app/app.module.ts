import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table'
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CepService } from './cep.service';
import { TableListComponent } from './components/table-list/table-list.component';
import { ContactListContainerComponent } from './containers/contact-list-container/contact-list-container.component';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import {RoutingModule} from './app-routing.module';
import { EditContactContainerComponent } from './containers/edit-contact-container/edit-contact-container.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
	declarations: [
		AppComponent,
		TableListComponent,
		ContactListContainerComponent,
		HomeContainerComponent,
		EditContactContainerComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		MatTableModule,
		MatInputModule,
		MatButtonModule,
		MatToolbarModule,
		HttpClientModule,
		RoutingModule,
		ReactiveFormsModule,
	],
	providers: [
		CepService,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
