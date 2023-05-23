describe('Student List Api', () => {
    context('PUT /EditAstudent', () => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hbmFnZXJAYWRtaW4uY29tIiwicm9sZSI6Im1hbmFnZXIiLCJpZCI6MywiaWF0IjoxNjg0ODM2MzM4LCJleHAiOjE2OTI2MTIzMzh9.ewZf-HJeyu5oTU4e60HYNRx0E3ngOL_nyQgTdPf_KVw';
        const authorization = `Bearer ${token}`;

        it('should change the student detail', () => {
            cy.request({
                method: 'PUT',
                url: 'http://cms.chtoma.com/api/students',
                headers: {
                    Authorization: authorization                   
                },
                body: {
                    email: 'Randi Hoppe2@example.com',
                    name: 'Randi Hoppe2',
                    type: 2,
                    country: 'China',
                    id: 1,
                }
                
            }).then((response) => {
                expect(response.status).to.eq(201);
                expect(response.body.msg).to.eq('success');
                
            })
                
            });
        })       
    })