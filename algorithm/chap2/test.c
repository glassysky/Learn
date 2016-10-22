#include<stdio.h>
int main() {
    double i;
    printf("%.1lf\n", i);
    for(i = 0; i != 1; i += 0.1) {
        printf("%.1lf\n", i);
        if (i == 10.0) {
            return 0;
        }
    }
    //if (10.0 == 10) {
    //    printf("equal\n");
    //}
    return 0;
}
