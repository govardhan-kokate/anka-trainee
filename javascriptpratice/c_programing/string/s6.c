//6. Write a JAVA program to convert uppercase string to lowercase.
#include<stdio.h>
void main()
{
    char name[50];
    int i=0;
    printf("enter the string");
    gets(name);
    while(name[i]!='\0')
    {
        name[i]=name[i]+32;
        i++;
    }
    printf("after reversing= %s",name);
}