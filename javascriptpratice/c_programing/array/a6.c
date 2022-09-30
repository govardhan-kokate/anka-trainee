//6).WAP to enter the five element in array and reverse it ?
#include<stdio.h>
void main()
{
    int i,j,temp,a[5],mid,end;
    for(i=0;i<5;i++)
    {
        scanf("%d",&a[i]);
    }
    for(i=0;i<5;i++)
    {
        printf("%d\n",a[i]);
    }

    //logic for revers
    mid=5/2;
    end=5-1;

    for(i=0;i<=mid;i++)
    {
        temp=a[i];
        a[i]=a[end];
        a[end]=temp;
        end--;
    }
      for(i=0;i<5;i++)
    {
        printf("%d\n",a[i]);
    }


}