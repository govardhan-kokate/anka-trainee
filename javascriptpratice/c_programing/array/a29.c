/*29) Write a program in C to find a pair with the given difference
Expected Output:
The given array is:
1 15 39 75 92
The given difference is: 53
The pair are: (39, 92)*/
#include<stdio.h>
void main()
{
    int i,a[5];
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
    unsigned int p;
    int num,j;
    printf("enter the num");
    scanf("%d",&num);

    for(i=0;i<5;i++)
    {
        for(j=0;j<5;j++) 
        {
            p=a[i]-a[j];
            if(p==num)
            {
                printf("(%d %d)",a[i],a[j]);
            }
        }
    }
}