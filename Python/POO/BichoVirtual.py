class BichoVirtual:
    def __init__(self):
        self.nome = ""
        self.fome = 50
        self.saude = 50
        self.idade = 0
        self.felicidade = 0

    def setAtributs(self, nome, fome, saude, idade):
        self.nome = nome 
        self.fome = fome
        self.saude = saude
        self.idade = idade
    
    def happy(self):
        self.felicidade = self.fome * self.saude 
        print(f" Saude deu seu bichinho é {self.felicidade}")

    def status(self):
        print(f"Seu Tamagushi está assim: \n nome: {self.nome} \n fome: {self.fome}\n saude: {self.saude}\n idade: {self.idade}\n felicidade: {self.felicidade}")
    
    def darComida(self, comida):
        if self.fome == 0:
            print("Seu bichinho não tem fome")
            return
        else:
            self.fome -= comida

        self.validaFome()
        self.validaFeliciade()
       
    
    def brincando(self, tempoDeBrincadeira):
        self.felicidade += tempoDeBrincadeira * 5.5
        self.fome -= tempoDeBrincadeira * 2.5
        self.validaFome()
        self.validaFeliciade()
    
    def validaFome(self):
        if self.fome < 0:
            self.fome = 0

    def validaFeliciade(self):
         if self.felicidade > 10000:
            self.felicidade = 10000


if __name__ == "__main__":
    bichoVirtual = BichoVirtual()
    bichoVirtual.setAtributs("GUGA", 50, 50, 15)
    bichoVirtual.happy()
    bichoVirtual.status()
    bichoVirtual.darComida(25)
    bichoVirtual.brincando(60)
    bichoVirtual.status()
