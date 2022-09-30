/*
40)Write a program in C to find sum of right diagonals of a matrix
Test Data :
Input the size of the square matrix : 2
Input elements in the first matrix :
element - [0],[0] : 1
element - [0],[1] : 2
element - [1],[0] : 3
element - [1],[1] : 4
Expected Output :
The matrix is :
1 2
3 4
Addition of the right Diagonal elements is :5
*/
#include<stdio.h>
void main()
{
    int i,j,a[3][3],sum=0,add=0;
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
printf("sum of digonal\n");

      for(i=0;i<3;i++)
     {
         for(j=0;j<3;j++)
         {
             if(j==2-i)
             {
                 add=add+a[i][j];
                 printf("%d\t",a[i][j]);
             }
         }
     }
      printf("-->%d\n",add);

    for(i=0;i<3;i++)
     {
         for(j=0;j<3;j++)
         {
             if(i==j)
             {
                 sum=sum+a[i][j];
                 printf("%d\t",a[i][j]);
             }
         }
     }

     printf("-->%d\n",sum);

} 