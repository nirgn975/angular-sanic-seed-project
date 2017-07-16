import { browser, by, element } from 'protractor';

export class ClientPage {
  navigateTo() {
    return browser.get('/');
  }
}
