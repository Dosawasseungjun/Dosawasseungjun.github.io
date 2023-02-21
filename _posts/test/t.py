import sys
import math
import time
from datetime import datetime
import ray
import numpy as np

def generate_matrix(xsz, ysz):
    mt = np.random.randint(0, 1000, size=(xsz, ysz))
    return mt

def sum_matrix(A, B):
    return A+B

def dot_matrix(A, B):
    return A.dot(B)

start = datetime.now()
A = [generate_matrix(500, 500) for i in range(100)]
B = [generate_matrix(500, 500) for i in range(100)]
C = [sum_matrix(A[i], B[i]) for i in range(100)]
D = [dot_matrix(A[i], B[i]) for i in range(100)]
dotA = A[0]
for i in range(1, len(A)-1):
    dotA = dot_matrix(dotA, A[i])
print("Time : ", datetime.now()-start)
print(dotA)

ray.init()

@ray.remote
def R_generate_matrix(xsz, ysz):
    mt = np.random.randint(0, 1000, size=(xsz, ysz))
    return mt

@ray.remote
def R_sum_matrix(A, B):
    return A+B

@ray.remote
def R_dot_matrix(A, B):
    return A.dot(B)


start = datetime.now()
A = [R_generate_matrix.remote(500, 500) for i in range(100)]
ray.get(A)
B = [R_generate_matrix.remote(500, 500) for i in range(100)]
ray.get(B)
C = [R_sum_matrix.remote(A[i], B[i]) for i in range(100)]
ray.get(C)
D = [R_dot_matrix.remote(A[i], B[i]) for i in range(100)]
ray.get(D)
dotA = A[0]
for i in range(1, len(A)-1):
    dotA = R_dot_matrix.remote(dotA, A[i])
print("Time : ", datetime.now()-start)
print(ray.get(dotA))