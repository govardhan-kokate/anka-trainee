//23.Write a C program to enter a number and print its reverse.
#include<stdio.h>
void main()

{    int size,n,i=1,min,rem=1,c=0;
    int revdigit(int,int,int);
    printf("enter the size");
    scanf("%d",&n);
   int temp= revdigit(n,c,rem);
    


}

int revdigit(int n,int c,int rem)
{ 
   while(n!=0)
   {
     int p=n%10;
     n=n/10;
     printf("%d",p);
     revdigit(n,c,rem);
     break;
  
   }

     
  
}