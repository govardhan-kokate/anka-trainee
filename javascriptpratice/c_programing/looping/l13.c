//. Write a C program to swap first and last digits of a number.
#include<stdio.h>
#include<math.h>
void main()
{
    int n,frist,last,no,temp,rem,count=1,p,p1;
    printf("enter number ");
    scanf("%d",&n);
    temp=n;

//find  how many digit in number 
    while(n!=0)
    {
     count=count*10;
     n=n/10;
    }
    count=count/10;
    n=temp;
//find last digit
    last=n%10;                    //1234%10=4
    last=last*count;             //4*1000=4000
//find frist digit
    frist=n/count;               //1234/1000=1
//find middle digits
    count=count/10;             //100
    no=n/10;                    //1234/10=123
    no=no%count;               //123%100=23
    no=no*10;                  //23*10=230
    no=last+frist+no;       
    printf("swaping of last and frist digit %d",no);
}