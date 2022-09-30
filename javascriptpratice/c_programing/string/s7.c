//6. Write a JAVA program to convert uppercase string to lowercase.
#include<stdio.h>
void main()
{
    char a[50];
    int i=0;
    printf("enter the string");
    gets(a);
    while(a[i]!='\0')
    {
        if(a[i]<90&&a[i]>65)
        {
            a[i]=a[i]+32;
            i++;
        }
        else
        {
            a[i]=a[i]-32;
            i++;
        }
        
    }
    printf("toggle strong is = %s",a);
}