//5. Write a JAVA program to convert lowercase string to uppercase.
#include<stdio.h>
#include<string.h>
void main()
{
    char str1[90];
    int i=0;
    printf("enter the string \n");
    gets(str1);
    while(str1[i]!='\0')
    {
        str1[i]=str1[i]-32;
        i++;
    }
    printf("%s",str1);
}