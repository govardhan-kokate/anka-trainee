//20) Write a program in C to find a subarray with given sum from the given array?

#include<stdio.h>
void main()
{
    int i,a[8],start,end;
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
    
    printf("enter the starting and ending index");
    scanf("%d%d",&start,&end);
    printf("{%d...%d}->",start,end);
    for(i=start;i<end;i++)
    {
      printf("%d\t",a[i]);
    }

}