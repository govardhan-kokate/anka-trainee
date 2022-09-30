// 27.Write a C program to print all ASCII character with their values
#include<stdio.h>
void main()
{  void asci(int);
    int a=0;
   
    asci(a);
}

void asci(int a)
{
    if(a<255)
    {
        printf("%c\n",a);
        asci(++a);
    }
}