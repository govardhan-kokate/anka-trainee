//36.Write a C program to find all prime factors of a number.
#include<stdio.h>
void main()
{
    void prime(int ,int);
    int n,i=2;
    printf("enter the number ");
    scanf("%d",&n);
    prime(n,i);

}

void prime(int n,int i)
{int j;
    if(i<n)
   {
    if(n%i==0)
    {
        int isprime=0;
        for(j=2;j<i/2;i++)
        {
            if(i%j==0)
            {
                isprime=0;
                break;
            }
        }
        if(isprime==1)
        {
            printf("%d\n");
        }
        else
        {
            printf("no prime factors");
        }
        
    }
    prime(n,--i);
   }
}