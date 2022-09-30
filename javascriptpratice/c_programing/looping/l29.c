//. Write a C program to find all prime factors of a number.
#include<stdio.h>
int main()
{
    int n,i,j,isprime;
    printf("enter the number");
    scanf("%d",&n);
    for(i=2;i<=n;i++)
    {
        if(n%i==0)
        {
            isprime=1;
            for(j=2;j<=i/2;j++)
            {
                if(i%j==0)
                {
                    isprime=0;
                    break;
                }
            }
            if(isprime==1)
            {
                printf("%d",i);
            }
        }
    } 
    
}