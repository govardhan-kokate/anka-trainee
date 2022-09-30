// Write a C program to find power of a number using for loop.

#include<stdio.h>
void main()
{
    int base,exp,pow=1,temp;
    printf("enter the base");
    scanf("%d",&base);
    printf("enter exponet");
    scanf("%d",&exp);
    temp=exp;
    while(exp!=0)
    {
     pow=pow*base;
     exp--;
    }
    exp=temp;
    printf("%d power of %d is %d",base,exp,pow);
}