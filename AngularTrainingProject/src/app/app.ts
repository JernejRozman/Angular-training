import { Component, signal } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { identity } from "./identities";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = "Small identity manager"


  identities: identity[] = [
    {
      firstname: 'Herwig',
      lastname: 'Abele',
      accountname: 'herwigabe',
      pnr: 1,
      costcenter: '00101010',
      department: 'Dev',
      startDate: new Date('1998-01-01'),
    },
    {
      firstname: 'Heinz',
      lastname: 'Hobbs',
      accountname: 'heinzHob',
      pnr: 2,
      costcenter: '00102010',
      department: 'Acc',
      startDate: new Date('1990-01-01'),
    },
    {
      firstname: 'Jon',
      lastname: 'Ullman',
      accountname: 'jonull',
      pnr: 3,
      costcenter: '00101040',
      department: 'Eng',
      startDate: new Date('2001-01-01'),
    },
    {
      firstname: 'Petra',
      lastname: 'Minor',
      accountname: 'petramin',
      pnr: 4,
      costcenter: '00101070',
      department: 'Mkt',
      startDate: new Date('2010-01-01'),
    },
    {
      firstname: 'Sabina',
      lastname: 'Tenisson',
      accountname: 'sabinaten',
      pnr: 5,
      costcenter: '00106010',
      department: 'Dev',
      startDate: new Date('2020-01-01'),
      endDate: new Date('2023-05-01'),
    },
    {
      firstname: 'Clary',
      lastname: 'Blitch',
      accountname: 'clarybli',
      pnr: 6,
      costcenter: '00101080',
      department: 'Dev',
      startDate: new Date('2011-01-01'),
    },
  ];

  DeleteIdentity(Myidentity: identity): void {
    this.identities = this.identities.filter(i => i != Myidentity)
  }
}
