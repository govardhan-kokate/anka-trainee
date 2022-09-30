/*
33) Write a program in C to convert the array in such a way that double its value and replace the
next number with 0 if current and next element are same and rearrange the array such that all 0's
shifted to the end.
Expected Output:
The given array is: 0 3 3 3 0 0 7 7 0 9
The new array is: 6 3 14 9 0 0 0 0 0 0
*/

#include<stdio.h>
void main()
{
    int i,a[10],j,x,k;
    for(i=0;i<10;i++)
    {
        scanf("%d",&a[i]);
    }
    printf("array\n");
    for(i=0;i<10;i++)
    {
        printf("%d\n",a[i]);
    }
//logic
    for(i=0;i<10;i++)
    {   
 

 
        if(a[i]==a[i+1]) 
        {
        
              a[i]=a[i]+a[i+1];
              a[i+1]=0;
    
        }
    }
for(k=0;k<10;k++)
{
    for(i=0;i<10;i++)
      {
            if(a[i]==0)
        {
            x=a[i];
           for(j=i;j<10;j++)
            {
              a[j]=a[j+1];
            }
        a[9]=x;
        }
      }
}
     printf("array\n");
    for(i=0;i<10;i++)
    {
        printf("%d\n",a[i]);
    }
}