//our root app component
import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {PipeCollection} from './pipeCollection.pipe'

@Component({
  selector: 'my-app',
  template: `
    <div>
      <h2>----Build in pipes----</h2>
      <h2>Hello {{name | lowercase}}</h2>
      <h2>Hello {{name | uppercase}}</h2>
      <h2>Hello {{3 | currency}}</h2>
      <br>
      <h2>----Custom pipes----</h2>
      <h2>Currency (override) : {{10.1 | pipeCollection:'currency'}}</h2>
      <h2>percentage : {{99 | pipeCollection:'percentage'}}</h2>

      <h2></h2>
      <h2></h2>

    </div>
  `,
})
export class App {
  name:string;
  constructor() {
    this.name = 'Angular2'
  }
}

    
 

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ App, PipeCollection ],
  bootstrap: [ App ]
})
export class AppModule {}