//35.Write a C program to find sum of all prime numbers between 1 to n.
#include<stdio.h>                  
void main()
{
    void prime(int,int,int);
    int n,i=2,flag=1,sum=0;
    printf("enter the number ");
    scanf("%d",&n);
    prime(n,i,sum);

}                                          
void prime(int n,int i,int sum)
{int flag=1;
    if(i<n)
    {int k=2;
        while(k<i)
        {
            if(i%k==0)
            {
                flag=0;
                break;
                
            }
            else
            {
                k++;
            }
        }



        if(flag==1)
            sum=sum+i;
            prime(n,++i,sum);
        
    }
}