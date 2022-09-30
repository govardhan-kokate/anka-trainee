//8. Write a JAVA program to find total number of alphabets, digits or special character in a string
#include<stdio.h>
void main()
{
    char str[90];
    int i=0,alpha=0,spacial=0,digit=0;
    printf("enter string\n");
    gets(str);

    while(str[i]!='\0')
    {
        if(str[i]>='A'&&str[i]<='Z')
        {
            alpha++;
            i++;
        }
     else if(str[i]>='a'&&str[i]<='z')
        {
            alpha++;
            i++;
        }
        else if(str[i]>='0'&&str[i]<='9')
        {
            digit++;
            i++;
        }
        else
        {
            spacial++;
            i++;
        }
        
    }
    printf(" alpha=%d\n spacial=%d\n digit=%d",alpha,spacial,digit);
}