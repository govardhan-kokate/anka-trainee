//Write a C program to find all factors of a number
#include<stdio.h>
void main()
{
    int n,rem,i=1;
    printf("enter number ");
    scanf("%d",&n);
    while(i<=n)
    {    rem=n%i; 
        if(rem==0)
        {      
            printf("%d\n",i);
        }
        i++;
    }
}