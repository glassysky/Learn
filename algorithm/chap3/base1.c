/*************************************************************************
	> File Name: base1.c
	> Author: 
	> Mail: 
	> Created Time: Sat Oct 29 16:00:01 2016
 ************************************************************************/
#include<stdio.h>
int main() {
    int b, n;
    int mod, digit;
    int num[100] = {0};
    int count = 0; 

    scanf("%d", &b);
    scanf("%d", &n);
    while (b > 0) {
        digit = b / n;
        mod = b % n;
        b = digit;
        
        num[count++] = mod;

    }
    for (int i = 0; i < count; i++) {
        printf("%d", num[count - i - 1]);
    }
    return 0;
}
