const should = require('should')
const mongoose = require('mongoose');
const path = require('../controllers/product');
const {createProduct} = path;
const {deleteProduct} = path;
const {getProdukt} = path;
const {getProduct} = path;

describe('Test functions i controller', () => {
    
    it('Test om createProduct() virker', () => {

        // Ved ikke om man kan oprette et produkt gennem test?
        // createProduct()
        
    })

    it('Test om deleteProduct() virker', () => {

        // deleteProduct()

    })

    it('Test om getProdukt() virker', () => {
        
        getProdukt().should.exist
        getProdukt().should.not.be.undefined

    })

    it('Test om getProduct() virker', () => {
  
        getProduct('5dde402dc727df064791331a').should.exist
        getProduct('5dde402dc727df064791331a').should.not.be.undefined

    })

})