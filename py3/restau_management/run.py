from shell import Shell
import sys

restau_creation_max_tries = 5


shell = Shell()
shell.welcome()
restau = shell.create_new_restau()

cpt = 0
while restau is None and cpt < restau_creation_max_tries:
  print("Error in Inputs, please try again ({} tries left)".format(restau_creation_max_tries-1-cpt))
  restau = shell.create_new_restau()
  cpt += 1
  if cpt == restau_creation_max_tries-1:
    print("Too many tries, please come back later.")
    sys.exit()



shell.log('New restaurant created{}'.format(restau))

restau.load_menu()
shell.log('Menu loaded (total dishes: {})'.format(len(restau.menu.dishes)))

