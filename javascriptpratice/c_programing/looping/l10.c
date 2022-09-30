// Write a C program to count number of digits in a number.
#include<stdio.h>
void main()
{
    int n,rem,count=0;
    printf("enter the number");
    scanf("%d",&n); 
    while(n!=0)
    {
        rem=n%10;
        n=n/10;
        count++;
    }
    printf("no of digit %d",count);
}