/*************************************************************************
	> File Name: base2.c
	> Author: 
	> Mail: 
	> Created Time: Sun Oct 30 11:15:27 2016
 ************************************************************************/

#include<stdio.h>
#include<math.h>
int main() {
    int b, n;
    int result = 0;
    int mod = 0;
    int count = 0;
    scanf("%d", &b);
    scanf("%d", &n);
    while (b > 0) {
        mod = b % 10;
        b = b / 10;
        result += mod * pow(n, count++); 
    }
    printf("%d\n", result);
    return 0;
}
