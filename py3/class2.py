class Town():
  def __init__(self,adult,children,old):
    self.nb_adult = adult
    self.nb_children = children
    self.nb_old = old


  def newBorn(self,num):
    self.nb_children += num


  def dead(self,num):
    self.nb_old -= num



c1 = Town(adult = 200,
          children = 50,
          old = 100)

print(c1.nb_children)
c1.newBorn(20)
print(c1.nb_children)
c1.dead(10)
print(c1.nb_old)

