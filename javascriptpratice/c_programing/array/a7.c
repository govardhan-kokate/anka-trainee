//7) WAP to enter the 10 element array and print the occurrence of every element ?
#include<stdio.h>
void main()
{
    int i,a[5],j,temp,count=1;
    for(i=0;i<5;i++)
    {
        scanf("%d",&a[i]);
    }
    printf("array\n");
    for(i=0;i<5;i++)
    {
        printf("%d\n",a[i]);
    }
    //logic accending order
    for(i=0;i<5;i++)
    {
        for(j=i;j<5;j++)
        {
            if(a[i]>a[j])
            {
                temp=a[i];
                a[i]=a[j];
                a[j]=temp;
            }
        }
    }

    //logic for freqancy quit
    printf("freqancy of number\n");
   
  for(i=0;i<5;i++)
  {
    if(a[i]==a[i+1])
    {
        count++;
    }
    else
    {
        printf("%d------------->%d\n",a[i],count);
        count=1;
    }
    
 }

}