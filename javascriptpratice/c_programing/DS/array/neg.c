#include<stdio.h>
#include<stdlib.h>
void main()
{
    int n,i,j;
    printf("enter the size of array");
    scanf("%d",&n);
    int a[n];
    printf("enter the elemrnt");
    for(i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
    }

    i=0,j=n-1;
    while(i<j)
    {
        if(a[i]<0&&a[j]>0)
        {
        
            int temp=a[i];
            a[i]=a[j];
            a[j]=temp;
            i++;
            j--;
        }
        else if(a[i]>0&&a[j]<0)
        {
            i++;
            j--;
        }
        else if(a[i]>0)
        {
            i++;
        }
        else if(a[j]<0)
        {
            j--;
        }
    }

    if(i==0&&i==n)
    {
        printf("there is no need to swap");
    }
    else
    {
          int k=0;
          while(i<n&&k<n)
          {
              int temp=a[k];
              a[k]=a[i];
              a[i]=temp;
              k=k+2;
              i++;
          }
    }

    printf("after sorting ");
    for(i=0;i<n;i++)
    {
        printf("%d\t",a[i]);
    }
}
