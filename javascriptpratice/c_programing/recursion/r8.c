//8.Write a C program to print all natural numbers from 1 to n. - using while loop

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
     printf("%d\t",c);
     c++;
     natural(n,c);
     break;
   }
  
}
