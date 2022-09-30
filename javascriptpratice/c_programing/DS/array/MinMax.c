#include<stdio.h>
void main()
{
    int n,i;
    printf("enter the size of array\n");
    scanf("%d",&n);

    int a[n];

    printf("enter the array element \n");
    for(i=0;i<n;i++)
    {
      scanf("%d",&a[i]);
    }

      for(i=0;i<n;i++)
    {
        printf("%d\t",a[i]);
    }

    int Max=a[0];
    int Min=a[0];

    for(i=0;i<n;i++)
    {
      if(a[i]>Max)
      {
          Max=a[i];
      }
      if(a[i]<Min)
      {
          Min=a[i];
      }
    }

    printf("\nMax= %d\nMin= %d",Max,Min);
}