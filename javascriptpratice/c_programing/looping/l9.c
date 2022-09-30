//. Write a C program to print multiplication table of any number
#include<stdio.h>
void main()
{
    int n,i=1,sum;
    printf("enter number ");
    scanf("%d",&n);
    while(i<=10)
    {
        sum=n*i;
        printf("%d\n",sum);
        i++;
    }
}