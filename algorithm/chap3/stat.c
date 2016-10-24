/*************************************************************************
	> File Name: stat.c
	> Author: 
	> Mail: 
	> Created Time: Mon Oct 24 20:45:48 2016
 ************************************************************************/

#include<stdio.h>
int main () {
    double score[100];
    int record[100];
    double sortArr[100];
    double input;
    int max = 0;
    int i = 0;
    int count = 0;
    for (int n = 0; n <= 100; n++) {
        score[n] = 0;
        record[n] = 0;
    }
    while(scanf("%lf",&input) == 1) {
        if (i == 0) {
            score[i] = input;
            record[i] = 1;
            i++;
        } else {
            int ok = 0;
            for (int m = 0; m < i; m++) {
                if (input == score[m]) {
                    record[m]++;
                    ok = 1;
                }
            }
            if (ok == 0) {
                score[i] = input;
                record[i] = 1;
                i++;
            }
        } 
    }
    for (int x = 0; x < i; x++) {
        if (record[x] > max) max = record[x];
    }
    for (int y = 0; y < i; y++) {
        if (record[y] == max) {
            sortArr[count++] = score[y];
        }
    }
    for (int z = 0; z < count; z++) {
        double temp = 0, a = 0, b = 0;
        for (int w = z; w < count; w++) {
            if (sortArr[z] > sortArr[w]) {
                a = sortArr[z];
                b = sortArr[w];
                temp = a;
                sortArr[z] = b;
                sortArr[w] = a;
            }
        }
    }
    for (int i = 0; i < count; i++) {
        printf("%lf\n", sortArr[i]);
    }
    printf("%d\n", max);
    return 0;
}
