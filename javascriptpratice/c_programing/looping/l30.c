//0. Write a C program to check whether a number is Armstrong number or not
#include<stdio.h>
void main()
{
    int i,n,pow,sum=0,rem,val,count=0,temp,d;
    printf("enter the number");
    scanf("%d",&n);
    temp=n;
    //find digit
    while(n!=0)
    {   rem=n%10;
        n=n/10;
        count++;
    }
    n=temp;
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
     if(sum==temp)
     {
         printf("%d is amstrong",temp);
     }
     else
     {
         printf("%d not amstrong",temp);
     }
     
}
