from model import Restaurant

class Shell():
  def welcome(self):
    print('')
    print('==================================')
    print ('Welcome to restaurant management!')
    print('==================================')
    print('')

  def create_new_restau(self):
    restau_name = input('Please enter restaurant name:')
    table_number = input('Enter table number:')

    try:
      restaurant = Restaurant(name = restau_name,
                              table_nb = table_number)

    except ValueError as ex:
      return None

    return restaurant

  def show_main_menu(self):
    print('')
    print('=================================')
    print('Please make a selection:')
    print('=================================')
    print('')
    print('1. Show Dishes')
    print('2. Reload & Show Dishes')
    print('3. Quit Application')
    print('')
    return input('selection:')

  def show_dishes(self, dishes):
    print('')
    print('           Your Menu')
    print('         =============')
    print('')
    for dish in dishes:
      print('{}. {} ============  Price: {}'.format(dish.number,
                                                    dish.name,
                                                    dish.price))


  def log(self, msg):
    print('** '+ msg)
