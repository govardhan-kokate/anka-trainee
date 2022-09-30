#include<stdio.h>
void main()
{
    int n,m,cm;
    printf("enter the number");
    scanf("%d",&n);

    m=n*1000;
    cm=n*100000;
    printf("%d km is equal to %dm and %dcm",n,m,cm);
}