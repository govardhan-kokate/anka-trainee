//0. Write a C program to print all ASCII character with their values
#include<stdio.h>
void main()
{
    int ch=1;
    while(ch<256)
    {
        printf("%d=%c\n",ch,ch);
        ch++;
    }
}