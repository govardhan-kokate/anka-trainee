/*
28)Write a program in C to print all possible combinations of r elements in a given array.
Expected Output:
The given array is:
1 5 4 6 8 The combination from by the number of elements are: 4
The combinations are:
1 5 4 6
1 5 4 8
1 5 6 8
1 4 6 8
5 4 6 8
*/

 #include<stdio.h>
void main()
{
    int i,a[5],j,temp,x;
    for(i=0;i<5;i++)
    {
        scanf("%d",&a[i]);
    }
    printf("array\n");
    for(i=0;i<5;i++)
    {
        printf("%d\n",a[i]);
    }

    //logic
    x=a[4];
    for(j=0;j<5;j++)
    {
        for(i=3;i<=0;i--)
        {
          temp=a[i];
          a[i]=x;
          x=temp;
            for(i=0;i<4;i++)
               {
                    printf("%d\n",a[i]);
               }
        }
    }
}