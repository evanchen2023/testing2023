

describe('Student List Api', () => {
    context('POST /Addstudent', () => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hbmFnZXJAYWRtaW4uY29tIiwicm9sZSI6Im1hbmFnZXIiLCJpZCI6MywiaWF0IjoxNjg0ODM2MzM4LCJleHAiOjE2OTI2MTIzMzh9.ewZf-HJeyu5oTU4e60HYNRx0E3ngOL_nyQgTdPf_KVw';
        const authorization = `Bearer ${token}`;

        it('should add new student to list', () => {
            cy.request({
                method: 'POST',
                url: 'http://cms.chtoma.com/api/students',
                body: {
                    email: 'Ken@gmail.com',
                    name: 'Ken',
                    type: 'tester',
                    country: 'New Zealand',
                },
                headers: {
                    Authorization: authorization
                }
            }).then((response) => {
                expect(response.status).to.eq(201);
                expect(response.body.msg).to.eq('success');
                expect(response.body.data.name).to.eq('Ken');
                expect(response.body.data.email).to.eq('Ken@gmail.com');
                expect(response.body.data.country).to.eq('New Zealand');
                
            })
                
            });
        })       
    })