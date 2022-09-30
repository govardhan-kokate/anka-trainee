/*
12345
1234
123
12
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
            if(j<=6-i)
            {
              printf("%d",n);
              n++;
            }
        }
        printf("\n");
    }
}