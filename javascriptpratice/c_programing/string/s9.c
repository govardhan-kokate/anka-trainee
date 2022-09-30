//9. Write a JAVA program to count total number of vowels and consonants in a string.
#include<stdio.h>
void main()
{
    char a[50];
    int i=0,c=0,v=0;
    printf("enetr the string");
    gets(a);
    while(a[i]!='\0')
    {
        if(a[i]==65||a[i]==97||a[i]==73||a[i]==101||a[i]==85)
        {
            
        v++;
        i++;
        }
        else
        {
            c++;
            i++;
        }
        
        
    }
    printf("consonat=%d\nvowels is=%d",c,v);
}