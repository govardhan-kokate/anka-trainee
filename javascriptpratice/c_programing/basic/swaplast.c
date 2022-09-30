#include<stdio.h>
void main()
{
    int n;
    printf("enter the number");
    scanf("%d",&n);
     n=((n%10)*1000)
     +(((n/100)%10)*100)
     +(((n/10)%10)*10)
     +(n/1000);
     printf("%d",n);
}