//. Write a program in C to merge two arrays of same size sorted in decending order

#include<stdio.h>
void main()
{
    int i,a[3],b[3],c[6],j,index;
 //frist array
    for(i=0;i<3;i++)
    {
        scanf("%d",&a[i]);
    }
    printf("frist array\n");
    for(i=0;i<3;i++)
    {
        printf("%d\n",a[i]);
    }
//second array
       for(i=0;i<3;i++)
    {
        scanf("%d",&b[i]);
    }
    printf("second array\n");
    for(i=0;i<3;i++)
    {
        printf("%d\n",b[i]);
    }
 //logic
   for(i=0;i<3;i++)
   {
       c[i]=a[i];
       index++;
   }
   for(j=index,i=0;j<6;j++,i++)
   {
       c[j]=b[i];
   }
//print array
  printf("revers\n");
    for(j=0;j<6;j++)
    {
        printf("%d\n",c[j]);
    }

}