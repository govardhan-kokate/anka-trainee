#include<stdio.h>
void main()
{
    int n,m,i,j;
    printf("enter number of rows and col\n");
    scanf("%d%d",&n,&m);
    int a[n][m];
    printf("enter the element ");
    for(i=0;i<n;i++)
    {
        for(j=0;j<m;j++)
        {
            scanf("%d",&a[i][j]);
        }
    }
    printf("befor rotaed\n");
     for(i=0;i<n;i++)
    {
        for(j=0;j<m;j++)
        {
            printf("%d\t",a[i][j]);
        }
        printf("\n");
    }

      for(i=0;i<n;i++)
    {
        for(j=i;j<m;j++)
        {
            int temp=a[i][j];
            a[i][j]=a[j][i];
            a[j][i]=temp;
        }
    }
    printf("after transvers\n");
      for(i=0;i<n;i++)
    {
        for(j=0;j<m;j++)
        {
            printf("%d\t",a[i][j]);
        }
        printf("\n");
    }

       for(i=0;i<n;i++)
    {
        for(j=0;j<m/2;j++)
        {
            int temp=a[i][j];
            a[i][j]=a[i][n-1-j];
            a[i][n-1-j]=temp;

        }
    }
     printf("after rotated\n");
      for(i=0;i<n;i++)
    {
        for(j=0;j<m;j++)
        {
            printf("%d\t",a[i][j]);
        }
        printf("\n");
    }




}