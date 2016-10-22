/*************************************************************************
	> File Name: daffodil.c
	> Author: 
	> Mail: 
	> Created Time: Sat Oct 22 22:56:24 2016
 ************************************************************************/

#include<stdio.h>
#include<math.h>
int main() {
    FILE * fout;
    fout = fopen("daffodil.out", "wb");
    int ones, tens, hundreds;
    for (hundreds = 1; hundreds < 10; hundreds++) {
        for (tens = 0; tens < 10; tens++) {
            for (ones = 0; ones < 10; ones++) {
                if ((hundreds*100 + tens*10 + ones) == (pow(hundreds, 3) + pow(tens, 3) + pow(ones, 3))) {
                    fprintf(fout, "%d\n", hundreds*100 + tens*10 + ones);
                }
            }
        }
    }
    fclose(fout);
    return 0;
}
