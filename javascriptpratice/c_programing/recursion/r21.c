//21.Write a C program to calculate sum of digits of a number
#include<stdio.h>
void main()

{    int size,n,i=1,min,rem=0,c=0;
    int sumdigit(int,int,int);
    printf("enter the size");
    scanf("%d",&n);
   int temp= sumdigit(n,c,rem);
    printf("some of digit=%d",temp);


}

int sumdigit(int n,int c,int rem)
{ 
   while(n!=0)
   {
     int p=n%10;
     n=n/10;
     rem=rem+p;
     sumdigit(n,c,rem);
  
   }
   return rem;
     
  
}