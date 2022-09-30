/*
46)Write a program in C to accept a matrix and determine whether it is a sparse matrix.
Test Data :
Input the number of rows of the matrix : 2
Input the number of columns of the matrix : 2
Input elements in the first matrix :
element - [0],[0] : 0
element - [0],[1] : 0
element - [1],[0] : 1
element - [1],[1] : 0
Expected Output :
The given matrix is sparse matrix.
There are 3 number of zeros in the matrix
*/
#include<stdio.h>
void main()
{
    int i,j,a[3][3],count=0;
    for(i=0;i<3;i++)
    {
        for(j=0;j<3;j++)
        {
            scanf("%d",&a[i][j]);
        }
    }
     for(i=0;i<3;i++)
    {
        for(j=0;j<3;j++)
        {
            printf("%d\t",a[i][j]);
        }
        printf("\n");
    }
    //logic

     for(i=0;i<3;i++)
    {
        for(j=0;j<3;j++)
        {
            if(a[i][j]==0)
            {
                count++;
            }
        }
    }
    if(count>9/2)
    {
        printf("\nmatrix is spars matrix contain %d zero element",count);
    }
    else
    {
        printf("matrix is not spars matrix");
    }
    

}