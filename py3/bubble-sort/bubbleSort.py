import random


def bubbleSort(lst):
    for n in range(len(lst) - 1, 0, -1):
        for i in range(n):
            if lst[i] > lst[i + 1]:
                lst[i], lst[i + 1] = lst[i + 1], lst[i]


def generate_random_list():
    return(random.sample(range(0, 1000), 100))

alist = generate_random_list()
bubbleSort(alist)
print(alist)
