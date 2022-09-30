#include<stdio.h>
#include<string.h>
void main()
{
    char a[100];
    printf("enter the string ");
    scanf("%s",&a);
    int l=strlen(a);

    int mid=l/2;
    int end=l-1;
    int flag=1;
    for(int i=0;i<mid;i++){

        if(a[i]!=a[end])
        {
            flag=0;
            break;
        }
    }
    if(flag==0)
    {
        printf("string not palimdrom");

    }
    else
    {
        printf("string is palimdron");
        
    }

    
}