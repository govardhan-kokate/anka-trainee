//15) Write a program in C to find the ceiling in a sorted array?

#include<stdio.h>
void main()
{
    int i,a[10],n,p,x;
    for(i=0;i<10;i++)
    {
        scanf("%d",&a[i]);
    }
    printf("array\n");
    for(i=0;i<10;i++)
    {
        printf("%d\n",a[i]);
    }

    printf("enter the number");
    scanf("%d",&n);

    for(i=0;i<10;i++)
    {
        
        if(a[i]>n)
        {
          printf("celling=%d\nfloor=%d",a[i],a[i-1]);
          break;
        

        }
    }
}