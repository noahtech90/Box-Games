import os

file = open("test.txt", 'r+')
file.truncate(0)
file.write("")
file.close()
