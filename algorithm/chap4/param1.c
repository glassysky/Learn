/*************************************************************************
	> File Name: param1.c
	> Author: 
	> Mail: 
	> Created Time: Sat 05 Nov 2016 03:03:19 PM HKT
 ************************************************************************/

#include<stdio.h>
int number = 0;
int f() {
    number++;
    return number;
}
int g() {

}
int h() {

}
int main () {
    int count;
    int a, b;
    int test;
    a = f();
    b = f();
    printf("a=%d, b=%d\n", a, b);
    return 0;
}

