//13) Write a program in C to find the majority element of an array ?
#include<stdio.h>
void main()
{
    int i,a[5],j,p,temp,count,max;
    for(i=0;i<5;i++)
    {
        scanf("%d",&a[i]);
    }
    printf("array\n");
    for(i=0;i<5;i++)
    {
        printf("%d\n",a[i]);
    }
//accending order logic
    for(i=0;i<5;i++)
    {
        for(j=0;j<5;j++)
        {
            if(a[i]>a[j])
            {
                temp=a[i];
                a[i]=a[j];
                a[j]=temp;
            }
        }
    }
    //logic count number 
    max=0;
    for(i=0;i<5;i++)
    {
        if(a[i]==a[i+1])
        {
            count++;
        }
        else
        {
            count=1;
        }
        if(count>max)
        {
            max=count;
            p=a[i];
        }
    }
     int k=5/2;
     printf("k=%d\n",k);
     printf("count=%d\n",max);
    //compaire count with arraysize/2
    if(max>k)
    {
        printf("%d is majority element in array",p);
    }
    else 
    {
        printf("thier is no majority element in thise array");
    }

}