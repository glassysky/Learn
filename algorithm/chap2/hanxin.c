/*************************************************************************
	> File Name: hanxin.c
	> Author: 
	> Mail: 
	> Created Time: Sat Oct 22 23:19:16 2016
 ************************************************************************/

#include<stdio.h>
int main() {
    int a, b, c;
    scanf("%d%d%d", &a, &b, &c);
    for (int i = 10; i <= 100; i++) {
        if (i % 3 == a && i % 5 == b && i % 7 == c) {
            printf("%d\n", i);
            return 0;
        }
    }
    printf("NO answer\n");
    return 0;
}
