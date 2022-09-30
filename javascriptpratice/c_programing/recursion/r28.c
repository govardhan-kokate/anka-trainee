//28.Write a C program to find power of a number using for loop
#include<stdio.h>
void main()
{
    void power(int,int,int);
    int base,index, p=1;
    printf("enter base and index");
    scanf("%d%d",&base,&index);
     power(base,index,p);
}
void power(int b,int i,int p)
{
    if(i>0)
    {
        p=p*b;
      power(b,--i,p);

    }
    else
    {
        printf("power of number is=%d",p);
    }
    
}