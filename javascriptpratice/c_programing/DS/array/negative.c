#include<stdio.h>
void main()
{
      int n,i,k;
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
    

    for(i=0;i<n;i++)
    {int mid=0,low=0,high=n-1;   
    while(mid<=high)
    {
        if(a[mid]>0)
        {
            int temp=a[mid];
            a[mid]=a[low];
            a[low]=temp;
            mid++;
            low++;
        }
    
        else
        mid++;
    }
    }

     printf("sortedarray");
     for(int i=0;i<n;i++)
    {
        printf("%d\t",a[i]);
    }
}