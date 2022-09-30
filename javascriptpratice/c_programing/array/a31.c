/*
31) Write a program in C to rearrange positive and negative numbers alternatively in a given array
?
Output:
If positive numbers are more they appear at the end and for also negative numbers, they too appear
in the end of the array.
Expected Output:
The given array is:
-4 8 -5 -6 5 -9 7 1 -21 -11 19
The rearranged array is:
-4 7 -5 1 -21 5 -11 8 -9 19 -6
*/
#include<stdio.h>
void main()
{
    int i,a[10],b[10],c[10],m=0,p,j,temp,k;
    for(i=0;i<10;i++)
    {
        scanf("%d",&a[i]);
    }
    printf("array\n");
    for(i=0;i<10;i++)
    {
        printf("%d\n",a[i]);
    }

    //accending logic
 for(i=0;i<10;i++)
    {
        for(j=i;j<10;j++)
        {
            if(a[i]>a[j])
            {
              temp=a[i];
              a[i]=a[j];
              a[j]=temp;
            }
        }
    }
    printf("accen array\n");
     for(i=0;i<10;i++)
    {
        printf("%d\n",a[i]);
    }

//main logic
for(i=0;i<9;i++)
{
    if(a[i]<0)
    {
        m++;
    }
}
 for(i=0;i<10;i++)
 {
     p=a[9];
     for(j=9;j>=i;j--)
     {
         a[j]=a[j-1];
     }
     a[i]=p;
     i++;
 }
    
 printf("after array\n");
    for(i=0;i<10;i++)
    {
        printf("%d\n",a[i]);
    }
   
}