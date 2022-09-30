// Write a C program to calculate product of digits of a number.
#include<stdio.h>
void main()
{
    int n,rem,sum=1;
    printf("enter the number");
    scanf("%d",&n);
    while(n!=0)
    {
        rem=n%10;
        n=n/10;
        sum=sum*rem;
    }
    printf("sum of the number is %d",sum);
}