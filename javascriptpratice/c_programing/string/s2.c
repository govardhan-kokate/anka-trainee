//2. Write a JAVA program to copy one string to another string.
#include<stdio.h>
#include<string.h>
void main()
{int i=0;
   char   name[90];
   char   copy[90];
    gets(name);
    printf("%s\n",name);

   while(name[i]!='\0')
   {
   //   name[i]=copy[i];
      copy[i]=name[i];
      i++;
   }
   printf("copy %s",copy);
}