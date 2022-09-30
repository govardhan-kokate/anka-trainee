#include<stdio.h>
void maain()
{int i;
    char a[100];
     scanf("%s",&a[i]);

    while(a[i]!='\0')
    {
        for(int j=i;j!='\0';j++)
        {
            int temp=a[i];
            a[i]=a[j];
            a[j]=temp;

            printf("%s",&a[i]);
        }
    }
}