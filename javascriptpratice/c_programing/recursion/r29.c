//9.Write a C program to find all factors of a number
#include<stdio.h>
void main()
{
    int n,i=1;
    void fact(int,int);   
    printf("enter the number\n");
    scanf("%d",&n);
    fact(n,i);
 
}
void fact(int n,int i)
{
    if(i<n)
    {
     int rem=n%i;
    if(rem==0)
    {
        printf("%d\n",i);
        fact(n,++i);
    }
    else
    {
        fact(n,++i);
    }
    }
    
}