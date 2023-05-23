describe('Student List Api', () => {
    context('DELETE /student', () => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hbmFnZXJAYWRtaW4uY29tIiwicm9sZSI6Im1hbmFnZXIiLCJpZCI6MywiaWF0IjoxNjg0ODM2MzM4LCJleHAiOjE2OTI2MTIzMzh9.ewZf-HJeyu5oTU4e60HYNRx0E3ngOL_nyQgTdPf_KVw';
        const authorization = `Bearer ${token}`;

        it('should delete student from list', () => {
            cy.request({
                method: 'DELETE',
                url: 'http://cms.chtoma.com/api/students/1123',  //这里应该指明需要删除学生的code number
                body: {
                    id: '1123',
                },
                headers: {
                    Authorization: authorization
                }
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.msg).to.eq('success');
            })
                
            });
        })       
    })