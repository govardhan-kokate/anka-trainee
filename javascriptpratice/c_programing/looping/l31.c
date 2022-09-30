 //. Write a C program to print all Armstrong numbers between 1 to n.

#include<stdio.h>
void main()
{
    int i,n,sum=0,rem,val,count=0,temp,m,j;
    printf("enter the number");
    scanf("%d",&m);
    printf("Amstrong number between 1 to %d\n",m);
   for(j=1;j<=m;j++)
   {
    n=j;
   
    count=0;
    while(n!=0)
    {   rem=n%10;
        n=n/10;
        count++;
    }
    n=j;
    sum=0;
     while(n!=0)
     {
        rem=n%10;
        n=n/10;
          val=1;
          for(i=1;i<=count;i++)
           {
              val=val*rem;
           }
        sum=sum+val;    
     }


        if(sum==j)
          {
           printf("%d\n",sum);
          }     
   }
}
