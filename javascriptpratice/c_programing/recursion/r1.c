//1. Program to print an array
#include<stdio.h>
void main()
{   void printarray(int[],int,int);
    int a[5]={10,20,30,40,50},size,index=0;
    size=sizeof(a)/4;
    printarray(a,index,size);
}

void printarray(int x[],int index,int size)
{
  if(index<size)
  {
      printf("%d\n",x[index]);
      printarray(x,++index,size); 
  }
}
