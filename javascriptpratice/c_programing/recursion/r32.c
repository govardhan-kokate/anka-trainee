//32.Write a C program to find LCM of two numbers      
#include<stdio.h>
void main()
{
    int gcd(int,int,int,int);
    int n1,n2,x,y;
    printf("enetr the numbers");
    scanf("%d%d",&n1,&n2);
    x=n1;
    y=n2;
    int temp=gcd(n1,n2,x,y);
}

int gcd(int n1,int n2,int x,int y)
{
    if(n1!=n2)
{
    if(n1<n2)
    {
        n1=n1+x;   
    }
    else
    {  
        n2=n2+y;
    }
     gcd(n1,n2,x,y);
}else
       printf("%d is lcm",n2);
       
}