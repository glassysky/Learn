/*************************************************************************
	> File Name: test.c
	> Author: 
	> Mail: 
	> Created Time: Mon Jan  9 16:37:32 2017
 ************************************************************************/

#include<stdio.h>
    static int z = 4;
    int fun(int x) {
        int y = 1;
        z++;
        ++y;
        return (x+y+z);
    }
    int main () {
        int i, x = 3;
        for(i = 1;i < 3;i++) {
            printf("%d\n", fun(x++));
            printf("%d\n", z);
        }
        return 0;
    }
