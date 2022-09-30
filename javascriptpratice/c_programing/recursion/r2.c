//2. Program to print an array in reverse order
#include<stdio.h>
void main()
{   void printarray(int[],int);
      int size,index=5,n,i;
    printf("enter the size");
    scanf("%d",&n);
    int a[n];
     for(i=0;i<n;i++)
     {
         scanf("%d",&a[i]);
     }
    printarray(a,n-1);
}

void printarray(int x[],int n)
{ 
  if(n>=0)
  {
      printf("%d\n",x[n]);  
      printarray(x,--n);
  }
}
