

describe('Css Locator and Xpath Locator', () => {
    it('Locator', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get("input[name='username']").type("Admin")     // class
      cy.get("input[name='password']").type("admin123")
      cy.get("button[type='submit' ]").click()
      
      cy.get("p[class='oxd-userdropdown-name']").contains("Paul Collings")// assertion
      //cy.get("//p[text()='Paul Collings ']").contains("Paul Collings")()
      //cy.xpath
      console.log("Test CasePass")
    })
  })
  