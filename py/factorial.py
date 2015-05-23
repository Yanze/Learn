def factorial(x):
  if x == 1:
    return 1
  else:
    return x*factorial(x-1)

# second way

def factorial2(n):
  num = 1
  while n >= 1:
    num = num * n
    n = n - 1
    return num

print factorial(5)
