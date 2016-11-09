/*************************************************************************
	> File Name: solve1.c
	> Author: 
	> Mail: 
	> Created Time: Sat 05 Nov 2016 02:32:39 PM HKT
 ************************************************************************/

#include<stdio.h>
#include<assert.h>
int main () {
    float a, b, c, d, e, f;
    float flag;
    scanf("%f", &a);
    scanf("%f", &b);
    scanf("%f", &c);
    scanf("%f", &d);
    scanf("%f", &e);
    scanf("%f", &f);
    flag = b*d - a*e;
    assert(flag > 0);
    
    printf("x=%lf, y=%lf\n", (f*b - c*e)/flag, (c*d - a*f)/flag);

    return 0;
}
