//6.Program to find the second largest element of an array
#include<stdio.h>
void main()

{    int size,n,i,max,max1;
    int maxarray(int[],int,int,int);
    printf("enter the size");
    scanf("%d",&n);
    int a[n];
     for(i=0;i<n;i++)
     {
         scanf("%d",&a[i]);
     }
      max=a[n-1];
      max1=a[n-1];
    int temp=maxarray(a,n-1,max,max1);
    printf("second max of array=%d",temp);

}

int maxarray(int x[],int n,int max,int max1)
{ 
  if(n>=0)
  {    
      if(x[n]>max)
      { 
          max1=max;
          max=x[n];
          maxarray(x,--n,max,max1); 
          
      }
      else
      {
           maxarray(x,--n,max,max1);
      }
  }
   else
    return max1;
}
