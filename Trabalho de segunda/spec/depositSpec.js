let deposit = require('../Domain/Js/deposit.js')
describe("deposit", function() {
  
    it("Classificacao maior de 18 anos", function() {
      expect(deposit.validateValidValue(152)).toMatch(true);
    });
  
  });