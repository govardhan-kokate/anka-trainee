
#include<stdio.h>
void main()
{
     int n,i,m,count=0;
    printf("\nenter the size of array\n");
    scanf("%d%d",&n,&m);

    int a[n];
    int b[m];

    printf("\nenter the frist array element \n");
    for(i=0;i<n;i++)
    {
      scanf("%d",&a[i]);
    }

      for(i=0;i<n;i++)
    {
        printf("%d\t",a[i]);
    }
     printf("\nenter the second array element \n");
    for(i=0;i<m;i++)
    {
      scanf("%d",&b[i]);
    }

      for(i=0;i<m;i++)
    {
        printf("%d\t",b[i]);
    }

    for(i=0;i<n;i++)
    {
        for(int j=0;j<m;j++)
        {
            if(a[i]==a[j])
            {
                count++;
            }
        }
    }
    printf("\nlenght of union is %d\n",n+count);
}