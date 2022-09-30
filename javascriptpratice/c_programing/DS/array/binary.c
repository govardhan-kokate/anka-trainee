#include<stdio.h>

int binaryforfrist(int a[],int n,int x)
{
    int low=0;
    int high=n-1;
    int result=-1;

    while(low<=high)
    {
        int mid=(low+high)/2;
        if(x==a[mid])
        {
            result=mid;
            high=mid-1;
        }
        else if(x<a[mid])
        {
            high=mid-1;
        }
        else{
            low=mid+1;
        }

    }
return result;
}
int binaryforlast(int a[],int n,int x)
{
    int low=0;
    int high=n-1;
    int res=-1;

    while(low<=high)
    {
        int mid=(low+high)/2;
        if(x==a[mid])
        {
            res=mid;
            low=mid+1;
        }
        else if(x<a[mid])
        {
            high=mid-1;
        }
        else{
            low=mid+1;
        }

    }
return res;
}
void main()
{
    int a[]={2,3,5,5,5,22,98};
    int n=7;
        int x=5;
   int result= binaryforfrist(a,n,x);
    int res=binaryforlast(a,n,x);

    printf("frist occurance %d\nlast occurance is %d",result,res);

}