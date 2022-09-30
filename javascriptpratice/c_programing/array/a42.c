/*
42)Write a program in C to find sum of rows an columns of a Matrix.
Test Data :
Input the size of the square matrix : 2
Input elements in the first matrix :
element - [0],[0] : 5
element - [0],[1] : 6
element - [1],[0] : 7
element - [1],[1] : 8
Expected Output :
The First matrix is :
The matrix is :
5 6
7 8
The sum or rows and columns of the matrix is :
5 6 11
7 8 15
12 14
*/
#include<stdio.h>
void main()
{
    int i,j,a[3][3],sum;
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
     for(i=0;i<3;i++)
    {sum=0;
        for(j=0;j<3;j++)
        { printf("%d\t",a[i][j]);
         sum=sum+a[i][j];
         
        }
        printf("-->%d\n",sum);
    }
}