class mainNavigation{
    get newArrivals (){
        return cy.get('[href="/search/clothes"]');
    };

    get acmeCup (){
        return cy.get('[aria-label="ACME Cup"]');
    }

    get addToCart (){
        return cy.get('.ProductView_sidebar__pNv5P > :nth-child(4)');
    };

    get totalPrice (){
        return cy.get('.flex-shrink-0 > .border-t > :nth-child(2)');
    };

    quantityInputPlus (number){
        for (let index = 0; index < number; index++) {
            cy.get(' div.flex.flex-row.h-9 > button:nth-child(4)').click();
        }

        return this;
    };

    get closeBtn (){
        return cy.get('[aria-label="Close"]');
    };

    get featured (){
        return cy.get('[href="/search/featured"]');
    };

    get quarterZip (){
        return cy.get("img[alt='Quarter Zip']");
    };

    get sizeM (){
        return cy.get('[aria-label="size m"]');
    };

    get articalOne (){
        return cy.get('.CartSidebarView_lineItemsList__StJOa > :nth-child(1)');
    };

    get articalTwo (){
        return cy.get('.CartSidebarView_lineItemsList__StJOa > :nth-child(2)');
    };

    get sizeThumb (){
        return cy.get(':nth-child(2) > .mx-2');
    };

    get goCheckout (){
        return cy.get('.flex-shrink-0 > :nth-child(3) > .Button_root__G_l9X');
    };

    get emailInput (){
        return cy.get('input[data-email-or-phone-input]');
    };

    get firstNameInput (){
        return cy.get('input[data-backup="first_name"]');
    };

    get lastNameInput (){
        return cy.get('input[data-backup="last_name"]');
    };

    get addressInput (){
        return cy.get('input[data-backup="address1"]');
    };

    get cityInput (){
        return cy.get('input[data-backup="city"]');
    };

    get zipCodeInput (){
        return cy.get('input[data-backup="zip"]');
    };

    get continuePayment (){
        return cy.get("button[type='submit']");
    };
}

export default new mainNavigation();