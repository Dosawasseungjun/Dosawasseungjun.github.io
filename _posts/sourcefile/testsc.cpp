#include <iostream>
#include <vector>
#include <algorithm>
#include <string>
#include <queue>
#include <cmath>
using namespace std;
typedef long long ll;

int n, l[200001], r[200001], ans;
vector<int> adj[200001];

ll DFS(int here){
    ll sum = 0;
    for(int i=0;i<adj[here].size();i++){
        sum += DFS(adj[here][i]);
    }
    if(sum < (ll)l[here]){
        ++ans;
        return r[here];
    }
    return min(ll(r[here]), sum);
}

int main(){
    cin.tie(NULL); cout.tie(NULL); ios_base::sync_with_stdio(false);
 
    int test;
    cin >> test;
    while (test--){
        cin >> n;
        for(int i=2;i<=n;i++){
            int p;
            cin >> p;
            adj[p].push_back(i);
        }
        for(int i=1;i<=n;i++){
            cin >> l[i] >> r[i];
        }
        ans = 0;
        DFS(1);
        cout << ans << '\n';
        for(int i=1;i<=n;i++){
            adj[i].clear();
        }
        
    }
}