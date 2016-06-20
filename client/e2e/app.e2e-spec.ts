import { HELLOWORLDPage } from './app.po';

describe('hello-world App', function() {
  let page: HELLOWORLDPage;

  beforeEach(() => {
    page = new HELLOWORLDPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
