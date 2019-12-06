const should = require('should');
const { createProduct, deleteProduct, editProduct, getProduct } = require("../controllers/product");
const mongoose = require('mongoose');
 
mongoose.Promise = Promise;
mongoose.connect("mongodb+srv://dbNissen:bajer123@mundhaeld-nshjk.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// For at få testene til at virke, skal du gå ind og indkommentere test metoderne i controllers/product.js.
// Husk også at udkommentere de "rigtige" metoder før du går igang.

describe('Test', function() {

    it('UC: 7, TestCase 7.1 og UC:5, TestCase 5.1', async() => {
        this.timeout(10000);

        let testProduct = createProduct('testProdukt', '10', '50/25', 'dette er en test');

        // Find produkt id'et på atlas.
        let result = await getProduct('5dea3ebdf41e4f2e58d9318c');
        result.name.should.be.equal('testProdukt');
        result.alcoholP.should.be.equal(10);
        result.price.should.be.equal('50/25');
        result.desciption.should.be.equal('dette er en test');
    })

    it('UC: 7, TestCase 7.2', async function() {
        this.timeout(10000);

        // Indsæt tilfældigt produkt id fra atlas til at slette.
        let result = await deleteProduct('5dea2c029b78354228a47950');
        let result2 = await getProduct('5dea2c029b78354228a47950');
        should(result2).be.null()
    })

    
    it('UC: 7, TestCase 7.3', async () => {
        this.timeout(10000);
        
        // Find produkt id'et på atlas for at redigere det produktet.
        let result = await editProduct('5dea2c544330a946049acf3c', 'Benja', '500', '10', 'humle')
        let newProduct = await getProduct('5dea2c544330a946049acf3c');
        console.log("New: " + newProduct)
        newProduct.name.should.be.equal('Benja');
        newProduct.alcoholP.should.be.equal(500)
    })
})