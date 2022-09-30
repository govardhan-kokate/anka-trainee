/*
27) Write a program in C to find the maximum repeating number in a given array.
The array range is [0..n-1] and the elements are in the range [0..k-1] and k<=n..
Expected Output:
The given array is:
2 3 3 5 3 4 1 7 7 7 7
The maximum repeating number is: 7
*/
#include<stdio.h>
void main()
{
    int i,a[8],j,count,n,max;
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
    for(i=0;i<8;i++)
    {count=0;
        for(j=0;j<8;j++)
        {
            if(a[i]==a[j])
            {
                count++;
            }   
        }
        if(count>max)
        {
            max=count;
            n=a[i];
        }
    }
    printf("max number is %d",n);

}