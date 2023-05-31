

context('Add course testing', () => {
    beforeEach(() => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hbmFnZXJAYWRtaW4uY29tIiwicm9sZSI6Im1hbmFnZXIiLCJpZCI6MywiaWF0IjoxNjg0ODM2MzM4LCJleHAiOjE2OTI2MTIzMzh9.ewZf-HJeyu5oTU4e60HYNRx0E3ngOL_nyQgTdPf_KVw';
        const authorization = `Bearer ${token}`;

        cy.visit('https://cms-lyart.vercel.app/login');
        cy.get('label').contains('Manager').click();
        cy.managerlogin().then((authorization) => { // Assuming this function logs in the manager and returns the authorization token
        cy.intercept('GET', 'https://cms-lyart.vercel.app/api/teachers').as('teachersRes');
        cy.intercept('POST', 'https://cms-lyart.vercel.app/api/courses/add-course', { fixture: 'addCourse.json' }).as('addCourseRes');
        cy.visit('https://cms-lyart.vercel.app/dashboard/manager/courses/add-course');
        });
        
        //cy.intercept('GET', 'https://cms-lyart.vercel.app/api/teachers').as('teachersRes');
        //cy.intercept('POST', '/api/courses', { fixture: 'addCourse.json' }).as('addCourseRes');
       // cy.visit('https://cms-lyart.vercel.app/dashboard/manager/courses/add-course');
        
        //cy.wait('@addCourseRes', { timeout: 10000 });
    })
    
      it('add course successfully', () => {
        cy.get('#name').click().type('abcd');
        cy.get('#teacherId').type('bb');
        cy.wait(1000);
        cy.get('.ant-select-item').first().click();

        cy.get('#type').click();

        cy.get('.ant-select-item-option').contains('C#').click();
        cy.get('.ant-select-item-option').contains('Python').click();
        
      })

})