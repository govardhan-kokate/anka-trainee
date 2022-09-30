#include<stdio.h>
#include<string.h>
void main()
{
    char a[90],b[90];
    int i=0,j=0;
    printf("enter string");
    gets(a);
    int len=strlen(a);
    while(a[i]=='\0')
    {
        if(a[i]==' ')
        {
            i=i-1;
            for(j=len-i;j<i;j++)
            {
                a[i]=b[i];
                i++;
            }
        }
        i++;
    }
    printf("revers %s",b);

}
