//11.Write a C program to print all even numbers between 1 to 100. - using while loop
#include<stdio.h>
void main()

{    int size,n,i=1,min,rem=0,c=1;
    int natural(int,int);
    printf("enter the size");
    scanf("%d",&n);
    natural(n,c);
    


}

int natural(int n,int c)
{ 
   while(c<=n)
   {
    if(c%2==0)
    {
        printf("%d\t",c);
        natural(n,++c);
        break;
    }
    else
    {
          natural(n,++c);
        break;

    }
    
   }
  
}
