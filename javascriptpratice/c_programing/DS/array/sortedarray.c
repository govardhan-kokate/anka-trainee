#include<stdio.h>
void commanele(int a[],int b[],int c[],int n1,int n2,int n3)
{ int i=0,j=0,k=0;
    while(i<n1&&j<n2&&k<n3)
    {
        if(a[i]==b[j]&&b[j]==c[k])
        {
            printf("%d\n",a[i]);
            i++;j++;k++;
        }
        else{
            if(a[i]<b[j])
            i++;
            else if(b[j]<c[k])
            j++;
            else
            k++;
             int x=a[i-1];
        while(a[i]==x) i++;
        int y=b[j-1];
        while(b[j]==y) j++;
        int z=c[k-1];
        while(c[k]==z) k++;

        }
       
    }
}
void main()
{
    int n1,n2,n3,i;
    printf("enter the size of arrays\n");
    scanf("%d%d%d",&n1,&n2,&n3);
     int a[n1],b[n2],c[n3];
    printf("enter the frist array elemnt\n");
    for(int i=0;i<n1;i++)
    {
        scanf("%d",&a[i]);
    }
    printf("enter the second array elemnt\n");
    for(int i=0;i<n2;i++)
    {
        scanf("%d",&b[i]);
    }
    printf("enter the thired array elemnt\n");
    for(int i=0;i<n3;i++)
    {
        scanf("%d",&c[i]);
    }

    commanele(a,b,c,n1,n2,n3);
}