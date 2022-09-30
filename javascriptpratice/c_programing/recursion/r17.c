//17.Write a C program to count number of digits in a number.
#include<stdio.h>
void main()

{    int size,n,i=1,min,rem=0,c=0;
    int count(int,int,int);
    printf("enter the size");
    scanf("%d",&n);
   int temp= count(n,c,rem);
    printf("count=%d",temp);


}

int count(int n,int c,int rem)
{ 
   while(n!=0)
   {
     rem=n%10;
     n=n/10;
     c++;
     count(n,c,rem);
  
   }
     
  
}