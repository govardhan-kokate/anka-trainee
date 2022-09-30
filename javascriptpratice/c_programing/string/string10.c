//10.Write a JAVA program to count total number of words in a string.
#include<stdio.h>
void main()
{
    char str[90];
    int i=0,count=1;
    printf("enter the string");
    gets(str);
    while(str[i]!='\0')
    {
       if(str[i]==' ')
       {
           count++;
           i++;
       }
       else
       {
           i++;
       }
       
    }
    printf("numer of word in string is %d",count);
}