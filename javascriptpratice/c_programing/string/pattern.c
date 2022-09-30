#include<stdio.h>
#include<string.h>

void search(char* txt,char* pat)
{
    int lt=strlen(txt);
    int lp=strlen(pat);

    for(int i=0;i<lt-lp;i++)
    {int j;
        for( j=0;j<lp;i++)
        {
            if(txt[j+i]!=pat[j])
            {
                break;
            }
        }
        if(j==lp)
        {
            printf("pattern present in text");
        }
        {

        }
    }
}
void main()
{
     char txt[] = "AABAACAADAABAAABAA"; 
    char pat[] = "AABA";
    search(txt,pat);


}