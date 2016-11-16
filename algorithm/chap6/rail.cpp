/*************************************************************************
	> File Name: rail.cpp
	> Author: 
	> Mail: 
	> Created Time: Mon 14 Nov 2016 03:12:04 PM HKT
 ************************************************************************/

#include<iostream>
#include<cstdio>
#include<stack>
using namespace std;
const int MAXN = 1000 + 10;
int n, target[MAXN];

int main() {
    while(scanf("%d", &n) == 1) {
        stack<int> s;
        int A = 1, B = 1;
        for(int i = 1; i <= n; i++) {
            scanf("%d", &target[i]);
        }
        int ok = 1;
        while(B <= n) {
            if(A == target[B]) { A++; B++; }
            else if(!s.empty() && s.top() == target[B]) { s.pop(); B++; }
            else if(A <= n) s.push(A++);
            else { ok = 0; break; }
        }
        printf("%s\n", ok ? "yes" : "no");
    }
    return 0;
}

