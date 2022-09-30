
38)Write a program in C for multiplication of two square Matrices
Test Data :
Input the rows and columns of first matrix : 2 2
Input the rows and columns of second matrix : 2 2
Input elements in the first matrix :
element - [0],[0] : 1
element - [0],[1] : 2
element - [1],[0] : 3
element - [1],[1] : 4
Input elements in the second matrix :
element - [0],[0] : 5
element - [0],[1] : 6
element - [1],[0] : 7
element - [1],[1] : 8
Expected Output :
The First matrix is :
1 2
3 4
The Second matrix is :
5 6
7 8
The multiplication of two matrix is :
19 22
43 50
*/
#include<stdio.h>
void main()
{
    int i,j,a[3][3],b[3][3],c[3][3],k,sum=0;
    //frist array
    printf("enter frist array\n");
    for(i=0;i<3;i++)
    {
        for(j=0;j<3;j++)
        {
            scanf("%d",&a[i][j]);
        }
    }
    printf("frist array\n");
     for(i=0;i<3;i++)
    {
        for(j=0;j<3;j++)
        {
            printf("%d\t",a[i][j]);
        }
        printf("\n");
    }
//second array
printf("enter second array\n");
      for(i=0;i<3;i++)
    {
        for(j=0;j<3;j++)
        {
            scanf("%d",&b[i][j]);
        }
    }
    
printf("second array\n");
      for(i=0;i<3;i++)
    {
        for(j=0;j<3;j++)
        {
            printf("%d\t",b[i][j]);
        }
        printf("\n");
    }
//logic
    for(i=0;i<3;i++)
    {
        for(j=0;j<3;j++)
        {sum=0;
            for(k=0;k<3;k++)
            {
             sum=sum+a[i][k]*b[k][j];
            }
            c[i][j]=sum;
        }
        printf("\n");
    }
printf("multiplication of two array\n");
     for(i=0;i<3;i++)
    {
        for(j=0;j<3;j++)
        {
           printf("%d\t",c[i][j]);
        }
        printf("\n");
    }


}