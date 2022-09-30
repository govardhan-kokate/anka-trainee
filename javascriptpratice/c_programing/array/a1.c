//1) WAP to enter the five elements in array and show it
#include<stdio.h>
void main()
{
    int i,a[5];
    for(i=0;i<5;i++)
    {
        scanf("%d",&a[i]);
    }
    printf("array\n");
    for(i=0;i<5;i++)
    {
        printf("%d\n",a[i]);
    }
}