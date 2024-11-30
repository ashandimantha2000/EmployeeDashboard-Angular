import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmployeesComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tutorial1';
}
