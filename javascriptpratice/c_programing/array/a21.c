//21) Write a program in C to find if a given integer x appears more than n/2 times in a sorted array
//of n integers ?
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

    //logic
    int x,count=0;
    printf("enter the number ");
    scanf("%d",&x);

    for(i=0;i<5;i++)
    {
        if(x==a[i])
        {
            count++;
        }

    }
    printf("count of %d is %d",x,count);
}