//. Write a C program to find frequency of each digit in a given integer.
#include<stdio.h>
void main()
{
    long long int n;
    int c1=0,c2=0,c3=0,c4=0,c5=0,c6=0,c7=0,c8=0,c9=0,c0=0,rem;
    printf("enter the number\n");
    scanf("%lld",&n);

    while(n!=0)
    {
        rem=n%10;
        n=n/10;
        switch(rem)
        {
            case 1:
            ++c1;
            break;
            case 2:
            ++c2;
            break;
            case 3:
            ++c3;
            break;
            case 4:
            ++c4;
            break;
            case 5:
            ++c5;
            break;
            case 6:
            ++c6;
            break;
            case 7:
            ++c7;
            break;
            case 8:
            ++c8;
            break;
            case 9:
            ++c9;
            break;
            case 0:
            ++c0;
            break;
       
    }
  
 }
   printf("number 1 = freqancy %d\n",c1);
     printf("number 2 = freqancy %d\n",c2);
      printf("number 3 = freqancy %d\n",c3);
       printf("number 4 = freqancy %d\n",c4);
        printf("number 5 = freqancy %d\n",c5);
         printf("number 6 = freqancy %d\n",c6);
          printf("number 7 = freqancy %d\n",c7);
           printf("number 8 = freqancy %d\n",c8);
            printf("number 9 = freqancy %d\n",c9);
             printf("number 0 = freqancy %d\n",c0);
}