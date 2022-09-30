/*
1 2 3 4 5
1     4
1   3
1 2
1
*/
#include<stdio.h>
void main()
{
    int i,j,n=1;
    for(i=1;i<=5;i++)
    {n=1;
        for(j=1;j<=5;j++)
        {   
            if(j==6-i||i==1||j==1)
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