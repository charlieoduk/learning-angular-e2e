import { LearningAngularE2ePage } from './app.po';

describe('learning-angular-e2e App', () => {
  let page: LearningAngularE2ePage;

  beforeEach(() => {
    page = new LearningAngularE2ePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
