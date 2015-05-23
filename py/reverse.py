def reverse(text):
  res = []
  for ch in range(len(text),0,-1):
    res.append(text[ch-1])
  return "".join(res)

print reverse("hello");
