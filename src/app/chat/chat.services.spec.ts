// chat.service.spec.ts
//  - chat service test declarations
// -----------------------------------------------------------------------------

// importing 3rd party libraries
import { TestBed, inject } from '@angular/core/testing';

// importing custom modules
import { ChatService } from '@app/chat/chat.service';

// declaring ChatService test suite
describe('ChatService', () => {
  // configuring the test module
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatService]
    });
  });

  // declaring tests
  // should create the service injectable
  it('should be created', inject([ChatService], (service: ChatService) => {
    expect(service).toBeTruthy();
  }));
});
