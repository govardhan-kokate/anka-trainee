/*
**********
****  ****
***    ***
**      **
*        *
**      **
***    ***
****  ****
**********
**********

*/
#include<stdio.h>
void main()
{
    int i,j,flag=1;
    for(i=1;i<=10;i++)
    {
        for(j=1;j<=10;j++)
        {
            if(j<=6-i||j>=5+i||j<=i-4||j>=15-i)
            {
              printf("*");
            
            }
        else
        {
            printf(" ");
        
        }
          
        }
        printf("\n");
    }
}