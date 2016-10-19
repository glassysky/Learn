#include<stdio.h>
#include<math.h>
int main() {
   int n;
   const double pi = 4.0 * atan(1.0);
   scanf("%d", &n);
   printf("%.1lf\n", sin(n/180.0*pi));
   printf("%.1lf\n", cos(n/180.0*pi)); 
   return 0;
}
