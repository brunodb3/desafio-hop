// login.component.spec.ts
//  - login component test declarations
// -----------------------------------------------------------------------------

// importing 3rd party libraries
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// importing custom modules
import { LoginComponent } from '@app/auth/login/login.component';

// declaring LoginComponent test suite
describe('LoginComponent', () => {
  // declaring variables
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  // configuring the test module
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // declaring tests
  // should create the component
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
