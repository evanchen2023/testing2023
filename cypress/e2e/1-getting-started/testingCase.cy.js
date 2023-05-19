//这个文档会包括3个基本测试用例:
//1）顶部导航显示5个链接。
//2）用户可以通过顶部导航链接或按钮切换页面，回到首页等。
//3）顶部导航在页面始终文娱页面的顶部位置。
//4) test log in

describe('Front page testing', () => {
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

describe('Login form testing', () => {
    beforeEach(() => {
        cy.visit('https://cms-lyart.vercel.app/login');
    })

    it('Deault shows at Student login form', () => {
        cy.get('span.ant-radio-button')
          .should("be.visible");     
    })

    it('Should have 3 radio button at login form', () => {   //不知道为何这个运行不了： label在input上级
        cy.get('input[type=radio]').should('have.length', 3);
        //cy,get('label').contains('Student').should("be.visible")
        //cy,get('label').contains('Teacher').should("be.visible")
        //cy,get('label').contains('Manager').should("be.visible")      
    })

    it('3 login should be display', () => {  
        cy.get('label').contains('Student').should("be.visible")
        cy.get('label').contains('Teacher').should("be.visible")
        cy.get('label').contains('Manager').should("be.visible")
    })
    

    ////如何测试鼠标移到Teacher radio button然后字体显示为蓝色
    /* it('Teacher button change color', () => {
        cy.get('span:contains("Teacher")')
          .should("be.visible")
          .trigger('mouseover')
          .get('span:contains("Teacher")')
          .should('have.css','color', '')
    }) */

    it('Test Teacher login', () => {                  //如何测试在鼠标移动到Teacher or Manager label，是可选的： check hrel？
        cy.get('label').contains('Teacher').click()   
        cy.get('#login_email').type('teacher@admin.com');
        cy.get('#login_password').type('111111');
        cy.get('button').click();      
        cy.url().should('include', '/dashboard'); 
    });

    it('Test Manager login', () => {                  
        cy.get('label').contains('Manager').click()   
        cy.get('#login_email').type('Manager@admin.com');
        cy.get('#login_password').type('111111');
        cy.get('button').click();      
        cy.url().should('include', '/dashboard'); 
    });

    it('Testing Sign up display on this form', () => {
        cy.get('div.ant-col.ant-col-sm-24').contains('Sign up').should("be.visible")
        
    })

    it('Testing Sign up have link', () => {
        cy.get('div.ant-space.ant-space-horizontal')
          .get('a').first().should('have.attr', 'href');
    })

    it('Remember me button can click', () => {
      cy.get('#login_remember[type="checkbox"]').check()
    })
})

describe('Sign up form testing', () => {
    beforeEach(() => {
        cy.visit('https://cms-lyart.vercel.app/signup');
    })

    it('should displey 3 label', () => {
        cy.get('div.ant-radio-group')
          .children('label')
          .should('have.length', 3);
    })

    it('shoudl display 3 radio button for role', () => {
      cy.get('[type="radio"]').check();
    })

    it('Show error when no info inputed', () => {
        cy.get('form').submit();
        
        cy.get('div[role="alert"]').contains("'email' is required")
          .should('be.visible');
        
        cy.get('div[role="alert"]').contains("'role' is required")
          .should('be.visible');
        
        cy.get('div[role="alert"]').contains("'password' is required")
          .should('be.visible');
        
        cy.get('div[role="alert"]').contains("'confirmPassword' is required")
          .should('be.visible');
    })

    

})