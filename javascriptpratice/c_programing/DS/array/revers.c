#include<stdio.h>
void main()
{
    int n,i;
    printf("enter the size of array\n");
    scanf("%dd",&n);

    int a[n];
    printf("enter the element of array\n");
    for(i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
    }
    printf("array element are\n");

    for(i=0;i<n;i++)
    {
        printf("%d\t",a[i]);
    }

    int mid=n/2;
    int end=n-1;

    for(i=0;i<mid;i++)
    {
        int temp=a[i];
        a[i]=a[end];
        a[end]=temp;
    }
    printf("\nrevers array is \n");

    for(i=0;i<n;i++)
    {
        printf("%d\t",a[i]);
    }
}