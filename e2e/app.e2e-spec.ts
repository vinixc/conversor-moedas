import { ConversorDeMoedasPage } from './app.po';

describe('conversor-de-moedas App', () => {
  let page: ConversorDeMoedasPage;

  beforeEach(() => {
    page = new ConversorDeMoedasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
