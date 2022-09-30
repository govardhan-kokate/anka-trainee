#include<stdio.h>
#include<stdlib.h>
struct node* createnode();
void create_link_list(struct node**);
void display_link_list(struct node*);
void insertatfrist(struct node**);
void delete_at_last(struct node**);
void delete_at_frist(struct node**);
void insert_at_pos(struct node**);
void revers(struct node**);
void revers_in_k(struct node**,int);
struct node{
    int data;
    struct node* next;
};
void main()
{
   int ch;
   struct node* frist=NULL;

   do
   {
       printf("\n1.create link list\n2.display link list\n3.insert at frist\n4.insert at last\n5.delete at last\n6.delete at frist\n7.insert at pos \n8.revers linklist\n");
       printf("************************\n");
       printf("enter youer choice\n");
       scanf("%d",&ch);
       switch (ch)
       {
       case 1:create_link_list(&frist);
           break;
       case 2:display_link_list(frist);
           break;
       case 3: insertatfrist(&frist);
           break;  
       case 4:create_link_list(&frist);
           break;
        case 5:delete_at_last(&frist);
            break;
       case 6:delete_at_frist(&frist);
       break;      
       case 7: insert_at_pos(&frist); 
       break; 
       case 8:revers(&frist);
       break;
       case 9:revers_in_k(&frist);
       break;
       default:
           break;
       }
   } while (ch!=0);
   
}

//this methode creating new node 
struct node* createnode()
{
    int a;
    struct node* newnode=NULL;
    newnode=(struct node*)malloc(sizeof(struct node));
    if(newnode==NULL)
    {
        printf("memory note allocated\n");
    }
    else
    {
        printf("enter the data\n");
        scanf("%d",&a);
        newnode->data=a;
        newnode->next=NULL;
        return newnode;
    }
}

void create_link_list(struct node** head)
{
    struct node * tempnode=createnode();
    struct node * lastnode;
    lastnode=*head;
    
    if(*head==NULL)
    {
        *head=tempnode;
        printf("\nfrist element added successfully\n");
        printf("\n********************************\n");
    }
    else
    {
        while(lastnode->next!=NULL)
        {
            lastnode=lastnode->next;
        }
        lastnode->next=tempnode;
        printf("successfully node added\n");
    }
}

//display function
void display_link_list(struct node* head)
{
    struct node* lastnode=head;
    while(lastnode!=0)
    {
        printf("->%d",lastnode->data);
        lastnode=lastnode->next;
        
    }
    printf("\n");
}
void insertatfrist(struct node** head)
{
    struct node* tempnode=createnode();
    struct node* lastnode=*head;

    if(*head==NULL)
    {
        *head=tempnode;
    }
    else
    {
        tempnode->next=*head;
        *head=tempnode;
    }
}

void delete_at_last(struct node** head)
{
    struct node * tempnode=NULL;
    struct node * lastnode=*head;

    while(lastnode->next!=NULL)
    {
        tempnode=lastnode;
        lastnode=lastnode->next;
    }
    free(tempnode->next);
    tempnode->next=NULL;
}

void delete_at_frist(struct node** head)
{
    struct node * tempnode=NULL;
    struct node * lastnode=*head;
    tempnode=*head;
    *head=lastnode->next;
    free(tempnode);

}

void insert_at_pos(struct node** head)
{
    struct node* tempnode=createnode();
    struct node* lastnode;
    lastnode=*head;
    int count=0;
    int i,pos;
    while(lastnode->next!=NULL)
    {
        lastnode=lastnode->next;
        count++;
    }count++;

    printf("\nno of nodes %d\n",count);
    printf("enter the position\n ");
    scanf("%d",&pos);
    if(pos==1)
    {
        insertatfrist(head);

    }
    else if(pos==count+1)
    {
        create_link_list(head);
    }
    else if(pos<1&&pos>count)
    {
        printf("\ninvalid pos\n");
        return;
    }
    else
    {
        for(i=1;i<pos;i++)
        { printf("\ninvalid pos\n");
            lastnode=lastnode->next;
        }
        lastnode->next=tempnode;
        tempnode->next=lastnode->next;
    }

} 

void revers(struct node** head)
{
    struct node* nextnode;
    struct node* prenode;
    struct node* currentnode=*head;

    while (currentnode!=NULL)
    {
        nextnode=currentnode->next;
        currentnode->next=prenode;
        prenode=currentnode;
        currentnode=nextnode;

    }
    *head=prenode;
    
}

void revers_in_k(struct node** head,int k)

{

    struct node* nextnode;
    struct node* prenode;
    struct node* currentnode=*head;
    int c=0;

    while (currentnode!=NULL&&c<k)
    {
        nextnode=currentnode->next;
        currentnode->next=prenode;
        prenode=currentnode;
        currentnode=nextnode;
        c++;
    }

    if(nextnode!=NULL)
    {
      currentnode->next=revers_in_k(nextnode,k);
      return prenode;
    }


}