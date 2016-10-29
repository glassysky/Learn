/*************************************************************************
	> File Name: calculator.c
	> Author: 
	> Mail: 
	> Created Time: Sat Oct 29 11:46:42 2016
 ************************************************************************/

#include<stdio.h>
#include<string.h>
#include<stdlib.h>
int main() {
    char s[100];
    int l = 0;
    int a = 0, b = 0;
    int result = 0;
    int mark = 0;
    while(scanf("%s", s) != EOF) {
        printf("%s\n", s);
        l = strlen(s);
        for(int i = 0; i < l; i++) {
            if (mark != 0) {
                b = b * 10 + atoi(&s[i]);
                continue;
            } else {
                if (s[i] >= '0' && s[i] <= '9') {
                     a = a * 10 + atoi(&s[i]);
                } else {
                     mark = i;
                }
            }
        }
        switch(s[mark]) {
            case '+':
            result = a + b;
            break;
            case '-':
            result = a - b;
            break;
            case '*':
            result = a * b;
            break;
            default:
            break;
        }
        //printf("%d\n", result);
        a = 0;
        b = 0;
        result = 0;
        mark = 0;
        memset(s, 0, l);
    }
    return 0;
}
