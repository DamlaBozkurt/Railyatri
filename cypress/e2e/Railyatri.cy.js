describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.railyatri.in/')
    //cy.traintickets()
    cy.interCitySmartBus()
    //cy.trainInfo()
    //cy.Signin()
    cy.Pnr()
    cy.BookaMeal()
    cy.ContactUs()
  })
})