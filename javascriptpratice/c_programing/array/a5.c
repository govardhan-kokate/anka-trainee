//5). Write a program to enter the 5 values in ascending order and store in array and find out the
//missing element from array?
#include<stdio.h>
void main()
{
    int i,j,a[5];
    for(i=0;i<5;i++)
    {
        scanf("%d",&a[i]);
    }   
    for(i=0;i<5;i++)
    {
        printf("%d\n",a[i]);
    }
    //logic for missing element of array
    printf("Missing element are\n");
    for(i=0;i<5;i++)
    {
        for(j=a[i];j<(a[i+1]-1);)
        {
            printf("%d\n",++j); 
        }
    }
}