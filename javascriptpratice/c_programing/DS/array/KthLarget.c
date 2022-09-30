#include<stdio.h>
void main()
{
    int n,i,k;
    printf("enter the size of array\n");
    scanf("%d",&n);
    printf("enter the k th elwment\n");
    scanf("%d",&k);

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

    //sort array accending order

    for(i=0;i<n;i++)
    {
        for(int j=0;j<n;j++)
        {
            if(a[i]<a[j])
            {
                int temp=a[i];
                a[i]=a[j];
                a[j]=temp;
            }
        }

    }
    printf("\narray accending order\n");
      for(i=0;i<n;i++)
    {
        printf("%d\t",a[i]);
    }

    printf("\n%dth largest element is %d \n %dth smallest element is %d",k,a[n-k],k,a[k-1]);
}