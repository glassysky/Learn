/*************************************************************************
	> File Name: word.c
	> Author: 
	> Mail: 
	> Created Time: Mon Oct 24 22:42:09 2016
 ************************************************************************/

#include<stdio.h>
#include<string.h>
#define MAXN 5000 + 10
char buf[MAXN], s[MAXN];
int main() {
    int length = 0;
    int c;
    int wordCount = 0, spaceCount = 0;
    int cspace = 0;
    FILE *fin, *fout;
    fin = fopen("word.in", "rb");
    fout = fopen("word.out", "wb");
    do {
        c = fgetc(fin);
        if (feof(fin)) {
            break;
        }
        if (c != ' ') {
            cspace = 0;
            wordCount++;
            printf("%c", c);
        } else {
            if (cspace != 1) {
                cspace = 1;
                spaceCount++;
            }
        }
    }while(1);
    fclose(fin);
    fclose(fout);
    printf("%.2lf", (double)(wordCount - 1)/(spaceCount + 1));
    return 0;
}

