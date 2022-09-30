//18.Write a C program to find first and last digit of a number.
#include<stdio.h>
void main()

{    int size,n,i=1,min,rem=0,c=0;
    int swap(int,int,int);
    printf("enter the size");
    scanf("%d",&n);
   int temp= swap(n,c,rem);
    printf("count=%d",temp);


}

int swap(int n,int c,int rem)
{ 
    int temp=n,frist,last;
    while(n!=0)
    {
        c=c*10;
        n=n/10;
    }
    n=temp;
   
   
     frist=n/c;
     last=n%10;
    
    printf("frist=%d\nlast=%d",frist,last);
  
   
     
  
}