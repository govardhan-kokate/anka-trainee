#include<stdio.h>
#include<string.h>
void main()
{
    char str1[90];
    char str2[90];
    int i=0 ,flag=1;
     printf("enter the frist string\n");
     gets(str1);
     printf("enter the second string\n");
     gets(str2);
     if(strlen(str1)==strlen(str2))
     {
            while(str1[i]!='\0'||str2[i]!='\0')
             {
                if(str1[i]!=str2[i])
                 {
                  flag=0;
                   break;
                 }
                 i++;
             }
           if(flag)
             printf("string is same");
           else
             printf("string not same");
      }
     else
         printf("string not same becuse length doest match");
}