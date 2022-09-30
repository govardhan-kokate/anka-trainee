#include<stdio.h>
void main()
{
      int n,i;
    printf("enter the size of array\n");
    scanf("%d",&n);

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

      i=0;
      while(i<n)
      {printf("array element are\n");
         if(a[i]!=i+1)
         {
             int swap=a[i];
             a[i]=a[i+1];
             a[i+1]=swap;
         }
         else
         i++;
      }
      for(i=0;i<n;i++)
      {
          if(a[i]!=i+1)
          {
              printf("%d is missing\n %d is duplicate",i+1,a[i]);
          }
      }
}