class Car:
    def __init__(self, consumo):
        self.consumo = consumo
        self.gasolinaAtual = 0
    
    def botarGasolina(self, quantidadeDeGasolina):
        self.gasolinaAtual += quantidadeDeGasolina
    
    def andar(self, distancia):
        diferenca = distancia/self.consumo
        self.gasolinaAtual -= diferenca
    
    def status(self):
        print(f"Você tem {self.gasolinaAtual} Litros de gasolina")

if __name__ == "__main__":
    car = Car(15)
    car.botarGasolina(50)
    car.andar(10)
    car.status()