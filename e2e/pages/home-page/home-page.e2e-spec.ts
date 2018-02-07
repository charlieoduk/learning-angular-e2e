import { browser } from 'protractor';
import { HomePage } from './home-page.po';

describe(' Home Page', () => {
    const homePage = new HomePage();

    beforeEach(() => {
        homePage.navigateToHome();
    });

    it('Should have the page brand name', () => {
        expect(homePage.getPageBrandName()).toEqual('Plane Spotters');
    });

    it('Should locate the nav bar', () => {
        expect(homePage.getNavBar()).toBeDefined();
    });

    it('Should get the album button on the nav bar', () => {
        expect(homePage.getAlbumButton().getText()).toEqual('Album');
    });

    it('Should redirect to the album page when album is clicked', () => {
        const album = homePage.getAlbumButton();
        album.click();
        expect(browser.driver.getCurrentUrl()).toContain('/album');
    });

    it('Should find the learn more button', () => {
        expect(homePage.getLearnMoreButton().getText()).toEqual('Learn more');
    });

    it('Should redirect to the album page when learn more is clicked', () => {
        const learnMore = homePage.getLearnMoreButton();
        learnMore.click();
        expect(browser.driver.getCurrentUrl()).toContain('/album');
    });
})
