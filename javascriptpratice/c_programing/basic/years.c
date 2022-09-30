#include<stdio.h>
void main()
{
    int year,week,days,noday;
    printf("enter the number");
    scanf("%d",&noday);

    year= (noday/365);
    week=(noday%365)/7;
    days=(noday%365)%7;
    printf("%ddays=%dyear %dweek %ddays",noday,year,week,days);
}