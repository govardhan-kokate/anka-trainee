#include<stdio.h>
#include<string.h>
void main()
{
    char name[90];
    int l,i,temp;
    
    printf("enter the string");
    gets(name);
    printf("befor=%s\n",name);

    l=strlen(name);
    int mid=l/2;
    int end=l-1;
    for(i=0;i<mid;i++)
    {
      temp=name[i];
      name[i]=name[end];
      name[end]=temp;
      end--;
    }
    printf("revers=%s",name);
}