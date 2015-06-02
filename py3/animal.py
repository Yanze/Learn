class Animal():

  def __init__(self,name):
    self.name = name

  def f1(self):
    print('f1')

#
#
#
#

class Dog(Animal):

  def __init__(self,nbPattes):
    self.nbPattes = nbPattes

  def f2(self):
    print('f2')


a1 = Animal('Chat')
print(a1.name)


d1 = Dog(5)
print(d1.nbPattes)



d1.f1()

