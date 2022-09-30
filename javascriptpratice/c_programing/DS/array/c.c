#include<stdio.h>

void main()
{
    char s[22];
    scanf("%s",s);
    for(int i=0;s[i]!='\0';i++)
    {
        s[i]=97-s[i]+122;
    }

    printf("%s",s);
}