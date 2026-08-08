a = "mobile"
b = "pen"
c = "makeup"

numl = 3
charl = "hello"
log1 = TRUE

#Type check 

char1 = "hellp world"
print(class(char1))  #character

complex1 = 5+10i
print(class(complex1))

# assignment operators

a = 10
print(a)

b <- 20
print(b)

30 -> c
print(c)
print(a *b)

#relational operator

print(a < 20)
print(a==100)
print(a!=b)

# logical operators
var1 = TRUE
var2 = FALSE
print(var1&var2)
print(var1|var2)

# Vector ( homogenous data types only)
# c = combine   
v <- c(1,2,3)
print(v)
v1 = c(13,1123)
print(v1)
vec3 = c(T,F,F,T)
print(vec3) #TRUE FALSE FALSE  TRUE

mixbag1 <- c(1,T,2,3)
print(mixbag1)
print(class(mixbag1))
print(v[1])
print(v[1:2])
#[1] 1 2
# vectors data precedance ->  (character <- numeric <- logical) data types coers 
# one based indexing

#List ( heterogenous dataStructure)
l1 <- list(1,"a",TRUE)
#print(l1)

# [[1]]
# [1] 1

# [[2]]
# [1] "a"

# [[3]]
# [1] TRUE

#print(l1[[1]])  # prints 1

#List of vectors

l2 = list(c(1,2,3),c('a','b','c'),c(T,F,T))
print(l2)

# [[1]]
# [1] 1 2 3

# [[2]]
# [1] "a" "b" "c"

# [[3]]
# [1]  TRUE FALSE  TRUE

# print( l2[[2]][2] ) # prints b



#MATRIX ( 2 dimentional homogenous datatype)
m1 <- matrix(c(1,2,3,4,6,7))
print(m1) 


#      [,1]
# [1,]    1
# [2,]    2
# [3,]    3
# [4,]    4
# [5,]    6
# [6,]    7

m2 <- matrix(c(1,2,3,4,5,6), nrow=2,ncol= 3)
print(m2)

#     [,1] [,2] [,3]
# [1,]    1    3    5
# [2,]    2    4    6


m2 <- matrix(c(1,2,3,4,5,6), nrow=2,ncol= 3, byrow = TRUE)
print(m2)
#      [,1] [,2] [,3]
# [1,]    1    2    3
# [2,]    4    5    6

 














































