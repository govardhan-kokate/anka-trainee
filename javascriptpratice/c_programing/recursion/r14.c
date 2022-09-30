//14.Write a C program to find sum of all even numbers between 1 to n.
#include<stdio.h>
void main()

{    int size,n,i=1,min,rem=0,c=1;
    int sumeven(int,int,int);
    printf("enter the size");
    scanf("%d",&n);
   int temp= sumeven(n,c,rem);
    printf("sum of even number=%d",temp);


}

int sumeven(int n,int c,int rem)
{ 
   while(c<=n)
   {
    if(c%2==0)
    {
        rem=rem+c;
        sumeven(n,++c,rem);
    
    }
    else
    {
          sumeven(n,++c,rem);
    

    }
   
   }
    return rem;
  
}