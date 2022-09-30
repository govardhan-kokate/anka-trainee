/*25) Write a program in C to find out the maximum difference between any two elements such that
larger element appears after the smaller number.*/
#include<stdio.h>
void main()
{
    int i,a[5],j,diff,max=0,n1,n2;
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
           diff=a[i]-a[j];
           if(diff>max)
           {
               max=diff;
               n1=a[i];
               n2=a[j];
           }
        }
    }
    printf("%d and %d is the number who diff is big %d",n1,n2,max);
}