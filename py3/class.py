class Car():

  def __init__(self, mil, isDiesel, year=None, nbDoor=None):
    self.mileage = mil
    self.newVariable = 5
    self.isDiesel = isDiesel
    self.x = None
    self.year = year
    self.nbDoor = nbDoor
    print('Year: ' + str(year))
    print('Doors: ' + str(nbDoor))

  def honk(self):
    print("Tuu-tuuuuu! ")

  def f2(self):
    print(self.newVariable)

  def sayHello():
    #
    # self.mileage????
    #
    print("hello")
  def printMileage(self):
    print(self.mileage)


# Car.sayHello()

c1 = Car(mil=20000,
         nbDoor=4,
         isDiesel=True)


#c1.mileage = 5
#c1.printMileage()

#c1.honk()
#c1.f2()


# c1.mileage = 2000
# c1.printMileage()

# c2=Car()
# c2.mileage = 3000
# c2.printMileage

# c1.sayHello()



