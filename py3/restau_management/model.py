class Restaurant():

  menu_file_default = 'menu.txt'
  name_length_max = 200
  table_number_max = 500

  def __init__(self, name, table_nb):
    self.validate_inputs(name, table_nb)

    self.name = name
    self.table_nb = table_nb
    self.menu = None

  def __str__(self):
    return '<name:{} table_nb:{}>'.format(self.name,self.table_nb)

  def validate_inputs(self, name, table_nb):
    if len(name) > self.name_length_max or not name:
      raise ValueError('Name length maximum is {} char and must not be empty'.format(self.name_length_max))
    if int(table_nb) > self.table_number_max or int(table_nb) <= 0:
      raise ValueError('Table number must be between 1 and {}'.format(self.table_number_max))

  def load_menu(self, menu_file = None):
    if menu_file is None:
      menu_file = self.menu_file_default
    with open(menu_file, 'r') as textfile:
      lines = textfile.read().splitlines()
    dishes = []
    for line in lines:
      current_line = line.split('|')
      dish = Dish(number=current_line[0],
                  name=current_line[1],
                  price=current_line[2])
      dishes.append(dish)
    self.menu = Menu(dishes)


class Dish():
  def __init__(self,number,name,price):
    self.number = number
    self.name = name
    self.price = price

  def __str__(self):
    return '<Dish{}: {}, Price: {}>'.format(self.number, self.name, self.price)

class Menu():
  def __init__(self,dishes):
    self.dishes = dishes

  def __str__(self):
    return '<Menu dish:{}>'.format(self.dish)
