//Write a C program to check whether a number is palindrome or not.

#include<stdio.h>
void main()
{
    int n,rev,rem,temp;
    printf("enter the number ");
    scanf("%d",&n);
    temp=n;
    while(n!=0)
    {
        rem=n%10;
        n=n/10;
        rev=rev*10+rem;
    }

   n=temp;
    if(rev==n)
    {
        printf("number is palimdrom");
    }
    else{
        printf("not palimdrom");
    }
}