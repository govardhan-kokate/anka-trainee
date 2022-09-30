#include<stdio.h>
void main()
{
       int n,i,m,j,k;
    printf("enter the size of array\n");
    scanf("%d%d",&n,&m);

    int a[n];
    int b[m];
    printf("enter the frist element of array\n");
    for(i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
    }
    printf("array element are\n");

    for(i=0;i<n;i++)
    {
        printf("%d\t",a[i]);
    }

     printf("\nenter the second element of array\n");
    for(i=0;i<m;i++)
    {
        scanf("%d",&b[i]);
    }
    printf("array element are\n");

    for(i=0;i<m;i++)
    {
        printf("%d\t",b[i]);
    }


    for(i=0;i<n;i++)
    {
        if(a[i]>b[0])
        {
            int temp=a[i];
            a[i]=b[0];
            b[0]=temp;
        }
        for(k=0;k<m-1;k++)
        {
            if(b[k]>b[k+1])
            {
              int  temp=b[k];
                b[k]=b[k+1];
                b[k+1]=temp;
            }
        }
         for(k=0;k<n-1;k++)
        {
            if(a[k]>a[k+1])
            {
              int  temp=a[k];
                a[k]=a[k+1];
                a[k+1]=temp;
            }
        }

    }
     printf("\nfinal array element are\n");
     for(i=0;i<n;i++)
    {
        printf("%d\t",a[i]);
    }
     for(i=0;i<m;i++)
    {
        printf("%d\t",b[i]);
    }

}