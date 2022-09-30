//10.Write a C program to print all alphabets from a to z. - using while loop
#include<stdio.h>
void main()
{
     void charecter(int);
     int ch=97;
     charecter(ch);
}

void charecter(int ch)
{
    while(ch>=97&&ch<=122 )
    {
        printf("%c\n",ch);
        charecter(++ch);
    }
}