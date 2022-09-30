//11). Write a program in C to find the second largest element in an ar
#include<stdio.h>
void main()
{
    int i,a[5],max1,max2;
    for(i=0;i<5;i++)
    {
        scanf("%d",&a[i]);
    }
    printf("array\n");
    for(i=0;i<5;i++)
    {
        printf("%d\n",a[i]);
    }

    //logic for second largest element in array
        max1=a[0];
     for(i=0;i<5;i++)
     {
         if(a[i]>max1)
         {
             max2=max1;
             max1=a[i];
         }
     }
     printf("second largest element in array is %d",max2);


}