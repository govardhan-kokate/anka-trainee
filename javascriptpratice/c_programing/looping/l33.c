//. Write a C program to print all Perfect numbers between 1 to n.
#include<stdio.h>
void main()
{
    int n,i=1,rem,sum=0,temp,j,m;
    printf("enter the number");
    scanf("%d",&m);
    printf("perfect number between 1 to %d\n",m);
 for(j=1;j<=m;j++)
 {
    n=j;

   sum=0;
   i=1;
    while(i<n)
    {
      
      if(n%i==0)
      {
          sum=sum+i; 
    
                  
      }
     i++;   
    }
    
    if(sum==j)
    {
        printf("%d\n",j);
    }
 }
    
}
  