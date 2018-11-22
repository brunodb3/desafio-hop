// chat.module.ts
//  - chat module declaration
// -------------------------------------------------------------------------------------------------

// importing 3rd party libraries
import { NgModule } from '@angular/core';

// importing custom components
import { HomeComponent } from '@app/chat/home/home.component';

// importing custom modules
import { SharedModule } from '@app/shared';
import { ChatService } from '@app/chat/chat.service';
import { ChatRoutingModule } from '@app/chat/chat-routing.module';

// creating the module
@NgModule({
  imports: [
    // custom modules
    SharedModule,
    ChatRoutingModule
  ],
  declarations: [
    // custom components
    HomeComponent
  ],
  providers: [
    // custom providers
    ChatService
  ]
})
export class ChatModule {}
