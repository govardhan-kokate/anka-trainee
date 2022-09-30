//10.Write a JAVA program to count total number of words in a string.
#include<stdio.h>
void main()
{
    char a[90];
    int i=0,c=0;
    printf("enter the number ");
    gets(a);
    while(a[i]!='\0')
    {
        if(a[i]>48&&a[i]<57)
        {
            c++;
            i++;
        }
        else
        {
            i++;
        }
        
    }
    printf("total count of number is %d",c);
}