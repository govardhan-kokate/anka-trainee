#include<stdio.h>

void sort012(int [],int);
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
    sort012(a,n);
     printf("sortedarray");
     for(int i=0;i<n;i++)
    {
        printf("%d\t",a[i]);
    }
    
}

void sort012(int a[],int n)
{
     int low=0,high=n-1,mid=0,swap;

     while(mid<=high)
     {
         switch (a[mid])
         {
         case 0:
             swap=a[mid];
             a[mid]=a[low];
             a[low]=swap;
             low++;
             mid++;
             break;
         case 1:
             mid++;
         break;
         case 2:
            swap=a[mid];
            a[mid]=a[high];
            a[high]=swap;
            high--;
            break;
         }
     }

}