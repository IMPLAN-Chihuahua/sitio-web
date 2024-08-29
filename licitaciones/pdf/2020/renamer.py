import os

directory = './'

[os.rename(os.path.join(directory, f), os.path.join(directory, f).replace(' ', '+').lower()) for f in os.listdir(directory)]