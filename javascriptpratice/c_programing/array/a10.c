//10). Write a program in C to delete an element at desired position from an array
#include<stdio.h>
void main()
{
    int i,a[5],index,temp;
    for(i=0;i<5;i++)
    {
        scanf("%d",&a[i]);
    }
    printf("array\n");
    for(i=0;i<5;i++)
    {
        printf("%d\n",a[i]);
    }

    //logic for the delete a number

    printf("enter index to delete value");
    scanf("%d",&index);

    for(i=index;i<5;i++)
    {
        a[i]=a[i+1];
    }
    printf("array after deleting element\n");
   for(i=0;i<4;i++)
    {
        printf("%d\n",a[i]);
    }
   
   

}