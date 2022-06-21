#include <iostream>
#include <vector>
#include <algorithm>
#include <string>
#include <queue>
#include <cmath>
#include <set>
#define fast_io cin.tie(NULL); cout.tie(NULL); ios_base::sync_with_stdio(false);
using namespace std;
typedef long long ll;

int n,q;
vector<ll> vol;
vector<ll> mintime;

int main(){
    fast_io;
    cin >> n;
    vol = vector<ll> (n+1);
    mintime = vector<ll> (n+1);
    ll sum = 0;
    for(int i=1;i<=n;i++){
        cin >> vol[i];
    }
    mintime[0] =0;   
    for(int i=1;i<=n;i++){
        sum += vol[i];
         // i개 썼을 떄 i개 다 채울라면 몇초 걸림? 
         // 앞에께 크면 앞에꺼 만큼 걸리고, 뒤에께 크면 앞에서 좀 흘러나온거 받음
        // 내림 생각해서 올림처리 해줌
        mintime[i] = max(mintime[i-1], (sum+i-1)/i);   
    }
    cin >> q;
    while (q--){
        ll query;
        cin >> query;
        ll rst = (sum+query-1)/query;
        if(rst<=n&&mintime[rst]<=query) cout << rst << '\n';
        else cout << -1 << '\n';
    }
    
    
}
