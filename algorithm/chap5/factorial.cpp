/*************************************************************************
	> File Name: factorial.cpp
	> Author: 
	> Mail: 
	> Created Time: Sun 06 Nov 2016 08:28:51 PM HKT
 ************************************************************************/

#include<iostream>
#include<stdio.h>
#include<cstring>
using namespace std;
const int maxn = 1000;
struct bign {
    int len, s[maxn];
    bign() {
        memset(s, 0, sizeof(s));
        len = 1;
    }
    bign operator = (const char* num) {
        len = strlen(num);
        for(int i = 0; i < len; i++) {
            s[i] = num[len-i-1] - '0';
        }
        return *this;
    }
    bign operator = (int num) {
        char s[maxn];
        sprintf(s, "%d", num);
        *this = s;
        return *this;
    }
    bign(int num) { *this = num; }
    bign(const char* num) { *this = num; }
    string str() const {
        string res = "";
        for(int i = 0; i < len; i++) {
            res = (char)(s[i] + '0') + res;
        }
        if(res == "") {
            res = "0";
        }
        return res;
    }
};
istream& operator >> (istream &in, bign& x) {
    string s;
    in >> s;
    x = s.c_str();
    return in;
}
ostream& operator << (ostream &out, const bign& x) {
    out << x.str();
    return out;
}
int main() {
    bign x = 123123123;
    cout << x;
}
