 /*
 
        *
      * * *
    *   *   *
  *     *     *
* * * * * * * * *
  *     *     *
    *   *   *
      * * *
        *
        * */   
#include<stdio.h>
void main()
{
    int i,j,flag=1;
    for(i=1;i<=9;i++)
    {
        for(j=1;j<=9;j++)
        {
            if(j==6-i||j==4+i||j==i-4||j==14-i||i==5||j==5)
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