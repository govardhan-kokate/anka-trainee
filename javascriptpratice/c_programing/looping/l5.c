// Write a C program to print all odd number between 1 to 100.
#include<stdio.h>
void main()
{
    int n,rem;
    printf("enter the number");
    scanf("%d",&n);
    while(n>0)

    {
        
        if(n%2!=0)
        {
            printf("%d\n",n);
        }
        n--;
    }
}