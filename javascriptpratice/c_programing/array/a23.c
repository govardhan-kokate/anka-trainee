//23) Write a program in C to move all zeroes to the end of a given array.
#include<stdio.h>
void main()
{
    int i,a[8],temp,j;
    for(i=0;i<8;i++)
    {
        scanf("%d",&a[i]);
    }
    printf("array\n");
    for(i=0;i<8;i++)
    {
        printf("%d\n",a[i]);
    }

    for(i=0;i<8;i++)
    {
        if(a[i]==0)
        {
            temp=a[i];
            for(j=i;j<8;j++)
            {
               a[j]=a[j+1];
            }
            a[7]=temp;
        }
    }
    printf("sorted array\n");
    for(i=0;i<8;i++)
    {
        printf("%d\n",a[i]);
    }


}