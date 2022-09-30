//. Write a C program to find sum of all natural numbers between 1 to n.
#include<stdio.h>
void main()
{
    int n,sum=0;
    printf("enter the number");
    scanf("%d",&n);
    while(n>0)
    {
        sum=sum+n;
        n--;
    }
    printf("sum of all naural number is %d",sum);
}