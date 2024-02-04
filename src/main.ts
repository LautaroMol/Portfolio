import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AboutMeComponent } from './app/about-me/about-me.component';
import { SidebarComponent } from './app/sidebar/sidebar.component';
import { SamplesComponent } from './app/samples/samples.component';
import { ContactComponent } from './app/contact/contact.component';
import { SpeedInsights } from "@vercel/speed-insights/next"

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
bootstrapApplication(AboutMeComponent, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(SidebarComponent, appConfig)
  .catch((err) => console.error(err));
  bootstrapApplication(SamplesComponent, appConfig)
  .catch((err) => console.error(err));
  bootstrapApplication(ContactComponent, appConfig)
  .catch((err) => console.error(err));
  