// e2e/pages/album-page/album-page.po.ts

import { browser, by, element, promise, ElementFinder, ElementArrayFinder } from 'protractor';
import { Element } from '@angular/compiler';

export class AlbumPage {

    navigateToAlbumPage(): promise.Promise<any> {
        return browser.get('/album');
    }

    getHomeNavigationButton(): ElementFinder {
        return element(by.css('.navbar-brand'));
    }

    getImages(): ElementArrayFinder {
        return element.all(by.css('.row div'));
    }

    getImagePopUpModal(): ElementFinder {
        return element(by.tagName('app-modal'));
    }
}
