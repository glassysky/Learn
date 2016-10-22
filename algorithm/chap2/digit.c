#include<stdio.h>
int main() {
    int number;
    int digit = 0;
    scanf("%d", &number);
    while (number != 0)  {
        number = number/10;
        digit++;
    }
    printf("%d\n", digit);
    return 0;
}
