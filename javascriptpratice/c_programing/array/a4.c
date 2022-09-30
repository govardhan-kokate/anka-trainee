//4) WAP to insert the element on specified position in array ?
#include<stdio.h>
void main()
{
    int i,index,value,a[6];
    for(i=0;i<5;i++)
    {
        scanf("%d",&a[i]);
    }

    for(i=0;i<5;i++)
    {
        printf("%d\n",a[i]);
    }

  //logic for inserting value
  printf("enter the frist index then value");
  scanf("%d%d",&index,&value);
  for(i=4;i<=index;i--)
  {
      a[i+1]=a[i];
  }
  a[index]=value;
    for(i=0;i<5;i++)
    {
        printf("%d\n",a[i]);
    }

}