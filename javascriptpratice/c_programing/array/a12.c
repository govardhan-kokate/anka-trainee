//12) . Write a program in C to find a pair with given sum in the array.
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
        for(j=0;j<5;j++)
        {
               if(a[i]+a[j]==15)
            {
                printf("%d and %d is the index who sum come 15\n",i,j);
            }
        }
    }
}