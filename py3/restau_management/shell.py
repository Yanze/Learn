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

  def log(self, msg):
    print('** '+ msg)
