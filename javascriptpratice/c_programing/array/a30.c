/*30) Write a program in C to find the minimum distance between two numbers in a given array.
Expected Output:
The given array is:
7 9 5 11 7 4 12 6 2 11
The minimum distance between 7 and 11 is: 1
*/
#include<stdio.h>
void main()
{
    int i,a[5],j,min=999,n1,n2;
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

unsigned int p;
    for(i=0;i<5;i++)
    {
        for(j=0;j<5;j++)
        {
            if(i!=j)
            {
            p=a[i]-a[j];
            if(p<min)
            {
                min=p;
                n1=a[i];
                n2=a[j];
            }
            }

        }
    }
    printf("min diff between num is %d %d diff is %d",n1,n2,min);

}