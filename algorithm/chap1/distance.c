#include<stdio.h>
#include<math.h>
int main () {
    double x1, x2, y1, y2;
    scanf("%lf%lf%lf%lf", &x1, &x2, &y1, &y2);
    printf("%.4lf", sqrt(pow((x1-x2),2)+pow((y1-y2), 2))); 
    return 0;
} 

