#include<stdio.h>
void main()
{    long long n;
    int one=0,two=0,three=0,four=0,five=0,six=0,seven=0,eight=0,nine=0,zero=0,rem;
    printf("enter the number\n");
    scanf("%d",&n);
    while(n!=0)
    {
        rem=n%10;
        n=n/10;
        switch (rem)
        {
        case 1:one++;
        break;  
        case 2:two++;
        break;
        case 3:three++;
        break;
        case 4:four++;
        break;
        case 5:five++;
        break;
        case 6:six++;
        break;
        case 7:seven++;
        break;
        case 8:eight++;
        break;
        case 9:nine++;
        break;
        case 0:zero++;
        break;
        default:
        break;
        }
    }
    printf("1-->%d\n2-->%d\n3-->%d\n4-->%d\n5-->%d\n6-->%d\n7-->%d\n8-->%d\n9-->%d\n0-->%d",one,two,three,four,five,six,seven,eight,nine,zero);
    }