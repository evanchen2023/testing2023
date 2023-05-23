import {AES} from 'cypress-js';

describe('login api', () => {
    it('should log in with student acc', () => {
        const email = 'student@admin.com';
        const pw = AES.encrypt('111111', 'cms').toString(); 
        
        cy.request({
            method: 'POST',
            url: 'http://cms.chtoma.com/api/login',
            body: {
                email: email,
                password: pw,
                role: 'student',
            }
        }).then((response) => {

            expect(response.status).to.eq(200);
            expect(response.body.role).eq('student');
            expect(response.body).have.property('token');
        })
    })
})