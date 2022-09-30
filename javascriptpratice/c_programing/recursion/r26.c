//26. Write a C program to check whether a number is Prime number or not
#include<stdio.h>
void main()
{
    void prime(int,int,int);
    int n,i=2,c=1;
    printf("enter the number ");
    scanf("%d",&n);
    prime(n,i,c);
}

void prime(int n,int i,int c)
{
    while(i<n)
    {
  int rem=n%i;
if(rem!=0)
{
    prime(n,++i,c);
}
else
{
    printf("number is not prime");

}
    }



}