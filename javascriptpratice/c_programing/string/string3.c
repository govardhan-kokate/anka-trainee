#include<stdio.h>
#include<string.h>
void main()
{
    char str1[90];
    char str2[90];
    int i=0,j;

    printf("enter the frist string\n");
    gets(str1);
    printf("enter the second string\n");
    gets(str2);
     
     int fl=strlen(str1);
     int sl=strlen(str2);
     int len=fl+sl;

     for(i=fl,j=0;i<len;i++)
     {
         str1[i]=str2[j];
         j++;
     }
     printf("string %s",str1);

}