    /*

    *
* *
* * *
* * * *
* * * * *
* * * *
* * *
* *
*
*/
#include<stdio.h>
void main()
{
    int i,j,flag=1;
    for(i=1;i<=9;i++)
    {
        for(j=1;j<=6;j++)
        {
            if(j<=i&&j<=10-i)
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