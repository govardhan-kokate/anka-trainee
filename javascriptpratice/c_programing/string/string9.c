//9. Write a JAVA program to count total number of vowels and consonants in a string
#include<stdio.h>
void main()
{
    char str[90];
    int i=0,vowels=0,con=0;
    printf("enter the string\n");
    gets(str);
    while(str[i]!='\0')
    {
        if(str[i]=='o'||str[i]=='a'||str[i]=='i'||str[i]=='e'||str[i]=='u')
        {
            vowels++;
            i++;
        }
        else
        {
            con++;
            i++;
        }
        
    }
    printf("vowels=%d\nconsonat=%d",vowels,con);
}