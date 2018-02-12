// e2e/pages/album-page/album-page.e2e-spec.ts

import { browser } from 'protractor';
import { AlbumPage } from './album-page.po';

describe('Album Page', () => {

    const albumPage = new AlbumPage();

    beforeEach(() => {
        albumPage.navigateToAlbumPage();
    });

    it('Should find the home navigation button', () => {
        expect(albumPage.getHomeNavigationButton().getText()).toContain('Home');
    });

    it('Should redirect to the home page when \'Home\' is clicked', () => {
        const homeButton = albumPage.getHomeNavigationButton();
        homeButton.click();
        expect(browser.driver.getCurrentUrl()).toContain('/home');
    });

    it('Should have 6 images in the album page', () => {
        expect(albumPage.getImages().count()).toEqual(6);
    });

    it('Should open up a modal when an image is clicked', () => {
        const firstImage = albumPage.getImages().get(0);
        firstImage.click();
        expect(albumPage.getImagePopUpModal().isDisplayed()).toBeTruthy();
    })
});
