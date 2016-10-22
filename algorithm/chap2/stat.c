/*************************************************************************
	> File Name: stat.c
	> Author: 
	> Mail: 
	> Created Time: Sat Oct 22 23:46:08 2016
 ************************************************************************/

#include<stdio.h>
#include<stdlib.h>
int main () {
    FILE *fin, *fout;
    fin = fopen("stat.in", "rb");
    int n = 0;
    int arr[50];
    int count = 0;
    scanf("%d", &n);
    for (int i = 0; i <= n; i++) {
        fscanf(fin, "%d\n", &arr[i]);
    }
    for (int j = 0; j < n; j++) {
        if (arr[n] > arr[j]) {
            count++;
        }
    }
    printf("%d\n", count);
    fclose(fin);
    return 0;
}
