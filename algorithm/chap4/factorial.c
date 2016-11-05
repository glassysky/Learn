/*************************************************************************
	> File Name: factorial.c
	> Author: 
	> Mail: 
	> Created Time: Sun Oct 30 16:21:34 2016
 ************************************************************************/

#include<stdio.h>
int f(int n) {
    return n == 0 ? 1 : f(n-1)*n;
}

int main() {
    printf("%d\n", f(100000000));
    return 0;
}
