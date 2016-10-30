/*************************************************************************
	> File Name: swap.c
	> Author: 
	> Mail: 
	> Created Time: Sun Oct 30 15:12:23 2016
 ************************************************************************/

#include<stdio.h>
void swap(int a, int b) {
    int t = a; a = b; b = t;
}

int main() {
    int a = 3, b = 4;
    swap(3, 4);
    printf("%d %d\n", a, b);
    return 0;
}
