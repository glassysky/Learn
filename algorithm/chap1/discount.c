#include<stdio.h>
int main() {
    const int price = 95;
    int number;
    scanf("%d", &number);
    if (number*price >= 300) {
       printf("%lf\n", number*price*0.85); 
    } else {
       printf("%d\n", number * price);
    }
    return 0;
}
