/*34)Remove duplicates from unsorted array using Set data structure
Given an unsorted array of integers, print the array after removing the duplicate elements from it.
We need to print distinct array elements according to their first occurrence.
Examples:
Input: arr[] = { 1, 2, 5, 1, 7, 2, 4, 2}
Output: 1 2 5 7 4
*/
#include<stdio.h>
void main()
{
    int i,a[8],j,k,p=8,m=0;
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
    for(i=0;i<p;i++)
    {
        for(j=0;j<i;j++)
        {
            if(a[i]==a[j])
            { 
                for(k=i;k<p;k++)
                {
                    
                    a[k]=a[k+1];
                }
            p--;
            }
        }
    }

    for(i=0;i<8;i++)
    {m++;
        if(a[1]==a[i])
        {
            break;
        }
    }
     printf("array\n");
    for(i=0;i<m;i++)
    {
        printf("%d\n",a[i]);
    }
   
}