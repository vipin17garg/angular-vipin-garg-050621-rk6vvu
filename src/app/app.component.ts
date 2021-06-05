import { Component, VERSION } from '@angular/core';
import { Employee } from './employee';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  formdata;
  first_name: FormControl;
  last_name: FormControl;
  email: FormControl;
  gender: FormControl;
  ngOnInit() {
    this.first_name = new FormControl('');
    this.last_name = new FormControl('');
    this.email = new FormControl('');
    this.gender = new FormControl('');
    this.formdata = new FormGroup({
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      gender: this.gender
    });
  }
  public empList: Array<Employee> = [
    {
      id: 1,
      first_name: 'Jeanette',
      last_name: 'Penddreth',
      email: 'jpenddreth0@census.gov',
      gender: 'Female'
    },
    {
      id: 2,
      first_name: 'Giavani',
      last_name: 'Frediani',
      email: 'gfrediani1@senate.gov',
      gender: 'Male'
    },
    {
      id: 3,
      first_name: 'Noell',
      last_name: 'Bea',
      email: 'nbea2@imageshack.us',
      gender: 'Female'
    },
    {
      id: 4,
      first_name: 'Willard',
      last_name: 'Valek',
      email: 'wvalek3@vk.com',
      gender: 'Male'
    }
  ];
  onSubmit() {
    console.log(this.formdata.controls);
    //empList.push();
  }
}
