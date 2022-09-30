//17) Write a program in C to find the smallest missing element from a sorted array?
#include<stdio.h>
void main()
{
    int i,a[5],n;
    for(i=0;i<5;i++)
    {
        scanf("%d",&a[i]);
    }
    printf("array\n");
    for(i=0;i<5;i++)
    {
        printf("%d\n",a[i]);
    }

    //logic
    n=0;
    for(i=0;i<5;i++)
    {
        if(a[i]==n)
        {
            n++;
        }
        else
        {
             printf("smallest missing number is =%d",n);
        break;

        }
        
       
    }
}
