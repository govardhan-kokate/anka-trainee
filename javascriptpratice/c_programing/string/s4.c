//4. Write a JAVA program to compare two strings

#include<string.h>
#include<stdio.h>
void main()
{int i,flag=1;
    char f[90];
    char s[90];
      printf("enter frist string\n");
    gets(f);
       printf("enter second string\n");
    gets(s);

    //logic
     
while(f[i]!='\0')
{
    if(f[i]==s[i])
    {
        i++;
    }
    else
    {
        flag=0;
        break;
    }
    
}

      
      
       if(flag)
                  printf("string same");
                 else
                  {
                    printf("string not same");
                  }
      

}