#include<stdio.h>
void main()
{
    int rem,n,flag=0;
    printf("enter the number");
    scanf("%d",&n);

    while(n!=0)
    {
        rem=n%10;
        n=n/10;
        if(rem==0)
        {
            flag=1;
            break;
        }
    }
    if(flag)
    {
        printf("number is duck");
    }
    else{printf("number is not duck");}
}