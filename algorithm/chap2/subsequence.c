/*************************************************************************
	> File Name: subsequence.c
	> Author: 
	> Mail: 
	> Created Time: Sun Oct 23 13:07:22 2016
 ************************************************************************/

#include<stdio.h>
#include<math.h>
int main() {
    int n, m;
    double sum;
    scanf("%d%d", &n, &m);
    while(n <= m) {
        sum += (1.0 / pow(n, 2));
        n++;
    }
    printf("%.5lf\n", sum);
    return 0;
}
