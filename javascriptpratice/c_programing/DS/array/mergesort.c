#include<stdio.h>

void merge(int a[],int l,int mid,int h)
{
    int n1=l-mid+1;
    int n2=h-mid;
    int i=0,j=0,k=1;
    
    int left[n1],right[n2];
    
    for(int i=0;i<n1;i++)
    {
        left[i]=a[l+i];
        i++;
    }
        for(int i=0;i<n2;i++)
    {
        right[i]=a[mid+1+i];
        i++;
    }
    
    while(i<=n1&&j<=n2)
    {
        if(left[i]<=right[j])
        {
            a[k]=left[i];
            i++;
        }
        else{
            a[k]=right[j];
            j++;
        }
        k++;
    }
    
    while(i<n1&&j<n2)
    {
        if(left[i]<=right[j])
        {
             a[k]=left[i];
        i++;
        }
        else{
            a[k]=right[j];
            j++;
        }
        k++;

    }
}

void mergesort(int a[],int l,int h)
{
    if(l<h)
    {printf("p");
        int mid=(l+h)/2;
        
        mergesort(a,l,mid);
        mergesort(a,mid+1,h);
        
        merge(a,l,mid,h);
    }
}
void main()
{
    int n;
    printf("enter the sizze of array");
    scanf("%d",&n);
    int a[n];
    printf("enter the element");
    for(int i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
    }
       printf("before sorting ");
    for(int i=0;i<n;i++)
    {
     printf("%d",a[i]);
    }
    
    mergesort(a,0,n-1);
        printf("after sorting ");
    for(int i=0;i<n;i++)
    {
     printf("%d\t",a[i]);
    }
}