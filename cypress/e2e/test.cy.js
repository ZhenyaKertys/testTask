describe('Vercel store cart and checkout functionality verification', () => {
   context('720p resolution', () => {
    // mackbook resolution
    beforeEach(() => {
        cy.viewport('macbook-16')
      })

      it('Verify cart functionality', () => {

        cy.visit('https://demo.vercel.store/')

        // go to New Arrival category
        cy.contains('New Arrivals').click()

        // go to product page
        cy.get("img[alt='ACME Cup']").click()

        // add product to the cart
        cy.contains('Add To Cart').click()

        // assert cart menu visibility
        cy.get("div[class*='SidebarLayout_root']").should('be.visible')

        // change product qty
        cy.get("button[class*='Quantity_actions']:nth-child(4)").click()
        cy.get("button[class*='Quantity_actions']:nth-child(4)").click()
        cy.get("button[class*='Quantity_actions']:nth-child(4)").click()
        cy.get("button[class*='Quantity_actions']:nth-child(4)").click()

        // assert cart total price
        cy.get("div[class*='SidebarLayout_root'] div.flex.justify-between.border-t span:nth-child(2)").should('contain', '$125.00')

        // close cart menu
        cy.contains("Close").click()

        // go to Featured category
         cy.contains('Featured').click()

        // go to product page
         cy.get("img[alt='Quarter Zip']").click()

        //  select M size
        cy.contains('m').click()

        // add product to the cart
         cy.contains('Add To Cart').click()

        // assert first product in cart
        cy.xpath("//div[contains(@class,'SidebarLayout_root')] //li[contains(@class,'CartItem_root')]//a/span[normalize-space() = 'Quarter Zip']").should('be.visible')

        // assert second product in cart
        cy.xpath("//div[contains(@class,'SidebarLayout_root')] //li[contains(@class,'CartItem_root')]//a/span[normalize-space() = 'ACME Cup']").should('be.visible')

        // assert first product size
        cy.xpath("//div[contains(@class,'SidebarLayout_root')] //li[contains(@class,'CartItem_root')]//a/span[normalize-space() = 'Quarter Zip']/../following-sibling::div/div[2]/span").should('contain', 'M')

        // assert cart total price
        cy.get("div[class*='SidebarLayout_root'] div.flex.justify-between.border-t span:nth-child(2)").should('contain', '$215.00')

        // proceed to checkout
        cy.contains('Proceed to Checkout').click()

        // fill form with random values
        cy.get('input[data-email-or-phone-input]').type('john.doe@test.com')
        cy.get('input[data-backup="first_name"]').type('John')
        cy.get('input[data-backup="last_name"]').type('Doe')
        cy.get('input[data-backup="address1"]').type('Franka')
        cy.get('input[data-backup="city"]').type('New York')
        cy.get('input[data-backup="zip"]').type('89600')

        cy.setCookie('cookietest', '1')
        cy.setCookie('_orig_referrer', 'https%3A%2F%2Fnext-js-store.myshopify.com%2F')
        cy.setCookie('checkout', 'eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaVV5TkRFeVpHRmtOR1JqWlRRM1lqZ3dNRGsxTVRrME16WmlabVJtTkdGbVlnWTZCa1ZVIiwiZXhwIjoiMjAyMi0xMC0zMVQyMTo1OTowNi4wMzRaIiwicHVyIjoiY29va2llLmNoZWNrb3V0In19--6013bb8ec25a88d1fa7acd7e61204971c2759a39')

        // continue to shipping
        cy.get("button[type='submit']").click()






      })

     
   })
  })
