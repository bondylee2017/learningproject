import { LearningprojectPage } from './app.po';

describe('learningproject App', () => {
  let page: LearningprojectPage;

  beforeEach(() => {
    page = new LearningprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
