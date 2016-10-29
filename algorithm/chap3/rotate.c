/*************************************************************************
	> File Name: rotate.c
	> Author: 
	> Mail: 
	> Created Time: Sat Oct 29 13:42:52 2016
 ************************************************************************/

#include<stdio.h>
#include<string.h>
#define MAXN 10
int main() {
    char s[MAXN][MAXN];
    char a;
    int count = 0;
    int mark = 0;
    int x = 0, y = 0;
    for (int i = 0; i < 10; i++) {
        memset(s[i], 0, 10);
    }
    while((a = getchar()) != EOF) {
        if (a >= 'a' && a <= 'z') {
            s[x][y++] = a;
            if (mark == 0) {
                count++;
            }
        }
        if (a == '\n') {
            x++;
            y = 0;
            mark = 1;
        }
    }
    for (int i = 0; i < count; i++) {
        for (int j = 0; j < count; j++) {
            if (s[i][j] >= 'a' && s[i][j] <= 'z') {
                if (j == count - 1) {
                    printf(" %c\n", s[j][2-i]);
                } else {
                    printf(" %c", s[j][2-i]);
                }
            } else {
                printf("%d", s[i][j]);
            }
        }
    }
    return 0;
}
