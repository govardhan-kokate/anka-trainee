//. Write a C program to find sum of first and last digit of a number.
#include<stdio.h>
void main()
{
    int n,frist,last,count=1,temp,no;
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
    no=frist+last;
    printf("sum of two digit is %d",no);

}