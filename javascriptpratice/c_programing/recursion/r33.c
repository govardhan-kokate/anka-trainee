//33.Write a C program to check whether a number is Prime number or not.
#include<stdio.h>
void main()
{
    void prime(int,int,int);
    int n,i=2,flag=0;
    printf("enter the number");
    scanf("%d",&n);
    prime(n,i,flag);

}
void prime(int n,int i,int flag)
{
    if(i<n)
    {
        if(n%i==0)
        {
            flag=1;
        }
        else
        {
            prime(n,++i,flag);
        }
        
    }
  else  if(flag==1)
    {
        printf("not prime");
    }
    else
    {
        printf("number is prime");
    }
    
    
}