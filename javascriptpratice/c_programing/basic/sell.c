#include<stdio.h>
void main()
{
    int sell_price,cost_price;
    printf("enter selling");
    scanf("%d",&sell_price);
    printf("enter cost price");
    scanf("%d",&cost_price);
    if(cost_price<sell_price)
    {
        printf("product get loss by -%d",sell_price-cost_price);
    }
    else
    {
        printf("product get profit by %d",cost_price-sell_price);
    }
    

}