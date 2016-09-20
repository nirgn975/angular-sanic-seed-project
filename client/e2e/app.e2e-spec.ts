import { HwPage } from './app.po';

describe('hw App', function() {
  let page: HwPage;

  beforeEach(() => {
    page = new HwPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
