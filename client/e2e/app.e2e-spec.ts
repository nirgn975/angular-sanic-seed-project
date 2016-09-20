import { HelloWorldPage } from './app.po';

describe('hello-world App', function() {
  let page: HelloWorldPage;

  beforeEach(() => {
    page = new HelloWorldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
