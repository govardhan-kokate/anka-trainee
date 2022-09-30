//. Write a C program to enter a number and print it in words.
#include<stdio.h>
void main()
{
    long long int n;
    int c1=0,c2=0,c3=0,c4=0,c5=0,c6=0,c7=0,c8=0,c9=0,c0=0,rem,rev,sum;
    printf("enter the number\n");
    scanf("%lld",&n);
    while(n!=0)
    {
          rem=n%10;
        n=n/10;
        rev=rev*10+rem;
    }
    while(rev!=0)
    {
        sum=rev%10;
        rev=rev/10;
        switch(sum)
        {
            case 1:
            printf("one ");
            break;
            case 2:
               printf("two ");
            break;
            case 3:
               printf("three ");
            break;
            case 4:
               printf("four ");
            break;
            case 5:
               printf("five ");
            break;
            case 6:
               printf("six ");
            break;
            case 7:
               printf("seven ");
            break;
            case 8:
               printf("eight ");
            break;
            case 9:
               printf("nine ");
            break;
            case 0:
               printf("zero ");
            break;
       
    }
  
 }

}