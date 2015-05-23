def remove_duplicates(numbers):
    res =[]
    for n in numbers:
        if n not in res:
            res.append(n)
    return res
