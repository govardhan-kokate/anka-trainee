//14) Write a program in C to rotate an array by N positions ?
#include<stdio.h>
void main()
{
    int i,j,a[10],n,temp,swap;

    for(i=0;i<10;i++)
    {
        scanf("%d",&a[i]);
    }
    printf("array\n");
    for(i=0;i<10;i++)
    {
        printf("%d\n",a[i]);
    }

    //logic
    int index;
  printf("enter index");
  scanf("%d",&n);
    for(i=0;i<n;i++)
    {temp=a[0];
        for(j=0;j<10;j++)
        {
          a[j]=a[j+1];
        }
        a[9]=temp;
    }
     printf("rotated array\n");
    for(i=0;i<10;i++)
    {
        printf("%d\n",a[i]);
    }

}