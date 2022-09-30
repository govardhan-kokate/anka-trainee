// Write a C program to check whether a number is Perfect number or not.
#include<stdio.h>
void main()
{
    int n,i=1,rem,sum=0,temp;
    printf("enter the number");
    scanf("%d",&n);
    temp=n;
    while(i<n)
    {
      rem=n%i;
      if(rem==0)
      {
          sum=sum+i;
      }
      i++;
    }
    n=temp;
    if(sum==n)
    {
        printf("number is perfect");
    }
    else
    {
        printf("not perfect");
    }
    
}