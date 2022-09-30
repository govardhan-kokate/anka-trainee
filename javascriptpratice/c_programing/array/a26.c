/*
26) Write a program in C to count all distinct pairs for a specific difference
Expected Output:
The given array is:
5 2 3 7 6 4 9 8
The distinct pairs for difference 5 are: [7, 2] [8, 3] [9, 4]
Number of distinct pairs for difference 5 are: 3*/
#include<stdio.h>
void main()
{
    int i,a[8],j,diff,max=0,n1,n2,count=0,num;
    for(i=0;i<8;i++)
    {
        scanf("%d",&a[i]);
    }
    printf("array\n");
    for(i=0;i<8;i++)
    {
        printf("%d\n",a[i]);
    }
//logic
   printf("enter diff");
   scanf("%d",&num);
    for(i=0;i<8;i++)
    {
        for(j=0;j<8;j++)
        {
           diff=a[i]-a[j];
           if(diff==num)
           {
               count++;
               printf("(%d %d)",a[i],a[j]);
           }
        }
    }
    printf("\nNumber of distinct pairs for difference %d are: %d",num,count);
}