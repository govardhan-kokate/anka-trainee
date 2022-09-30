//7.Program to find the smallest element of an array
#include<stdio.h>
void main()

{    int size,n,i,min;
    int maxarray(int[],int,int);
    printf("enter the size");
    scanf("%d",&n);
    int a[n];
     for(i=0;i<n;i++)
     {
         scanf("%d",&a[i]);
     }
    
      min=a[n-1];
    int temp=maxarray(a,n-1,min);
    printf("min of array=%d",temp);

}

int maxarray(int x[],int n,int min)
{ 
  if(n>=0)
  {    
      if(x[n]<min)
      { 
          
          min=x[n];
          maxarray(x,--n,min); 
          
      }
      else
      {
           maxarray(x,--n,min);
      }
  }
   else
    return min;
}
