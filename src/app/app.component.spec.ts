// app.component.spec.ts
//  - app component test declarations
// -----------------------------------------------------------------------------

// importing 3rd party libraries
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

// importing custom modules
import { AppComponent } from './app.component';

// declaring AppComponent test suite
describe('AppComponent', () => {
  // configuring the test module
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent]
    }).compileComponents();
  }));

  // declaring tests
  // should create the app
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // should have title attribute
  it(`should have as title 'Desafio Hop'`, () => {
    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Desafio Hop');
  });
});
