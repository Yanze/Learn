class Car():
  x = 6

  def __init__(self, mil, isDiesel, year=None, nbDoor=None):
    p=9
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

c2 = Car(mil=30000,
         nbDoor=4,
         isDiesel=True)

c1.mileage
c2.mileage
Car.x

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


class Employee():
  x = 5
  def f1(self,p1):
    return 5

  def f3(self):
    pass

class PartTimeEmployee(Employee):
  y = 5
  def f2(self,p1):
    print('f2')

  def f1(self,p1):
    y = super(PartTimeEmployee, self).f1(p1)
    return y +  6

  def f5(self):
    super(PartTimeEmployee, self).f3()
    f3()


















