/*************************************************************************
	> File Name: harmony.c
	> Author: 
	> Mail: 
	> Created Time: Sun Oct 23 10:13:42 2016
 ************************************************************************/

#include<stdio.h>
int main() {
    int number;
    double sum;
    scanf("%d", &number);
    for (int i = 1; i <= number; i++) {
       sum = sum + 1.0/i;
    }
    printf("%.3lf\n", sum);
    return 0;
}
