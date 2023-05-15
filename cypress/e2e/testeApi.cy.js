/// <reference types="cypress" />

describe('Teste na API PetStore', () => {
    it('Deve retornar dados da pet por ID', () => {

      const allure = Cypress.Allure.reporter.getInterface();
      allure.feature('Teste api');
      allure.epic('teste apic');

      cy.request('GET', 'https://petstore.swagger.io/v2/pet/1').then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.name).to.eq('doggie')
        expect(response.body.photoUrls[0]).to.eq('string')
        expect(response.body.status).to.eq('available')
      })
    })
  })

  describe('Teste na API PetStore', () => {
    it('Deve retornar dados da pet por ID', () => {
      cy.request('GET', 'https://petstore.swagger.io/v2/pet/10').then((response) => {
        expect(response.status).to.eq(200)
      
      })
    })
  })

  describe('Teste na API PetStore com Corpo JSON', () => {
    it('Deve criar um novo usuário', () => {
      const user = [
        {
          "id": 1,
          "username": "AuAu",
          "firstName": "pet",
          "lastName": "cao",
          "email": "cao@mail.com",
          "password": "112345",
          "phone": "119999999",
          "userStatus": 1
        }
      ]
      
      cy.request('POST', 'https://petstore.swagger.io/v2/user/createWithArray', user).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.code).to.eq(200)
        expect(response.body.message).to.eq('ok')
        expect(response.body.type).to.eq('unknown')
      })
    })
  })