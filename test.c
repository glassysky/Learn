/*************************************************************************
	> File Name: test.c
	> Author: 
	> Mail: 
	> Created Time: Mon Jan  2 17:05:49 2017
 ************************************************************************/

#include<stdio.h>
long func() {
    long m ;
    for(m = 0; getchar() != '@';) {
        m++;
    }
    return m;
}
int main(){
    int a = 0;
    a = func();
    printf("%d\n", a);
}
