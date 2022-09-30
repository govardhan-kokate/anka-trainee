// Write a C program to check whether a number is Strong number or not.
//digit factorial sum == number
#include<stdio.h>
void main()
{
    int n,rem,sum=0,fac=1,temp;
    printf("enter the number");
    scanf("%d",&n);
     temp=n;
     
     while(n!=0)
     {
         rem=n%10;
         n=n/10;
         fac=1;
         while(rem!=0)
         {
             fac=fac*rem;
             rem--;
         }
         sum=sum+fac;
         
     }
     n=temp;
     if(sum==n)
     {
        printf("number is strong");
     }
     else
     {
         printf("number not strong");
     }
     
}
