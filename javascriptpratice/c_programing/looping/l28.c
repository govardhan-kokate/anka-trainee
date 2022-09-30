// Write a C program to find sum of all prime numbers between 1 to n.
#include<stdio.h>
void main()
{
    int n,count,rem,i,j,sum;
    printf("enter the number");
    scanf("%d",&n);
 for(j=1;j<=n;j++)
 {
   count=0;
   for(i=1;i<=j;i++)
   {
    rem=j%i;
    if(rem==0)
    {
       count++;

    }  
   }
  if(count==2)
   {
       printf("%d\n",j);
       sum=sum+j;
   }
 }
 printf("%d",sum);
}