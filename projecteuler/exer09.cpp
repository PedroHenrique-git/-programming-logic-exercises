#include<iostream>
using namespace std;

bool isPrime(int n) {
    int div = 0;
    for(int i = 1; i <= n; i++) {
        if(n % i == 0) {
            div++;
        }
    }
    if(div == 2) {
        return true;
    } else {
        return false;
    };
}

int main() {
    int n = 100;
    bool b = isPrime(n);

    if(b) {
        cout<<"Primo";
    }            
    return 0;
}