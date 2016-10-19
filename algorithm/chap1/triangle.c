#include<stdio.h>
#include<math.h>
#include <stdlib.h>
int main() {
    int a, b, c;
    scanf("%d%d%d", &a, &b, &c);
    if (a+b>c && a+c>b && b+c>a && abs(a-b)<c && abs(a-c)<b && abs(b-c)<a) {
        if (pow(a, 2)+pow(b, 2)==pow(c, 2) || pow(a, 2)+pow(c, 2)==pow(b, 2) || pow(c, 2)+pow(b, 2)==pow(a, 2)) {
            printf("yes\n");
        } else {
            printf("no\n");
        }
    } else {
       printf("not a triangle\n");
    } 
}
