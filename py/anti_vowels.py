def anti_vowel(text):
  for ch in text:
    if ch in "aeiouAEIOU":
      text = text.replace(ch,"")
      return text
