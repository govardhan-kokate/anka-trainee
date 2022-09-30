//3)WAP to enter the five element and display in ascending order ?
#include<stdio.h>
void main()
{
    int i,temp,a[5],j;
    for(i=0;i<5;i++)
    {
        scanf("%d",&a[i]);
    }
    printf("array");
    for(i=0;i<5;i++)
    {
        printf("%d\n",a[i]);
    }
    //logic for the accending
    for(i=0;i<5;i++)
    {
        for(j=i;j<5;j++)
        {
            if(a[i]>a[j])
            {
              temp=a[i];
              a[i]=a[j];
              a[j]=temp;
            }
        }
    }
    printf("array by accending order\n");
     for(j=0;j<5;j++)
    {
        printf("%d\n",a[j]);
    }
}