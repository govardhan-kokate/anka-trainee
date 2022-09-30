#include<stdio.h>
void main()
{
    int n,i;
    printf("enter the size of array\n");
    scanf("%d",&n);
     int a[n];
    printf("enter the element\n ");
    for(i=0;i<n;i++)
    {
     scanf("%d",&a[i]);   
    }
     int minip=__INT_MAX__;
     int maxp=0;
     int b,s;
    for(i=0;i<n;i++)
    {
        if(a[i]<minip)
        {
            minip=a[i];
            b=i;
        }
        else if(a[i]-minip>maxp)
        {
            maxp=a[i]-minip;
            s=i;
        }
    }

    printf("maximum profit well happen when we buy stock at %d and sell it at %d",b,s);
}