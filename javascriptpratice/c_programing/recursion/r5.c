//5.Program to find the largest element of an array
#include<stdio.h>
void main()

{    int size,n,i,max=0;
    int maxarray(int[],int,int);
    printf("enter the size");
    scanf("%d",&n);
    int a[n];
     for(i=0;i<n;i++)
     {
         scanf("%d",&a[i]);
     }
    int temp=maxarray(a,n-1,max);
    printf("max of array=%d",temp);

}
 
int maxarray(int x[],int n,int max)
{ 
  if(n>=0)
  {  printf("max%d",n);
      if(x[n]>max)
      {
          max=x[n];
          maxarray(x,--n,max);
        
      }
      else
      {
           maxarray(x,--n,max);
      }
      
     
  }
   else
    return max;
}
