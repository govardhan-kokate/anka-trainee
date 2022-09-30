//3. Write a JAVA program to concatenate two strings.
#include<stdio.h>
#include<string.h>
void main()
{
    char f[90];
    char s[90];
    int i,j;
    printf("enter frist string\n");
    gets(f);
       printf("enter second string\n");
    gets(s);
    int lf=strlen(f);
    int ls=strlen(s);
   int len=ls+lf;

   for(i=lf,j=0;i<len;i++)
   {
     f[i]=s[j];
     j++;
   }
   printf("combination is=%s",f);

}