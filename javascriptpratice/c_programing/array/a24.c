//24) Write a program in C to count the number of inversion in a given array#include<stdio.h>
#include<stdio.h>
void main()
{
    int i,a[5],j;
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

    for(i=0;i<5;i++)
    {
        for(j=i+1;j<5;j++)
        {
            if(a[i]>=a[j])
            {
                printf("(%d %d)",a[i],a[j]);
            }
        }

    }
}