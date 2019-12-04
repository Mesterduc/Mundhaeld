const should = require('should')
const mongoose = require('mongoose');
const path = require('../controllers/product');
const {createProduct} = path;
const {deleteProduct} = path;
const {getProduct} = path;
const {getProducts} = path;


describe('Test funktioner i controller', () => {
    
    // it('Test om createProduct() virker', () => {

    //     // createProduct()
        
    // })

    //  it('Test om deleteProduct() virker', () => {

    //      // deleteProduct()

    // })

    it('Test om getProducts() virker', () => {
        
        getProducts().should.exist
        getProducts().should.not.be.undefined
        getProducts().should.not.be.null
                
        // getProducts().should.have.property('name', 'Klosterbryg')
    })

    it('Test om getProduct() virker', () => {
        //5de6277ee661bf27f82795e6 - Klosterbyg
        getProduct('5de6277ee661bf27f82795e6').should.exist
        getProduct('5de6277ee661bf27f82795e6').should.not.be.undefined
        getProduct('5de6277ee661bf27f82795e6').should.not.be.null
        // getProduct('5de6277ee661bf27f82795e6').should.have.property('name')

    })

})