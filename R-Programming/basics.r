# a = "mobile"
# b = "pen"
# c = "makeup"

# numl = 3
# charl = "hello"
# log1 = TRUE

# #Type check 

# char1 = "hellp world"
# print(class(char1))  #character

# complex1 = 5+10i
# print(class(complex1))

# # assignment operators

# a = 10
# print(a)

# b <- 20
# print(b)

# 30 -> c
# print(c)
# print(a *b)

# #relational operator

# print(a < 20)
# print(a==100)
# print(a!=b)

# # logical operators
# var1 = TRUE
# var2 = FALSE
# print(var1&var2)
# print(var1|var2)

# # Vector ( homogenous data types only)
# # c = combine   
# v <- c(1,2,3)
# print(v)
# v1 = c(13,1123)
# print(v1)
# vec3 = c(T,F,F,T)
# print(vec3) #TRUE FALSE FALSE  TRUE

# mixbag1 <- c(1,T,2,3)
# print(mixbag1)
# print(class(mixbag1))
# print(v[1])
# print(v[1:2])
# #[1] 1 2
# # vectors data precedance ->  (character <- numeric <- logical) data types coers 
# # one based indexing

# #List ( heterogenous dataStructure)
# l1 <- list(1,"a",TRUE)
# #print(l1)

# # [[1]]
# # [1] 1

# # [[2]]
# # [1] "a"

# # [[3]]
# # [1] TRUE

# #print(l1[[1]])  # prints 1

# #List of vectors

# l2 = list(c(1,2,3),c('a','b','c'),c(T,F,T))
# print(l2)

# # [[1]]
# # [1] 1 2 3

# # [[2]]
# # [1] "a" "b" "c"

# # [[3]]
# # [1]  TRUE FALSE  TRUE

# # print( l2[[2]][2] ) # prints b



# #MATRIX ( 2 dimentional homogenous datatype)
# m1 <- matrix(c(1,2,3,4,6,7))
# print(m1) 


# #      [,1]
# # [1,]    1
# # [2,]    2
# # [3,]    3
# # [4,]    4
# # [5,]    6
# # [6,]    7

# m2 <- matrix(c(1,2,3,4,5,6), nrow=2,ncol= 3)
# print(m2)

# #     [,1] [,2] [,3]
# # [1,]    1    3    5
# # [2,]    2    4    6


# m2 <- matrix(c(1,2,3,4,5,6), nrow=2,ncol= 3, byrow = TRUE)
# print(m2)
# #      [,1] [,2] [,3]
# # [1,]    1    2    3
# # [2,]    4    5    6

 

#----------------------------------------------------------------------------------------------------------------

#MODULE 2 
# Matrix has same data type
# 2 Dimentional Data Structure
# Rows and Colums

# matrix(data, nrow, ncol, byrow)

mat = matrix(
    c(1,2,3,4,5,7),
    nrow=2,
    ncol=3
)

print(mat)
#      [,1] [,2] [,3]
# [1,]    1    3    5
# [2,]    2    4    7


mat2 = matrix(
    c(1,2,3,4,5,7),
    nrow=2,
    ncol=3,
    byrow=TRUE
)

print(mat2)
#      [,1] [,2] [,3]
# [1,]    1    2    3
# [2,]    4    5    7


#Matrix Dimension
dim(mat2) # 2 3 : 2 rows , 3 columns
dim(mat) # same

# naming rows and columns 
m <- matrix(
    c(10,20,30,40),
    nrow=2
)
rownames(m) <- c("A","B")
colnames(m) <- c("X","Y")
print(m)

#------------------------------
#Accessing Matrix Elements
#matrix[row,column]

print(mat2[2,3])
#access complete row
print(mat2[1,])
#access compelete col
print(mat2[,1])



#MATRIX OPERATIONS

# A) Addition of Matrices
# Two matrices must have the same dimensions

print(mat+mat2)
print(mat-mat2)
print(mat*mat2) #element wise multiplication

#Transpose of Matrix
print( t(mat) )

#Matrix Inverse
# only square matrices have inverse

sq <- matrix(c(1,2,3,4),nrow=2,ncol=2)

print("inverse")
print(sq)
print(solve(sq))

# determinant
print(det(sq))

# sum of matrix elements
print(sum(sq))

# Diagonal elements
print(diag(sq))

#Row sums
print(rowSums(sq))
print(colSums(sq))

#~~~~~~~~~~~

#Combine columns, Combine rows
# Cbind 
print("CBIND")
s1 <- matrix(c(1,2,3,4,5,6),nrow=2,ncol=3)
s2 <- matrix(c(12,22,33,44,34,56),nrow=2,ncol=3)

print(s1)
print(s2)
print("Binded")
cbind(s1,s2)

print("CBIND")
s1 <- matrix(c(1,2,3,4,5,6),nrow=2,ncol=3)
s2 <- matrix(c(12,22,33,44,34,56),nrow=2,ncol=3)

print(s1)
print(s2)
print("RowBinded")
rbind(s1,s2)


# applying functions mod 2 part 2 

apply(s1,2,sum) # s1 , sum of columns [1] 9 12

# Find Row average
apply(s1,2,mean) # s1 , average of s1 columns

apply(s1,2,max)

#. Applying Custom Functions

apply(s1,1,function(x){
 max(x)-min(x)
})

rohit <- function(x){
    print("rohitfunc")
}
rohit()

#Deleting Rows 
#matrix[-row,-column]
#      C1 C2 C3
# R1   1  2  3
# R2   4  5  6
# R3   7  8  9

# A[-2,]
# Remove row 2
# Keep all columns

print(s1[-2,])
print(s1)

#Deleting column
print(s1[,-3])
print(s1)

