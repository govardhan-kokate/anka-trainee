//9.Write a C program to print all natural numbers in reverse (from n to 1). - using while loop
#include<stdio.h>
void main()

{    int size,n,i=1,min,rem=0,c=1;
    int revers(int);
    printf("enter the size");
    scanf("%d",&n);
    revers(n);
    


}

int revers(int n)
{ 
   while(n!=0)
   {
     printf("%d\t",n);
     n--;
     revers(n);
     break;
   }
  
}
