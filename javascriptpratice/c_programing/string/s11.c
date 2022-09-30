//11.Write a JAVA program to find reverse of a string.
#include<stdio.h>
#include<string.h>
void main()
{
    char a[70];
    int len,mid,end;
    printf("enter the string");
    gets(a);
    len=strlen(a);
    mid=len/2;
    end=len-1;
    for(int i=0;i<mid;i++)
    {
        int temp=a[i];
        a[i]=a[end];
        a[end]=temp;
        end--;
    }
    printf("revers string is %s",a);
}