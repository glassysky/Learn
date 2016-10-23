/*************************************************************************
	> File Name: decimal.c
	> Author: 
	> Mail: 
	> Created Time: Sun Oct 23 13:19:36 2016
 ************************************************************************/

#include<stdio.h>
double div(int a, int b, int c) {
    double result = 0;
    result = (double)a/(double)b;
    return result;
}
int main() {
    int a, b, c;
    scanf("%d%d%d", &a, &b, &c);
    printf("%.*f\n", c, div(a, b, c));
    return 0;
}
