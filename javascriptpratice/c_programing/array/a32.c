/*
32)Write a program in C to find the maximum for each and every contigious subarray of size k
from a given array.
Expected Output:
The given array is:
1 3 6 21 4 9 12 3 16 10
The length of each subarray is: 4
The contagious subarray of length 4 and their maximum value are:
1 3 6 21 ----> 21
3 6 21 4 ----> 21
6 21 4 9 ----> 21
21 4 9 12 ----> 21
4 9 12 3 ----> 12
9 12 3 16 ----> 16
12 3 16 10 ----> 16
*/
#include<stdio.h>
void main()
{
    int i,a[10],max=0,j;
    for(i=0;i<10;i++)
    {
        scanf("%d",&a[i]);
    }
    printf("array\n");
    for(i=0;i<10;i++)
    {
        printf("%d\n",a[i]);
    }

    //logic

    for(i=0;i<10-4;i++)
    {max=0;
        for(j=i;j<i+4;j++)
        {
            if(a[j]>max)
            {
                max=a[j];
            }
        }
        for(j=i;j<4+i;j++)
        {
           printf("%d\t",a[j]);
        }
        printf("-->%d\n",max);
    }
}