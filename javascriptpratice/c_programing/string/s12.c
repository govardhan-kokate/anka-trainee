//11.Write a JAVA program to find reverse of a string.
#include<stdio.h>
#include<string.h>
void main()
{
    char a[90],b[90];
    int i=0,len,mid,end;
    printf("enter the string");
    gets(a);
    len=strlen(a);
    mid=len/2;
    end=len-1;
    for(i=0;i<len-1;i++)
    {
        b[i]=a[i];
    }
    
    for(i=0;i<mid;i++)
    {
        int temp=a[i];
        a[i]=a[end];
        a[end]=temp;
        end--;
    }
    

    int flag=1;
    for(i=0;i<len-1;i++)
    {
       
       if(a[i]!=b[i])
       {
          flag=0;
          break;
       }
 
    }

    if(flag==1)
    {
        printf(" palindrom");
    }
    else
    {
        printf("not palindron");
    }
}