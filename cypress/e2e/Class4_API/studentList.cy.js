

describe('Student List Api', () => {
    context('GET /studentList', () => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hbmFnZXJAYWRtaW4uY29tIiwicm9sZSI6Im1hbmFnZXIiLCJpZCI6MywiaWF0IjoxNjg0ODM2MzM4LCJleHAiOjE2OTI2MTIzMzh9.ewZf-HJeyu5oTU4e60HYNRx0E3ngOL_nyQgTdPf_KVw';
        const authorization = `Bearer ${token}`;

        it('should retrieve student list', () => {
            cy.request({
                method: 'GET',
                url: 'http://cms.chtoma.com/api/students?limit=20&page=1',
                qs: {
                    limit: 20,
                    page: 1
                },
                headers: {
                    Authorization: authorization
                }
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.data.total).eq(230);
                
                const studentList = response.body.data.students;
                expect(studentList).to.have.lengthOf(20);   //这一页student list只会展示20个student
                                                            //所以长度才会只有20个
                studentList.forEach((student) => {
                    expect(typeof student.name).eq('string');
                })
                
            });
        })       
    })
})