class Retangulo:
    def __init__(self):
        self.x = 0
        self.y = 0     
        
    def setValue(self, x, y):
        self.x = x
        self.y = y  
    
    def getValue(self):
        print(f"Os lados tem {self.x} e {self.y} ")

    def getArea(self):
        area = self.x * self.y
        print(f"O valor da area é {area}")

    def getPerimetro(self):
        perimetro = 2*(self.x + self.y)
        print(f"O perimetro é de {perimetro}")

if __name__ == "__main__":
    meuRetangulo = Retangulo()
    meuRetangulo.setValue(5,9)
    meuRetangulo.getValue()
    meuRetangulo.getArea()
    meuRetangulo.getPerimetro()
      