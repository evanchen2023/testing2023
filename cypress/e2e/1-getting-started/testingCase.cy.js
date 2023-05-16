//这个文档会包括3个基本测试用例:
//1）顶部导航显示5个链接。
//2）用户可以通过顶部导航链接或按钮切换页面，回到首页等。
//3）顶部导航在页面始终文娱页面的顶部位置。

describe('front page testing', () => {
    beforeEach(() => {
      cy.visit('https://cms-lyart.vercel.app/')
    })

    it('check if the nav bar have 5 link', () => {
        cy.get('#menu a').should('have.length', 5)
                              //这里#表示ID的意思，就是页面叫menu id的内容
                              //a代表HTML里面链接的符号
    })

    it('nav bar link can change the page', () => {
        cy.get('#menu a')
        cy.contains('Courses').click()
        cy.location('pathname').should('eq','/events')
        cy.go('back')

        cy.contains('Events').click()
        cy.location('pathname').should('eq','/events')
        cy.go('back')

        cy.contains('Students').click()
        cy.location('pathname').should('eq','/gallery')
        cy.go('back')

        cy.contains('Teachers').click()
        cy.location('pathname').should('eq','/gallery')
        cy.go('back')

        cy.contains('Sign in').click()
        cy.location('pathname').should('eq','/login')
        cy.go('back')

        cy.get('#logo').click()
        cy.location('pathname').should('eq','/')
        
    })

    it('nav bar always stay at the top of the page', () => {
        cy.scrollTo('bottom')  //页面拉到最下面
        cy.get('#menu').should('be.visible')

    })
})

describe('Testing Login and localStorage', () => {
    beforeEach(() => {
      cy.visit('https://cms-lyart.vercel.app/login')
    })

    it('should login successfully with valid credentials', () => {
    cy.get('#login_email').type('student@admin.com');
    cy.get('#login_password').type('111111');
    cy.get('button').click();  //button的class不是很清楚如何确定

    cy.url().should('include', '/dashboard'); 
    });

    
})