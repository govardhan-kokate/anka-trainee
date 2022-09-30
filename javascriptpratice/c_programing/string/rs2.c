#include<stdio.h>
#include<string.h>
void main()
{
    char name[90];
    int count=0,c=0;
    printf("enter the string");
    gets(name);
    printf("%s\n",name);
   while(name[count]!='\0')
   {
       if(name[count]==' ')
       {
           c++;
       }
    
       ++count;
    
   }
   printf("count=%d",count-c);
}