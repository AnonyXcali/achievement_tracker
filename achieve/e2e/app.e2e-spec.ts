import { AchievePage } from './app.po';

describe('achieve App', function() {
  let page: AchievePage;

  beforeEach(() => {
    page = new AchievePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
