import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PageOnePage } from '../pages/page-one/page-one';
import { PageTwoPage } from '../pages/page-two/page-two';
import { TestProvider } from '../providers/test-provider'


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PageOnePage,
    PageTwoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PageOnePage,
    PageTwoPage
  ],
  providers: [TestProvider]
})
export class AppModule {}
