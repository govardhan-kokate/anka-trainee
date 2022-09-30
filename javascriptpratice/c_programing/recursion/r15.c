//15.Write a C program to find sum of all odd numbers between 1 to n.
#include<stdio.h>
void main()

{    int size,n,i=1,min,rem=0,c=1;
    int sumodd(int,int,int);
    printf("enter the size");
    scanf("%d",&n);
   int temp= sumodd(n,c,rem);
    printf("sum of even number=%d",temp);


}

int sumodd(int n,int c,int rem)
{ 
   while(c<=n)
   {
    if(c%2!=0)
    {
        rem=rem+c;
      
        sumodd(n,++c,rem);
    }
    else
    { 
          sumodd(n,++c,rem);
    

    }
     
  
   }
     return rem;
  
}