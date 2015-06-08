from shell import Shell
import sys

restau_creation_max_tries = 5


shell = Shell()
shell.welcome()
restau = shell.create_new_restau()

cpt = 0
while restau is None and cpt < restau_creation_max_tries:
  print("Error in Inputs, please try again ({} tries left)"
        .format(restau_creation_max_tries-1-cpt))
  restau = shell.create_new_restau()
  cpt += 1
  if cpt == restau_creation_max_tries-1:
    print("Too many tries, please come back later.")
    sys.exit()



shell.log('New restaurant created{}'.format(restau))

restau.load_menu()
shell.log('Menu loaded (total dishes: {})'
          .format(len(restau.menu.dishes)))

user_answer = shell.show_main_menu()
while user_answer != '6':

  if user_answer == '1':
    shell.show_dishes(restau.menu.dishes)
  elif user_answer == '2':
    restau.load_menu()
    shell.show_dishes(restau.menu.dishes)
  elif user_answer == '3':
    shell.assign_new_table(restau)
  elif user_answer == '4':
    shell.show_customer_groups(restau.customer_groups)
  elif user_answer == '5':
    shell.release_table(restau)

  user_answer = shell.show_main_menu()



