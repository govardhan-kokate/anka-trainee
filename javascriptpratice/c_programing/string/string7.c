//7. Write a JAVA program to toggle case of each character of a string.
#include<stdio.h>
void main()
{
    char str1[90];
    int i=0;
    printf("enter the string\n");
    gets(str1);
    while(str1[i]!='\0')
    {
        if(str1[i]>='A'&&str1[i]<='Z')
        {
            str1[i]=str1[i]+32;
            i++;
        }
        else if(str1[i]>='a'&&str1[i]<='z')
        {
            str1[i]=str1[i]-32;
            i++;
        }
        else
        {
            i++;
        }
    }
    printf("%s",str1);
}