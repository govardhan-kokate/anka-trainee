/*
48)Write a program in C to check whether a given matrix is an identity matrix.
Test Data :
Input number of Rows for the matrix :3
Input number of Columns for the matrix :3
Input elements in the first matrix :
element - [0],[0] : 1
element - [0],[1] : 0
element - [0],[2] : 0
element - [1],[0] : 0
element - [1],[1] : 1
element - [1],[2] : 0
element - [2],[0] : 0
element - [2],[1] : 0
element - [2],[2] : 1
Expected Output :
The matrix is :
1 0 0
0 1 0
0 0 1
The matrix is an identity matrix.
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
          if(a[i][j]==0||i==j)
          {
              if(i==j)
              {
                  if(a[i][j]==1)
                  {
                      count++;
                  }
              }
          }
        }
    }

    if(count==3)
    {
        printf("matrix is identical");
    }
    else
    {
        printf("matrix not identical");
    }
    
}