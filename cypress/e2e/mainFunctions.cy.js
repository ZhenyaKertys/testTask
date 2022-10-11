import { faker } from '@faker-js/faker';
import mainNavigation from '../page-object/mainFunctions'

describe('empty spec', () => {
  it('Main Pass', () => {
    cy.visit('/');
    
    mainNavigation.newArrivals.click();
    mainNavigation.acmeCup.click();
    mainNavigation.addToCart.click();
    mainNavigation.totalPrice.should('contain','$25.00');
    mainNavigation.quantityInputPlus(4);
    mainNavigation.totalPrice.should('contain','$125.00');

    mainNavigation.closeBtn.click();
    mainNavigation.featured.click();
    mainNavigation.quarterZip.click({force: true});
    mainNavigation.sizeM.click();
    mainNavigation.addToCart.click();
    mainNavigation.articalOne.should('exist');
    mainNavigation.articalTwo.should('exist');
    mainNavigation.sizeThumb.should('contain', 'M');
    mainNavigation.totalPrice.should('contain','$215.00');
    mainNavigation.goCheckout.click();

    mainNavigation.emailInput.type(faker.internet.email());
    mainNavigation.firstNameInput.type(faker.name.firstName());
    mainNavigation.lastNameInput.type(faker.name.lastName());
    mainNavigation.addressInput.type(faker.address.street());
    mainNavigation.cityInput.type(faker.address.city());
    mainNavigation.zipCodeInput.type('89600');
    mainNavigation.continuePayment.click()
    
  });

})