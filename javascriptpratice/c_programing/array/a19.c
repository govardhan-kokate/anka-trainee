//19) Write a program in C to find two elements whose sum is closest to zero
#include<stdio.h>
void main()
{
    int i,a[10],n1,n2,min=99,j;
    unsigned int p;
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

    for(i=0;i<10;i++)
    {
        for(j=0;j<10;j++)
        {
            p=a[i]+a[j];
            if(p<min)
            {
                min=p;
                n1=a[i];
                n2=a[j];
            }
        }
    }
    printf("pair of element who  sum is min is %d and %d",n1,n2);
}