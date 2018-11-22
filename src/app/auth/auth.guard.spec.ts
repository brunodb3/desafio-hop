// auth.guard.spec.ts
//  - auth guard test declarations
// -----------------------------------------------------------------------------

// importing 3rd party libraries
import { TestBed, async, inject } from '@angular/core/testing';

// importing custom modules
import { AuthGuard } from '@app/auth/auth.guard';

// declaring AuthGuard test suite
describe('AuthGuard', () => {
  // configuring the test module
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard]
    });
  });

  // declaring tests
  // should inject the guard
  it('should inject', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
