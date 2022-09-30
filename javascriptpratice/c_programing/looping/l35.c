//strong number upto n
#include<stdio.h>
void main()
{
    int n,rem,sum=0,fac,temp,m,j,i;
    printf("enter the number");
    scanf("%d",&m);
     
     for(i=1;i<=m;i++)
    {sum=0;
        n=i;
     while(n!=0)
     {
         rem=n%10;
         n=n/10;
         fac=1;
         while(rem!=0)
         {
             fac=fac*rem;
             rem--;
            
         }
         sum=sum+fac;
     }
     if(sum==i)
     {
        printf("%d\n",i);
     }
    
    }
}

