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
   int temp=a[0];

    for(i=0;i<n;i++)
    {
        a[i]=a[i+1];

    }
    a[n-1]=temp;
printf("\nafter rotating \n");
     for(i=0;i<n;i++)
    {
        printf("%d\t",a[i]);
    }
}