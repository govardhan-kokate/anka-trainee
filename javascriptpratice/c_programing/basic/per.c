#include<stdio.h>
void main()
{
   int a,b,c,d,e,per;
   printf("enter marks");
   scanf("%d%d%d%d%d",&a,&b,&c,&d,&e);
    per=(a+b+c+d+e)/5;

    if(per<=100 && per>80)
    {
       printf("destiction");
    }
    else if(per<=80 && per>60)
    {
       printf("frist class");
    }
    else if(per<=60 && per>=50)
    {
       printf("second class");
    }
    else if(per < 40)
    {
       printf("failed");
    }
    }