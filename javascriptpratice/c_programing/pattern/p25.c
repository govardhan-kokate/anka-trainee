/*
        5
      4   6
    3       7
  2           8
1 2 3 4 5 6 7 8 9
*/
#include<stdio.h>
void main()
{
    int i,j,n=1,flag=1;
    for(i=1;i<=5;i++)
    {n=1;
        for(j=1;j<=9;j++)
        {   
            if(j==6-i||j==4+i||i==5)
            {
              printf("%d ",n);
              n++;
              
            }
            else
            {
                printf("  ");
                n++;
            
            }
            
        }
        printf("\n");
    }
}