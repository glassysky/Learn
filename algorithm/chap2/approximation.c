/*************************************************************************
	> File Name: approximation.c
	> Author: 
	> Mail: 
	> Created Time: Sun Oct 23 10:17:02 2016
 ************************************************************************/

#include<stdio.h>
#include<math.h>
int main() {
    const double pi = 4.0 * atan(1.0);
    double sum = 0;
    int count = 1;
    int signal = 1;
    while(1.0 / (2 * count - 1) > 0.000001) {
        sum += (1.0 / (signal * (2 * count - 1)));
        count++;
        signal = -signal;
    }
    printf("sum is %.3lf\n", sum);
    printf("π/4 is %.3lf\n", pi/4.0);
    return 0;
}
