#include<stdio.h>
void main()
{
    int i,j,count,count1;
    for(i=1;i<=5;i++)
    {count=i;
     count1=(2*i)-2;
        for(j=1;j<=9;j++)
        {
           if(j>=6-i&&j<=5)
            {
                printf("%d",count);
                count++;
            }
            else
            {
                printf(" ");
            }
            
            if(j<=4+i&&j>=6&&i>=2)
            {
                printf("%d",count1);
                count1--;
            }
            else{
                printf(" ");
            }
        }
        printf("\n");
    }
}