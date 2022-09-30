// Write a C program to find HCF (GCD) of two numbers.
#include<stdio.h>
void main()
{
    int n1,n2;
    printf("enter number");
    scanf("%d%d",&n1,&n2);
    while(n1!=n2)
    {
        if(n1>n2)
        {
            n1=n1-n2;
            printf("%d\n",n1);
        }
        else
        {
            n2=n2-n1;
            printf("%d\n",n2);
        }
    }
    printf("GCD =%d",n1);
}