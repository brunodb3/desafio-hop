// home.component.spec.ts
//  - home component test declarations
// -----------------------------------------------------------------------------

// importing 3rd party libraries
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// importing custom modules
import { HomeComponent } from '@app/chat/home/home.component';

// declaring HomeComponent test suite
describe('HomeComponent', () => {
  // declaring variables
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  // configuring the test module
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // declaring tests
  // should create the component
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
