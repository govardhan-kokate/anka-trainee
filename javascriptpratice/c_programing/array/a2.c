//2) WAP to enter the five elements in array and find out the maximum and minimum element
#include<stdio.h>
void main()
{
  int i,max,min,a[5];
   for(i=0;i<5;i++)
   {
     scanf("%d",&a[i]);
   }
   printf("array");
   for(i=0;i<5;i++)
   {
     printf("%d\n",a[i]);
   }
   //logic for min max
    max=0;
    min=999;
   for(i=0;i<5;i++)
   {
    
     if(a[i]>max)
     {
       max=a[i];
     }
    
     if(a[i]<min)
     {
       min=a[i];
     }
   }
         printf("max is %d\nmin is %d",max,min);
}