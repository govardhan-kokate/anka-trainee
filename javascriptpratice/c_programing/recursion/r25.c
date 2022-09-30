#include<stdio.h>
void main()
{
    void freq(long long int,int,long long int);
   long long int digit=0,n,c,p;
    printf("enter number");
    scanf("%d",&n);
    p=n;
    freq(n,0,c);
}
  
void freq(long long int n,int digit,long long int p)
 
{
    n=p;
  
    if(digit<=9)
    {  int c=0;
        while(n>0)
        { 
          int rem=n%10;
          if(rem==digit)
          {
           c++;   
          } n=n/10;
        }
        printf("%d---->%d\n",digit,c);
        freq(n,++digit,p);
    }
}