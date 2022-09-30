// Write a C program to print all Strong numbers between 1 to n.
#include<stdio.h>
void main()
{
   long long int n1=0,n2=1,n3,n,i;
    printf("enter number");
    scanf("%d",&n);
    printf("%d\n%d\n",n1,n2);
    
    while(n>0)
    {
       
        n3=n2+n1;
         printf("%lld\n",n3);
        n1=n2;
        n2=n3;
        n--;
    }
    
}