//. Write a C program to find sum of all odd numbers between 1 to n.
#include<stdio.h>
void main()
{
    int n,rem=0;
    printf("enter the number");
    scanf("%d",&n);
    while(n>0)
    {
        
        if(n%2!=0)
        {
            rem=rem+n;
        }
        n--;
    }
    printf("sum of odd number is %d",rem);
}