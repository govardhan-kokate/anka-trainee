#include<stdio.h>
void main()
{
    int i,a[6],n,j,p,end;
    for(i=0;i<6;i++)
    {
        scanf("%d",&a[i]);
    }
    printf("array\n");
    for(i=0;i<6;i++)
    {
        printf("%d\t\n",a[i]);
    }

    //logic
    for(i=0;i<6;i++)
    {
        n=a[i];
        for(j=i;j<6;j++)
        {
            if(a[j]>n)
            {
                printf("N B E of %d is %d\n",n,a[j]);
                break;
            }
        }
        end=6-1;
        p=-1;
        if(n==a[end])
        {
            printf("N B E of %d is %d",n,p);
        }
    }
}