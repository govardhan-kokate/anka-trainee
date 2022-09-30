#include<stdio.h>
void main()
{
    char str1[90];
    char str2[90];
    int i=0;
    printf("enter the string");
    gets(str1);
    while(str1[i]!='\0')
    {
        str2[i]=str1[i];
        i++;
    }
    printf("after copy %s",str2);
}
