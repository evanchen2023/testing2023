import {AES} from 'crypto-js';

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

            expect(response.status).to.eq(201);
            expect(response.data.role).eq('student');
            expect(response.data).have.property('token');
        })
    })
})