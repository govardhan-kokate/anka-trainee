//3. Program to calculate sum of an array
#include<stdio.h>
void main()

{    int size,index=5,n,i,sum=0;
    int printarray(int[],int,int);
    printf("enter the size");
    scanf("%d",&n);
    int a[n];
     for(i=0;i<n;i++)
     {
         scanf("%d",&a[i]);
     }
    int p=printarray(a,n-1,sum);
    printf("sum of array=%d",p);

}
 
int printarray(int x[],int n,int p)
{ 
  if(n>=0)
  {
      p=p+x[n];
      
      printf("sum%d",p);
      printarray(x,--n,p);
  }
   else
    return p;
}
