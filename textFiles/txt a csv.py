
import pandas as pd

# read_file = pd.read_csv (r'C:\xampp\htdocs\ProyectoB\textFiles\metricsNew2.txt', delim_whitespace=True, names=["a", "b", "c", "d","ab", "bf", "cew", "aewr", "btre", "certert"])
# read_file.to_csv (r'C:\xampp\htdocs\ProyectoB\textFiles\metricsNew2.csv', index=None)

readfile = pd.read_csv (r'C:\xampp\htdocs\ProyectoB\textFiles\metricsNew2.csv')
print(readfile)