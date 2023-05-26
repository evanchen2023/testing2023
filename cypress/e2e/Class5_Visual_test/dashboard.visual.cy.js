/// <reference types="cypress" />

describe('Dashboard visual testing', () => {
    beforeEach(() => {
        cy.managerlogin();
        // cy.visit('/login')
        // cy.get('label').contains('Manager').click()   
        // cy.get('#login_email').type('Manager@admin.com');
        // cy.get('#login_password').type('111111');
        // cy.get('button').click();      
        // cy.url().should('include', '/dashboard');
      })
    
      it('Overview', () => {
        cy.get('.ant-card').first().should('be.visible');
    
        cy.get('.ant-card').first().toMatchImageSnapshot({
          threshold: 0.2,
          thresholdType: 'pixels',
        });

        it('Distribution', () => {
            cy.get('.ant-card').eq(3).should('be.visible');
            cy.get('.ant-card').eq(3).matchImageSnapshot();
          });
        
          it('Types', () => {
            cy.get('.ant-card').eq(4).should('be.visible');
            cy.get('.ant-card').eq(4).matchImageSnapshot();
          });
    });


})