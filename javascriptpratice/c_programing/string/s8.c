//8. Write a JAVA program to find total number of alphabets, digits or special character in a string.
#include<stdio.h>
void main()
{
    char a[50];
    int alpha=0,num=0,spacial=0,i=0;
    printf("enter the string");
    gets(a);
    while(a[i]!='\0')
    {
        if(a[i]<=122&&a[i]>=65)
        {printf("a%d%d\n",a[i]);
            alpha++;
            i++;
        }
        else if(a[i]>=48&&a[i]<=57)
        {printf("n%d\n",a[i]);
            num++;
            i++;
        }
        else
        {printf("s%d\n",a[i]);
            spacial++;
            i++;
        }

        
    }
    printf("alphabets=%d\nnumbers=%d\nspacial chareacter=%d",alpha,num,spacial);
}