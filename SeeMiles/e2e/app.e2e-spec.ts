import { SeeMilesPage } from './app.po';

describe('see-miles App', () => {
  let page: SeeMilesPage;

  beforeEach(() => {
    page = new SeeMilesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
