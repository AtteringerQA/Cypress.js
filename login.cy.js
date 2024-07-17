describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru') // Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1') // ввели верный пароль
         cy.get('#loginButton').click(); // Нажал войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю что после авторизации вижу текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю что крестик есть и виден пользователю
 
     })
     it('Неверный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru') // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio7') // ввели неверный пароль
        cy.get('#loginButton').click(); // Нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю что после авторизации вижу текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю что крестик есть и виден пользователю

    })
    it('Верный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('germannet@dolnikov.ru') // Ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1') // ввели неверный пароль
        cy.get('#loginButton').click(); // Нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю что после авторизации вижу текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю что крестик есть и виден пользователю

    })
    it('Проверка почты без @', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('germannetdolnikov.ru') // Ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1') // ввели верный пароль
        cy.get('#loginButton').click(); // Нажал войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю что после авторизации вижу текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю что крестик есть и виден пользователю

    })

    it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        
        cy.get('#forgotEmailButton').click(); // Нажал забыл пароль
        cy.get('#mailForgot').type('german@dolnikov.ru') // Ввел почту для восстановления
        cy.get('#restoreEmailButton').click()
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю что после авторизации вижу текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю что крестик есть и виден пользователю

    })

    it('Верный пароль и неверный логин, строчные буквы', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru') // Ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1') // ввели неверный пароль
        cy.get('#loginButton').click(); // Нажал войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю что после авторизации вижу текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю что крестик есть и виден пользователю

    })
 })
 
 
