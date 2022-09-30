//16.Write a C program to print multiplication table of any number.
#include<stdio.h>
void main()

{    int size,n,i=1,min,rem=0,c=1;
    int table(int,int,int);
    printf("enter the size");
    scanf("%d",&n);
   int temp= table(n,c,rem);



}

int table(int n,int c,int rem)
{ 
   while(c<=10)
   {
     rem=n*c;
     printf("%d\n",rem);
     table(n,++c,rem);
     break;
  
   }
     
  
}