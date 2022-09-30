#include<stdio.h>
void main()
{
    int a[5];
    int b[5];
    int j=0;
    printf("enter the element");
    for(int i=0;i<5;i++)
    {;
        scanf("%d",&a[i]);
        b[j]=0;
        j++;
    }
    
    for(int i=0;i<5;i++)
    {
        b[a[i]-1]++;
    }
   
    for(int i=0;i<5;i++)
    {
        if(b[i]==0)
        {
            printf("%d is missing number\n",i+1);
        }
        else if(b[i]>1)
        {
            printf("%d is reapting number",i+1);
        }
    }
}