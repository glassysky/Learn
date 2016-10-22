/*************************************************************************
	> File Name: triangle.c
	> Author: 
	> Mail: 
	> Created Time: Sat Oct 22 23:30:35 2016
 ************************************************************************/

#include<stdio.h>
int main() {
    int line;
    int lspace = 0;
    scanf("%d", &line);
    for (int i = 0; i < line; i++){
        for(int j = 0; j < lspace; j++) {
            printf(" ");
        }
        for(int k = 0; k < 2*(line - i)-1; k++) {
            printf("#");
        }
        printf("\n");
        lspace++;
    }
    return 0;
}
