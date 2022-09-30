//. Write a C program to print all even numbers between 1 to 100. - using while loop
#include<stdio.h>
void main()
{
    int n,rem;
    printf("enter the number");
    scanf("%d",&n);
    while(n>0)
    {
        
        if(n%2==0)
        {
            printf("%d\n",n);
        }
        n--;
    }
}