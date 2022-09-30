#include<stdio.h>
#include<string.h>
#define n 90
void main()
{
    char name[n];
    int count=0,i=0;
    int len;
    printf("enter the string");
    gets(name);

    //logic
    
    while(name[i]!='\0')
    {
        count++;
       i++;
    }

    
        printf("count=%d",count);
   

}

