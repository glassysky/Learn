/*************************************************************************
	> File Name: calculator.c
	> Author: 
	> Mail: 
	> Created Time: Sat Oct 29 11:46:42 2016
 ************************************************************************/

#include<stdio.h>
#include<string.h>
#include<stdlib.h>
#include<ctype.h>
int main() {
    char s[100];
    int l = 0;
    int a = 0, b = 0;
    int result = 0;
    int mark = 0;
    char sign;
    fgets(s, sizeof(s), stdin);
    l = strlen(s);
    for(int i = 0; i < l; i++) {
        if (mark != 0) { 
            if (isdigit(s[i])) {
                b = (int)(s[i] - '0') + b * 10;
            }
        } else {
            if (isdigit(s[i])) {
                a = (int)(s[i] - '0') + a * 10;
            } else {
                if (s[i] == '+' || s[i] == '-' || s[i] == '*') {
                    mark = i;
                    sign = s[i];
                }
            }
        }
    }
    switch(sign) {
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
    
    printf("%d\n", a);
    printf("%d\n", b);
    printf("%d\n", result);

    mark = 0;
    a = 0;
    b = 0;
    return 0;
}
