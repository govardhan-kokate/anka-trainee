//. Write a C program to calculate factorial of a number.
#include<stdio.h>
void main()
{
    int n,sum=1,temp;
    printf("enter number");
    scanf("%d",&n);
    temp=n;
    while(n!=0)
    {
        sum=sum*n;
        n--;
    }
    n=temp;
    printf("factorial of %d is %d",n,sum);
}