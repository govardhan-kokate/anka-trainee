/*
* * * * * * * * * * *
  * * * * * * * * *
    * * * * * * *
      * * * * *
        * * *
          *
        
        */
#include<stdio.h>
void main()
{
    int i,j,flag=1;
    for(i=1;i<=6;i++)
    {
        for(j=1;j<=11;j++)
        {
            if(j<=12-i&&j>=i)
            {
              printf("* ");
              flag==0;
            }
        else
        {
            printf("  ");
            flag==1;
        }
          
        }
        printf("\n");
    }
}