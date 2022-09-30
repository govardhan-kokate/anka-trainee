#include<stdio.h>
void main()
{
    char str1[90];
      int count=0,i=0;
    printf("enter the string\n");
    gets(str1);
    while(str1[i]!='\0')
    {
        count++;
        i++;
    }
    printf("lenght of string is %d",count);
}