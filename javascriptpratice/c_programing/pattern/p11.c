/*
* * * * *
* * * *
* * *
* *
*
* *
* * *
* * * *
* * * * *
*/
#include<stdio.h>
void main()
{
    int i,j,flag=1;
    for(i=1;i<=9;i++)
    {
        for(j=1;j<=5;j++)
        {
            if(j<=6-i||j<=i-4)
            {
              printf("* ");
            
            }
        else
        {
            printf("  ");
        
        }
          
        }
        printf("\n");
    }
}