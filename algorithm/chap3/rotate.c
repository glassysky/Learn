/*************************************************************************
	> File Name: rotate.c
	> Author: 
	> Mail: 
	> Created Time: Sat Oct 29 13:42:52 2016
 ************************************************************************/

#include<stdio.h>
int main() {
    char s[100][100];
    char a;
    while((a = getchar()) != EOF) {
        if (a == '\n') {
            printf("space\n");
        }
        printf("%c", a);
    }
    return 0;
}
