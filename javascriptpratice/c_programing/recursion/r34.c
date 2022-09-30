//34.Write a C program to print all Prime numbers between 1 to n.
#include<stdio.h>                  
void main()
{
    void prime(int,int);
    int n,i=2,flag=1;
    printf("enter the number ");
    scanf("%d",&n);
    prime(n,i);

}
void prime(int n,int i)
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
            printf("%d\n",i);
            prime(n,++i);
        
    }
}