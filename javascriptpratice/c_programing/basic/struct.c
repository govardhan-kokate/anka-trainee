#include <stdio.h> 

void LetterCapitalize(char str[]) { 
  int i=0;
while (i<=strlen(str)-1){
    if ((str[i-1]==' ')||(i==0))
        printf("%c",str[i]-32);
        else
        printf("%c",str[i]);
        
    i++;
}

}

int main(void) { 
  
  // keep this function call here
  LetterCapitalize(gets(stdin));
  return 0;
    
}
