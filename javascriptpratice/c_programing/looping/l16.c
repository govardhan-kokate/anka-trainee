//. Write a C program to enter a number and print its reverse.
#include<stdio.h>
void main()
{
    int n,rev,rem;
    printf("enter the number ");
    scanf("%d",&n);

    while(n!=0)
    {
        rem=n%10;
        n=n/10;
        rev=rev*10+rem;
    }
    printf("rever number is %d",rev);
}