#include<iostream>
using namespace std;

bool isPrime(int number) {
    int div = 0;
    for(int i = 1; i <= number; i++) {
        if(number % i == 0) {
            div++;
        }
    }
    if(div == 2) {
        return true;
    } else {
        return false;
    };
}

main() {
    int n = 100;
    bool b = isPrime(n);

    if(b) {
        cout<<"Primo";
    }
}