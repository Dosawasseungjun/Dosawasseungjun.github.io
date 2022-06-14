#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

const int BIGNUM = 987654321;
int n;
vector<int> dp(50001, 0);

int slove(int num){
    int &ret = dp[num];
    if(ret) return ret;
    ret = BIGNUM;
    for(int i=1;i*i<num;i++){
        ret = min(ret, 1+slove(num-i*i));
    }
    return ret;
}

int main(){
    cin.tie(NULL); cout.tie(NULL); ios_base::sync_with_stdio(false);

    cin >> n;
    for(int i=1;i*i<=50000;i++){
        dp[i*i] = 1; 
    }
    cout << slove(n);
}