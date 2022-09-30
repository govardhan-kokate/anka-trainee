//Write a C program to print all alphabets from a to z. - using while loop
#include<stdio.h>
void main()
{
    int ch,s,c;
    printf("enter choice\n");
    scanf("%c",&c);
    //print small letter 
    if(c==s)
   {ch=97;
    while(ch>=97&&ch<=122 )
    {
        printf("%c\n",ch);
        ch++;
    }
   }
   //print capital letter
      if(c==c)
   {
       ch=65;
    while(ch>=65&&ch<=90)
    {
        printf("%c\n",ch);
        ch++;
    }
   }
}
