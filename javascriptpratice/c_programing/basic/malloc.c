#include<stdio.h>
#include<stdlib.h>
void main()
{
  int i,n;
  printf("enter the number");
  scanf("%d",&n);
  int *ptr=(int*)malloc(n*sizeof(int));
  for(i=0;i<n;i++)
  {
      printf("enter the integer");
      scanf("%d",ptr+i);
  }
  ptr=(int*)realloc(ptr,4*sizeof(int));
  printf("enter more 2 ");
  for(i=4;i<6;i++)
  {
    
      scanf("%d",ptr+i);
  }

  for(i=0;i<n+2;i++)
  {
      printf("%d ",*(ptr+i));
  }
}