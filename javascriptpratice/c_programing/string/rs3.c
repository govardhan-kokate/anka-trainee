#include<stdio.h>
#include<string.h>
void main()
{
    char name[90];
    int c;
    printf("enter the string");
    gets(name);
    printf("befor=%s\n",name); 

    //logic
    while(name[c]!='\0')
    {
        if(name[c]>='a'&&name[c]<='z')
        {
              name[c]-=32;
        }
        else
        {
            name[c]+=32;
        }
        c++;
    }
    printf("after=%s",name);
}