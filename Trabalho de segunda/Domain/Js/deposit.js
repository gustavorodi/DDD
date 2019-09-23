class Deposit{
    depositarMoney(){
        var moneyNotHaveValidation = document.getElementById('cashInReal').value;
        if (this.validateValidValue(moneyNotHaveValidation) && this.limitToWithdraw()){
            this.depositing();
            this.sendMessageToCustomerApproval();
        } else {
            this.sendMessageToClientBlocking()
        }
    }

    validateValidValue(moneyBeingValidated)
    {   
        moneyBeingValidated = parseInt(moneyBeingValidated);

        if(!isNaN(moneyBeingValidated) && Number.isInteger(moneyBeingValidated)){
            this.setMoneyOfTransition(moneyBeingValidated);
            return true;
        }
        return false;
    }
    
    depositing(){
        var currentMoney = 1500; 
        currentMoney += this.getMoneyOftransition();
    }

    limitToWithdraw(){    
       return ((this.getMoneyOftransition() > 1000)?false:true);     
    }

    getMoneyOftransition(){
        return this.moneyOfTransition;
    }
    
    setMoneyOfTransition(moneyOfTransition){
        this.moneyOfTransition = moneyOfTransition;
    }

    sendMessageToCustomerApproval(){
        document.querySelector('#resultOfWithdrawal').innerHTML = "Seu deposito de R$"+this.getMoneyOftransition()+".00 foi feito.";
    }

    sendMessageToClientBlocking(){
        document.querySelector('#resultOfWithdrawal').innerHTML = "Descuple, sua operação não pode ser completada consulte seu Gerente.";
    }
}

deposit = new Deposit();

describe("deposit", function() {

    it("Valida valor do deposito", function() {
      expect(deposit.validateValidValue(152)).toEqual(true);
    });

    it("Valida valor do limite", function() {
        expect(deposit.limitToWithdraw()).toEqual(true)
    });

    it("Valida get", function() {
        deposit.setMoneyOfTransition(3)
        expect(deposit.getMoneyOftransition()).toEqual(3)
    });

    it("aprovação de transação", function(){
        deposit.setMoneyOfTransition(500)
        expect(deposit.depositing()).toEqual();
    })

  });