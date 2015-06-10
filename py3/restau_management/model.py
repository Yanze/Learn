"""
This module contains the model of the application.
It helps to manage a Restaurant.
"""
from math import ceil


class Restaurant():

  menu_file_default = 'menu.txt'
  name_length_max = 200
  table_number_max = 500
  persons_per_table_max = 10
  next_group_id = 1

  def __init__(self, name, table_nb):
    self.validate_inputs(name, table_nb)

    self.name = name
    self.table_nb = table_nb
    self.menu = None
    self.free_tables = []
    self.customer_groups = []

    self.init_free_tables(table_nb)

  def init_free_tables(self, number):
    for i in range(1, int(number)+1):
      self.free_tables.append(Table(i))

  def __str__(self):
    return '<name:{} table_nb:{}>'.format(self.name,self.table_nb)

  def validate_inputs(self, name, table_nb):
    if len(name) > self.name_length_max or not name:
      raise ValueError('Name length maximum is {} char and must not be empty'
                       .format(self.name_length_max))

    if int(table_nb) > self.table_number_max or int(table_nb) <= 0:
      raise ValueError('Table number must be between 1 and {}'
                       .format(self.table_number_max))

  def load_menu(self, menu_file = None):
    """
    Load menu from a txt file and store it in the restaurant.

    args:
       - menu_file: Text file containing the menu for a restaurant.
                    Format: number|dish name|price (eg: 1|Fish|15)
                    (Default: self.menu_file_default)
    return: None
    """

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

  def get_table_nb(self, customer_number):
    """
    Return the number of tables required depending on the client number.
    """

    return ceil(customer_number / self.persons_per_table_max)

  def get_free_tables(self,table_number):
    """
    Return a number of tables according to the number of table required
    if enough are available.
    """

    if table_number > len(self.free_tables):
      return None
    need_tables = self.free_tables[:table_number]
    self.free_tables = self.free_tables[table_number:]
    return need_tables

  def return_tables(self, returned_tables):
    """
    Put back returned_tables to the list of free table in the restaurant.
    """

    if len(self.free_tables) + len(returned_tables) > int(self.table_nb):
      raise ValueError('Too many tables.')
    self.free_tables.extend(returned_tables)

  def new_customer_group(self, customer_nb):
    """
    Create a customer group and assigned availables tables.

    return: A list of assigned tables number.
    """

    required_table_nb = self.get_table_nb(customer_nb)
    tables = self.get_free_tables(required_table_nb)
    if tables is None:
      return None
    self.customer_groups.append(CustomerGroup(customer_nb,
                                              tables,
                                              self.next_group_id))

    self.next_group_id += 1

    assigned_tables_nb = []
    for table in tables:
      assigned_tables_nb.append(table.number)
    return assigned_tables_nb

  def customer_group_leave(self, customer_group):
    """
    Put back tables when customer group leaves.
    Remove leaving customer.
    """
    self.return_tables(customer_group.tables)
    self.customer_groups.remove(customer_group)


class Dish():

  def __init__(self,number,name,price):
    self.number = number
    self.name = name
    self.price = price

  def __str__(self):
    return '<Dish{}: {}, Price: {}>'.format(self.number,
                                            self.name,
                                            self.price)


class Menu():

  def __init__(self,dishes):
    self.dishes = dishes

  def __str__(self):
    return '<Menu dish:{}>'.format(self.dish)


class Table():

  def __init__(self, number):
    self.number = number


class CustomerGroup():

  def __init__(self, number, tables, id):
    self.number = number
    self.tables = tables
    self.dishes = []
    self.id = id
    self.total_price = 0

  def __str__(self):
    tables_nb = ""
    for table in self.tables:
      tables_nb += str(table.number) + ','
    tables_nb = tables_nb[:-1]
    return '<Group ID {}, at {} tables, {} customers.>'.format(self.id,
                                                               tables_nb,
                                                               self.number)
  def order_dishes(self, dishes):
    self.dishes.extend(dishes)
    self.refresh_total_price()

  def refresh_total_price(self):
    total_price = 0
    for dish in self.dishes:
      total_price += int(dish.price)

    self.total_price = total_price
