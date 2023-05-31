

context('GET /Course List', () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hbmFnZXJAYWRtaW4uY29tIiwicm9sZSI6Im1hbmFnZXIiLCJpZCI6MywiaWF0IjoxNjg1NDM5NDM2LCJleHAiOjE2OTMyMTU0MzZ9.W3s6qPQxwCzJKjZMGlfj9qVzk4dv5hiSfwNzVCgsZpo';
    const authorization = `Bearer ${token}`;

    it('should add new student to list', () => {
        cy.request({
            method: 'GET',
            url: 'http://cms.chtoma.com/api/courses?limit=20&page=1',
            qs: {
                limit: 20,
                page: 1
            },
            headers: {
                Authorization: authorization
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.msg).to.eq('success');
            //expect(response.body.data[3].name).contains("C#");
            
            
        })
            
    });
})       


