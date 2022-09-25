---
layout: posts
categories: ["Atcoder"]
title:  "앳코더 - 첫  앳코더"
tags : [upsolving, 앳코더]
---

AtCoder Beginner Contest 270 업솔빙
===============================

## AtCoder Beginner Contest 270 개요
앳코더는 처음 리뷰 및 업솔빙을 한다.        
문제가 깔끔하고 UI도 코포보다 더 좋은것 같다.ㅋㅋ 근데 첫 앳코더라 그런지 망치긴했다.       
아니 사실 망친건지 아닌지 기준도 잘모르긴한다. 첫 앳코더 결과는 3솔이였다.(3/8)       
사실 이전에 참가신청 하고 안한적이 있는데 코포는 참가신청하고 안하면 점수가 안떨어지는데 이건 그냥 나락간다.        
그래서 처음에 점수 0에서 5로 올랐다. ㅋㅋㅋㅋ 망한 아이디지만 계속 해서 실력을 키워보려고 한다.         
바닥부터 시작해야 진짜 실력 올라가는게 체감되니까 재밌다.         

## A - 1-2-4 Test(0:3)
이 문제 풀고 뭐지 앳코더? 이렇게 쉬운걸 낸다고?했다.       
그냥 bit OR 연산하면 된다... 아직도 뭔가 어이없다.        

```cpp
int a, b; cin >>a >> b;
    cout << (a|b);
```

## B - Hammer(0:9)
솔직히 쉬운데 귀찮았다.        
조건을 나누는 것이 실수하기 좋았지만 다행히 실수 안했다.       
x, y 부호가 다르면 x로 가면 끝
같으면 이제 z, y를 같은 논리로 비교하면 끝.        
```cpp
int x, y, z; cin >>x >>y >> z;
if(x*y<0){
    cout << abs(x);
}else{
    if(abs(x)<abs(y)) cout << abs(x);
    else{
        if(z*y<0) cout << abs(x)+2*abs(z);
        else{
            if(abs(z)<abs(y)) cout << abs(x);
            else cout << -1;
        }
    }
}
```

## C - Simple path(0:15)
여기까지 와 앳코더 문제 깔끔하고 쉽네 했다.(물론 다음부터 개털렸다.)         
문제가 그냥 웰노운같은 느낌이였고 BFS또는 DFS로 풀 수 있겠다 싶었다.       
sw(스위치)라는 bool형 변수를 전역으로 설정해두고 스위치가 켜지면 그때부터 올라오면서 답에 추가했다.         
마지막에 출력할 때 답을 reverse해서 출력하면 끝.        
```cpp
void dfs(int here, int parent){
    if(here==y) sw = true;
    
    for(int next : adj[here]){
        if(next==parent||sw) continue;
        dfs(next, here);
    }
    
    if(sw) ans.push_back(here);
}
```

## D - Stones (upsolving)
 이 문제 때문에 앳코더 업솔빙을 하기로 마음먹었다.        
 정말 뒤통수를 얻어 맞은 느낌이였다.        
 왜냐면 너무 그리디같았는데 DP였기 때문이다. 사실 그리디로 3번 틀렸으면 DP로 접근할 수도 있었는데 반례가 진짜 너무 
 안보여서 계속 그리디로 하다가 망했다.        
 굉장히 도움이 되는 문제였다. 최근에 바텀업 DP만 연습했는데 실제로 만나서 못푼게 너무 아쉽다 ㅠㅠ         
 ```cpp
cin >> n >> k;
for(int i=0;i<k;i++){
    cin >>A[i];
    dp[A[i]] = A[i];
}
for(int i=1;i<=n;i++){
    for(int j=0;j<k;j++){
        // i를 다 가져가면 좋겠는데 A[j]가져가면 상대는 dp[i-A[j]]를 가져간다.         
        // 그러니까 i-dp[i-A[j]]가 이번턴에 내가 가져갈 수 있는 최대다.
        if(i>=A[j]) dp[i] = max(dp[i], i-dp[i-A[j]]);
    }
}
cout << dp[n];
 ```

## E - Apple Baskets on Circle(upsolving)
차라리 D말고 이걸 잡을걸 그랬나? 싶었다 그때는....          
나머지 연산느낌이 나서 열심히 했는데 틀렸다 ㅠㅠ 반례 찾기도 힘들었다.        
그리고 에디토리얼 보는데 이게 왜 이분탐색? 이분탐색으로 풀 수 있는 문제들은 좀 숨어있는 것 같다.        
물론 웰노운인데 내가 모른걸 수도 있지만 ㅠㅠ 그냥 내 기준 원탑이다 어려운거...        
일단 범위관찰만 해도 NlogN 또는 NlogK로도 풀 수있다는 걸 알 수 있다.        
근데 나는 k가 워낙에 크니까 이를 log로 줄인다는 생각을 못했다 ㅠㅠ.         
일단 k를 커버할라면 몇바퀴 돌아야 하는지를 계산하고 처리할 수 있을만큼 처리한 후에 n개를 쭉 돌면서 하나씩 빼주면 된다.        
그 k cover를 위해 몇바퀴 돌아야하는지를 이분탐색으로 logK만에 찾을 수 있다.        
```cpp
ll l = 0, r = 1e12+1;
while (l+1<r) {
    ll mid = (l+r)>>1;
    ll sum = 0;
    for(int i=0;i<n;i++){
        sum += min(A[i], mid);
    }
    if(sum<=k) l = mid;
    else r = mid;
}
    
for(int i=0;i<n;i++){
    k -= min(A[i], l);
    A[i] -= min(A[i], l);
}
int i=0;
while (k) {
    if(A[i]){
        A[i++]--;
        k--;
    }else i++;
}
for(int i=0;i<n;i++) cout << A[i] << ' ';
```
몇 바퀴 돌지를 먼저 찾는게 중요했다...          


## F - Transportation(upsolving)
여기부터는 대회 땐 아예 건들지도 못했는데 맘에 드는 set이라서 풀어보려고 한다.        
내가 코포를 하면 할 수록 느끼는 것은 엄청 어려운 알고리즘은 잘 안나온다는 것이다.         
idea와 정확성이 정말 중요하다.        
idea를 최대한 많이 배워가기 위해 업솔빙도 최대한 많이 하는게 좋을 것 같다!!         

이 문제는 보니까 DP같았다. 하지만 아니였다 ㅋㅋㅋㅋ         
이 문제도 너무 좋은 문제같다. 공항을 통해 가는 것은 N+1을 경유한다고 가정하고 다리로 가는건 N+2를 경유한다고 가정한다.        
그러면 모든 관계를 그래프의 간선으로 표현할 수 있고 이 그래프에서 최소 스패닝 트리를 찾으면 되는 것이다 ㄷㄷ 재밌는 문제였다.         
```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <string>
#include <cstring>
#include <stack>
#include <queue>
#include <cmath>
#include <set>
#include <map>
#include <cassert>
#define fast_io cin.tie(NULL); ios_base::sync_with_stdio(false);
using namespace std;
typedef long long ll;
typedef pair<int, int> pii;
typedef pair<ll, ll> pll;

const ll INF = 1e15;
const int MAX = 2e5+4;
ll n, m;
vector<int> X, Y;
vector<ll> Z, A, B;
vector<pll> adj[MAX];

struct DisjointSet{
    vector<int> parent, rank;
    DisjointSet(int n) : parent(n+1), rank(n+1, 1){
        for(int i=1;i<=n;i++) parent[i] = i;
    }
    int find(int u){
        if(parent[u]==u) return u;
        return parent[u] = find(parent[u]);
    }
    void merge(int u, int v){
        u = find(u); v = find(v);
        if(u==v) return;
        
        if(rank[u]<rank[v]) swap(u, v);
        parent[v] = u;
        rank[u] += rank[v];
        rank[v] = 0;
    }
};

ll kruskal(){
    ll ret =0;
    vector<pair<ll, pll>> edges;
    for(int i=1;i<=n+2;i++){
        for(pll next : adj[i]){
            edges.push_back({next.second, {i, next.first}});
        }
    }
    sort(edges.begin(), edges.end());
    DisjointSet dset(n+2);
    set<ll> ss;
    for(int i=0;i<edges.size();i++){
        ll s = edges[i].second.first;
        ll e = edges[i].second.second;
        ll c = edges[i].first;
        
        if(dset.find(s)==dset.find(e)) continue;
        dset.merge(s, e);
        if(s<=n) ss.insert(s);
        if(e<=n) ss.insert(e);
        ret += c;
    }
    if(ss.size()<n) ret = INF;
    
    return ret;
}

int main(){
    fast_io
    cin >> n >> m;
    X = Y = vector<int> (n+1);
    Z = A = B = vector<ll> (m+1);
    for(int i=1;i<=n;i++) cin >> X[i];
    for(int i=1;i<=n;i++) cin >> Y[i];
    for(int i=1;i<=m;i++){
        cin >> A[i] >> B[i] >> Z[i];
    }
    
    ll res = INF;
    for(int iter=0;iter<4;iter++){
        if(iter&1) for(int i=1;i<=n;i++) adj[i].push_back({n+1, X[i]});
        if(iter&2) for(int i=1;i<=n;i++) adj[i].push_back({n+2, Y[i]});
        for(int i=1;i<=m;i++) adj[A[i]].push_back({B[i], Z[i]});
        res = min(kruskal(), res);
        for(int i=1;i<=n;i++) adj[i].clear();
    }
    
    cout << res;
}

```


## E - 포기
E도 해볼까 했는데 upsolving 하다가 지쳤다.. ㅋㅋ          
곱창먹으러 가려고 한다. 내가 대회때 여기까지 풀 수 있는 실력이 빨리 됐으면 좋겠다~ ㅎㅎ          
