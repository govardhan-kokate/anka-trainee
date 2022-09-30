#include<stdio.h>
void main()
{
   /* int n,b;
    printf("enter number");
    scanf("%d",&n);
     
     b=((n%10)*100)+(((n/10)%10)*10)+(n/100);
     printf("revers of %d is %d",n,b);
     */

    //using while 

    int n,rem,rev=0;
    printf("enter the number"); 
    scanf("%d",&n);

    while(n!=0)
    {
        rem=n%10;
        rev=rev*10+rem;
        n=n/10;
    }
    printf("revers no is %d",rev);
}