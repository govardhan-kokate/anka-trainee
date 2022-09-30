//22.Write a C program to calculate product of digits of a number.
#include<stdio.h>
void main()

{    int size,n,i=1,min,rem=1,c=0;
    int prodigit(int,int,int);
    printf("enter the size");
    scanf("%d",&n);
   int temp= prodigit(n,c,rem);
    printf("product of digit=%d",temp);


}

int prodigit(int n,int c,int rem)
{ 
   while(n!=0)
   {
     int p=n%10;
     n=n/10;
     rem=rem*p;
     prodigit(n,c,rem);
  
   }
   return rem;
     
  
}