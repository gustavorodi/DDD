class Tamagushi:
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

if __name__ == "__main__":
    tamagushi = Tamagushi()
    tamagushi.setAtributs("GUGA", 100, 50, 15)
    tamagushi.happy()
    tamagushi.status()
