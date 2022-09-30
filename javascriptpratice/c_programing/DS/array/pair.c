#include<stdio.h>
void main()
{
    int n,i,k;

    printf("nter the size of array\n");
    scanf("%d",&n);
    printf("enter k");
    scanf("%d",&k);
    int a[n];
    printf("enetr the elemnt \n");
    for(i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
    }


    for(i=0;i<n;i++)
    {
        for(int j=i+1;j<n;j++)
        {
            if(a[i]+a[j]==k)
            {
                printf("(%d %d),",a[i],a[j]);
            }
        }
    }
}