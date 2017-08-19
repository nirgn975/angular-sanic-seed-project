import 'hammerjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MaterialModule } from '@angular/material';
import { reducers } from '../../reducers';
import { StoreModule } from '@ngrx/store';
import 'rxjs/add/observable/of';

import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let debugs: DebugElement[];
  let element: HTMLElement;
  const users: any = Observable.of([{
    url: 'http://localhost/nirgalon',
    username: 'Nir Galon',
    email: 'nir@example.com',
    groups: ['admin']
  }, {
    url: 'http://localhost/adisaar',
    username: 'Adi Saar',
    email: '',
    groups: ['users']
  }]);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        StoreModule.forRoot(reducers),
      ],
      declarations: [ UsersComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;

    // Create a dummy transaction.
    component.user$ = users;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display first user email', () => {
    element = fixture.debugElement.query(By.css('md-card-subtitle')).nativeElement;
    expect(element.textContent).toContain('nir@example.com');
  });

  it('should display users name', () => {
    debugs = fixture.debugElement.queryAll(By.css('md-card-title'));
    debugs.forEach((elem, index) => {
      element = elem.nativeElement;
      expect(element.textContent).toContain(users.value[index].username);
    });
  });

  it('should display the users url links', () => {
    debugs = fixture.debugElement.queryAll(By.css('md-card-content > p'));
    debugs.forEach((elem, index) => {
      element = elem.nativeElement;
      expect(element.textContent).toContain(users.value[index].url);
    });
  });
});
