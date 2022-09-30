// Write a C program to find first and last digit of a number
#include<stdio.h>
void main()
{
    int n,frist,last,count=1,temp;
    printf("enter the number");
    scanf("%d",&n);
    temp=n;
    while(n!=0)
    {
        count=count*10;
        n=n/10;
    }
    count=count/10;
    n=temp;
    frist=n/count;
    last=n%10;
    printf("frist %d \n last %d",frist,last);

}