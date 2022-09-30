#include<stdio.h>
void main()
{
    char ch;
    printf("enter the charecter");
    scanf("%c",&ch);
    if(ch>='a'&& ch<='z')
    {
        ch=ch-32;
    }
    printf("%c",ch)
;
}