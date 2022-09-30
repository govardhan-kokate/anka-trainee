#include<stdio.h>
void main()
{
    if(printf("hi\n"))
    {
        printf("good");

    }
    if(!printf("text\n"))
    {
        printf("bad");
    }
}