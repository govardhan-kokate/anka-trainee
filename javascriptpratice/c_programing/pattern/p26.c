
#include<stdio.h>
void main()
{
    int i,j,n=1,flag=1;
    for(i=1;i<=5;i++)
    {n=i;
        for(j=1;j<=9;j++)
        {  
            if(j>=6-i&&j<=4+i)
            {  
              printf("%d ",n);  
            }
            else
            {
                printf("  ");  
            }
        }
        printf("\n");
    }
}