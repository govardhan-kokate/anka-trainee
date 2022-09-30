//5. Write a JAVA program to convert lowercase string to uppercase
#include<stdio.h>
#include<string.h>
void main()
{
    char name[90];
    int i=0;
    printf("enter string\n");
    gets(name);
    printf("%s\n",name);

    while(name[i]!='\0')
    {
        name[i]=name[i]-32;
        i++;
    }
    printf("after reversing=%s\t",name);
} 