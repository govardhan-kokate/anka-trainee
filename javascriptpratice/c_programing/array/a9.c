//9) . Write a program in C to separate odd and even integers in separate arrays ?
#include<stdio.h>
void main()
{
    int i,a[5],odd[5],even[5];
    for(i=0;i<5;i++)
    {
        scanf("%d",&a[i]);
    }
    printf("array\n");
    for(i=0;i<5;i++)
    {
        printf("%d\n",a[i]);
    }

    //logic for find odd even
    printf("even\n");
    for(i=0;i<5;i++)
    {
        if(a[i]%2==0)
        {
            even[i]=a[i];
        }
    }
    printf("odd\n");
    for(i=0;i<5;i++)
    {
          if(a[i]%2!=0)
        {
            odd[i]=a[i];
        }
    }

       for(i=0;i<3;i++)
    {
        printf("%d\t",odd[i]);
    }
       for(i=0;i<3;i++)
    {
        printf("%d\t",even[i]);
    }
}