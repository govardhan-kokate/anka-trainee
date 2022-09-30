#include<stdio.h>
void main()
{
    int n,i;
    printf("enter the size of array");
    scanf("%d",&n);
    int a[n];
    printf("enter the element in array");
    for(i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
    }

int max=0,p,count=1;
for(i=0;i<n-1;i++)
{
    if(a[i]==a[i+1])
    {
        count++;
        
        if(count>max)
        {   p=a[i];
            max=count;
        }
    }
    else
    {
        count=1;
    }
}
if(max>n/3)
{
    printf("%d is elemet appear more than n/3 times",p);
}
else
printf("there is no element appear more than n/3 times");
}