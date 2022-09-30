//13.Write a C program to find sum of all natural numbers between 1 to n.
#include<stdio.h>
void main()

{    int size,n,i=1,min,rem=0,c=1;
    int sumnatural(int,int,int);
    printf("enter the size");
    scanf("%d",&n);
  int temp=  sumnatural(n,c,rem);
    printf("%d",temp);


}

int sumnatural(int n,int c,int rem)
{ 
   while(c<=n)
   {
     rem=rem+c;
     c++;
     sumnatural(n,c,rem);

   }
  return rem;
}
