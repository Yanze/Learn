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
    print('3. Assign New Table')
    print('4. Show Customer Groups')
    print('5. Release Table')
    print('6. Quit Application')
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

  def assign_new_table(self, restau):
    customers = input('Please enter customer number:')
    tables = restau.new_customer_group(int(customers))
    if tables is None:
      print('Sorry, not enough available tables.')
    else:
      print('Tables {} are available for this customer group.'
          .format(', '.join(map(str, tables))))

  def show_customer_groups(self, groups):
    print('')
    print('         All Customer Groups in Restaurant ')
    print('       =====================================')
    print('')
    if len(groups) == 0:
      print('No customer groups at the moment.')

    for group in groups:

      tables_nb = ""
      for table in group.tables:
        tables_nb += str(table.number) + ','
      tables_nb = tables_nb[:-1]
      print('Group {} at {} tables, {} customers.'
            .format(group.id,
                    tables_nb,
                    group.number))

  def release_table(self, restau):
    leaving_customer_group = input('Please enter leaving group id:')
    group_leaving = None

    for group in restau.customer_groups:
      if group.id == int(leaving_customer_group):
        group_leaving = group
        break

    if group_leaving is None:
      print("No Group {} found".format(leaving_customer_group))
    else:
      restau.customer_group_leave(group_leaving)
      tables_nb = ""
      for table in group_leaving.tables:
        tables_nb += str(table.number) + ','
      tables_nb = tables_nb[:-1]
      print('Tables {} are released'.format(tables_nb))


