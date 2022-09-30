//30.Write a C program to calculate factorial of a number.
#include<stdio.h>
void main()
{
    int fact(int,int);
    int n,sum=1;
    printf("enter the number \n");
    scanf("%d",&n);
    int temp=  fact(n,sum);
    printf("%d is the factorial of %d",temp,n);
}

int fact(int n,int sum)
{
    if(n>0)
    {
        sum=sum*n;
        fact(--n,sum);
    }
    else
    {
        return sum;
    }
    
}