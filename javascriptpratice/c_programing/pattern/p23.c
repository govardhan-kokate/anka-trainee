/*
1
12
1 3
1  4
12345

*/
#include<stdio.h>
void main()
{
    int i,j,n=1;
    for(i=1;i<=5;i++)
    {n=1;
        for(j=1;j<=i;j++)
        {   
            if(j==i||i==5||j==1)
            {
              printf("%d",n);
              n++;
            }
            else
            {
                printf(" ");
                n++;
            }
        }
        printf("\n");
    }
}