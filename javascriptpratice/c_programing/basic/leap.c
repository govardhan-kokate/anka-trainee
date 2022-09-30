#include<stdio.h>
void main()
{
    int year,n;
    printf("enter year");
    scanf("%d",&year);
    n=year%4;
    if(n==0)
    {
        printf("year is leap year");
    }
    else
    {
        printf("year is not leap year");
    }
    
}