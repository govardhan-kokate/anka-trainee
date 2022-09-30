//. Write a C program to find LCM of two numbers.

#include<stdio.h>
void main()
{
    int i,j,sum=1,pow=1,n,m;
    printf("enter the number");
    scanf("%d%d",&n,&m);
    for(i=1;i<=n;i++)
    {
        pow=pow*n;
        sum=0;
        for(j=1;j<=m;j++)
        {
            sum=sum*m;
            if(pow==sum)
            {
                printf("%d",sum);
                break;
            }

        }
    }
}