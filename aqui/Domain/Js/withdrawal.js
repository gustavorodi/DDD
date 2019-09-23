class Withdrawal{

    cashNeedmoneyToWithdraw()
    {
        var moneyNotHaveValidation = document.getElementById('cashInReal').value;
        if (this.validateValidValue(moneyNotHaveValidation) && this.validWithdrawal(moneyNotHaveValidation)) {
            if(this.validWithdrawalLimit()){
                this.approvedTransaction();
                this.sendMessageToCustomerApproval();
                setTimeout(this.countCash(this.getMoney()),5000);
            }else{
                this.sendMessageToClientBlocking();
            }
        } else {
            this.sendMessageToClientBlocking();
        }
    }

    validateValidValue(moneyBeingValidated)
    {   
        moneyBeingValidated = parseInt(moneyBeingValidated);

        if(!isNaN(moneyBeingValidated) && Number.isInteger(moneyBeingValidated)){
            this.setMoney(moneyBeingValidated);
            return true;
        }
        return false;
    }

    validWithdrawal(cashRequestForWithdrawal)
    {
        var currentMoney = 1500;
        if (currentMoney >= cashRequestForWithdrawal) {
            return true;
        }
        return false;
    }

    validWithdrawalLimit()
    {
        return (this.getMoney() > 1000?false:true);
    }

    approvedTransaction()
    {
        var currentMoney = 1000; 
        currentMoney -= this.getMoney();
    }

    sendMessageToCustomerApproval()
    {
        document.querySelector('#resultOfWithdrawal').innerHTML = "Seu saque de R$"+this.getMoney()+".00 foi feito.";
    }

    sendMessageToClientBlocking()
    {
        document.querySelector('#resultOfWithdrawal').innerHTML = "Descuple, sua operação não pode ser completada consulte seu Gerente.";
    }

    setMoney(money)
    {
        this.money = money;
    }

    getMoney()
    {
        return this.money;
    }

    countCash(withdrawalValue)
    {
        var BallotAccount100 = 0;
        var BallotAccount50 = 0;
        var BallotAccount20 = 0;
        var BallotAccount10 = 0;
        var BallotAccount5 = 0;
        var BallotAccount2 = 0;
        var BallotAccount1 = 0;

        while (withdrawalValue >= 100) {
            withdrawalValue = withdrawalValue - 100;
            BallotAccount100++;
            }
        while (withdrawalValue >= 50) {
            withdrawalValue = withdrawalValue - 50;
            BallotAccount50++;
            }
        while (withdrawalValue >= 20) {
            withdrawalValue = withdrawalValue - 20;
            BallotAccount20++;
            }
        while (withdrawalValue >= 10) {
            withdrawalValue = withdrawalValue - 10;
            BallotAccount10++;
            }
        while (withdrawalValue >= 5) {
            withdrawalValue = withdrawalValue - 5;
            BallotAccount5++;
            }
        while (withdrawalValue >= 2) {
            withdrawalValue = withdrawalValue - 2;
            BallotAccount2++;
            }
        while (withdrawalValue == 1) {
            withdrawalValue = withdrawalValue - 1;
            BallotAccount1++;
            }
        
        alert("Você vai receber: \n"+BallotAccount100+"  notas de 100 \n"+
                                    BallotAccount50+"  notas de 50\n"+
                                        BallotAccount20+"  notas de 20\n"+
                                            BallotAccount10+"  notas de 10\n"+
                                                BallotAccount5+"  notas de 5\n"+
                                                    BallotAccount2+"  notas de 2\n"+
                                                        BallotAccount1+"  notas de 1");        
    }
}

Withdrawal = new Withdrawal();

describe("Withdrawal", function() {

    it("Valida saldo", function() {
      expect(Withdrawal.validWithdrawal(1302)).toEqual(true);
    });

    it("Valida valor do limite", function() {
        Withdrawal.setMoney(56)
        expect(Withdrawal.validWithdrawalLimit()).toEqual(true)
    });

    it("Valida get", function() {
        Withdrawal.setMoney(3)
        expect(Withdrawal.getMoney()).toEqual(3)
    });

    it("valida o que o usuário escreveu", function(){
        expect(Withdrawal.validateValidValue(1263)).toEqual(true);
    });

    it("Aprovação de transação", function(){
        Withdrawal.setMoney(350);
        expect(Withdrawal.approvedTransaction()).toEqual();
    });
});