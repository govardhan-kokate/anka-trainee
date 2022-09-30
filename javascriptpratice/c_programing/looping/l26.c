//. Write a C program to check whether a number is Prime number or not
#include<stdio.h>
void main()
{
    int n,count=0,rem,i=1;
    printf("enter the number");
    scanf("%d",&n);

    while(i<=n)
    {
        rem=n%i;
        if(rem==0)
        {
            count++;
        }
        i++;
    }
    if(count==2)
    {
        printf("prime");
    }
    else
    {
        printf("not prime");
    }
    
}