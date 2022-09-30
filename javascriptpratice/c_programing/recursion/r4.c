//4.Program to calculate average of an array
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
    printf("avrege of array=%d",p/n);

}
 
int printarray(int x[],int n,int p)
{ 
  if(n>=0)
  {
      p=p+x[n];
      printarray(x,--n,p);
  }
   else
    return p;
}
