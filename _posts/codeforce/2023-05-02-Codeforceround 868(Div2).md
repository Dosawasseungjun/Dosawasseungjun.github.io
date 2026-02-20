---
layout: post
categories: ["Codeforces"]
title:  "코드포스 - 새로 시작"
tags : [upsolving, 코드포스]
use_math : true
---

# Codeforce round 868 (Div.2)

# 개요

이제 노션에 있는 내용을 마크다운으로 변환하여 올리기 때문에  수식 등을 더 잘 쓸 수 있을 것 같다. 코드포스를 잘하고 싶지만 항상 그렇게 잘하진 않는 것 같다(그냥 내 실력이 많이 딸린다). 실력이 부족한 만큼 앞으로는 업솔빙은 무조건 5문제를 할 것이다. 6월에는 알바를 그만두고 코드포스에 집중 할 것이다. 앞으로 화이팅!!

# A. A-characteristic (0:15)

꽤나 오래 걸렸다. 하지만 쉬운 문제이기도 하다.

이 문제의 핵심은 아래와 같다. 

<aside>
💡 -1과 1의 각 순서는 상관이 없고 개수만 영향을 준다.

</aside>

1. 각 숫자의 갯수가 x라고 하면 조건을 만족하는 식의 개수는  $\frac{x(x-1)}{2}$이다. 
2. 그러면 1의 개수를 p, -1의 개수를 r이라고 하면
3. $\frac{p(p-1)}{2}+\frac{r(r-1)}{2} = k$인 p, r이 있으면 정답인 것이다. 

```cpp
#include <bits/stdc++.h>
#define fast_io cin.tie(NULL); ios_base::sync_with_stdio(false);
using namespace std;
typedef long long ll;
typedef pair<int, int> pii;
typedef pair<ll, ll> pll;
typedef tuple<int, int, int> tiii;
#define xx first
#define yy second
 
int main() {
    fast_io
    int tt; cin >> tt;
    while (tt--) {
        int n, k; cin >> n >> k;
				//사실 이부분은 필요가 없다. 
        if(!k){
            if(n==2){
                cout << "YES\n";
                cout << "1 -1\n";
                continue;
            }else{
                cout << "NO\n";
                continue;
            }
        }
        bool ok=false;
        for(int i=0;i<=n/2+1;i++){
            int p = i;
            int r = n-i;
            if(p*(p-1)/2+r*(r-1)/2==k){
                cout << "YES\n";
                for(int i=0;i<p;i++) cout << "1 ";
                for(int i=0;i<r;i++) cout << "-1 ";
                cout << "\n";
                ok = true;
                break;
            }
        }
        if(ok) continue;
        else cout << "NO\n";
    }
}
```

# B. Sort with Step (0:26)

A보단 빨리 컷을 냈다. 처음엔 순열이 나오고 swap연산이 나오길래 최근 공부를 한 순열 싸이클 분할이 나오는 줄 알았다. 하지만 훨씬 쉬운 내용이었다. 

1, 1+k, 1+2*k

2, 2+k, 2+2*k

k-1, k-1 +k , k-1+2*k

의 규칙으로 확인했을 때 제자리에 없는 것의 개수를 센다. 

<aside>
💡 error가 난 것의 개수가 없으면 0, 2개면 1, 나머지면 -1을 출력한다.

</aside>

```cpp
#include <bits/stdc++.h>
#define fast_io cin.tie(NULL); ios_base::sync_with_stdio(false);
using namespace std;
typedef long long ll;
typedef pair<int, int> pii;
typedef pair<ll, ll> pll;
typedef tuple<int, int, int> tiii;
#define xx first
#define yy second
 
int main() {
    fast_io
    int tt; cin >> tt;
    while (tt--) {
        int n, k; cin >> n >> k;
        vector<int> p(n+1);
        for(int i=1;i<=n;i++) cin >> p[i];
        
        int error = 0;
        for(int i=1;i<=k;i++){
            for(int j=i;j<=n;j+=k){
                if(!((p[j]-i)%k)) continue;
                error++;
            }
        }
        if(!error) cout << "0\n";
        else if(error==2) cout << "1\n";
        else cout << "-1\n";
    }
}
```

# C. Strongly Composite (0:55)

이 문제는 문제 이해는 빨랐는데 구현 과정에서 시간초과로 고생을 한 문제이다. 

1. 일단 a배열에 있는 모든 소인수를 구한다. → map에 각 소인수가 몇번 나왔는지 저장했다. 
2. 각 소인수가 2개 이상이라면 2개만 사용해도 b요소 하나를 만들 수 있다. 
3. 하지만 소인수의 종류가 다른것이 2개있으면 안되고 3개 있어야한다. 
4. 따라서 greedy하게 숫자가 같은 소인수의 개수는 2개씩 묶고 남은것은 3개씩(나머지는 버리고) 묶어서 처리한다. 

소인수를 구하는 과정에서 소수를 미리 구해두고 모든 소수를 검사하니, 소수가 60만개가 넘어서 시간초과가 났다. 이를 $\sqrt{a[i]}$의 시간 복잡도로 검사하도록 바꾸고 map을 이용하여 최적화하니 AC를 맞을 수 있었다. 

```cpp
#include <bits/stdc++.h>
#define fast_io cin.tie(NULL); ios_base::sync_with_stdio(false);
using namespace std;
typedef long long ll;
typedef pair<int, int> pii;
typedef pair<ll, ll> pll;
typedef tuple<int, int, int> tiii;
#define xx first
#define yy second

int main() {
    fast_io
    int tt; cin >> tt;
    while (tt--) {
        int n; cin >> n;
        vector<int> a(n);
        int rest = 0;
        map<ll, ll> mp;
        for(int it=0;it<n;it++){
            cin >> a[it];
            int tmp = a[it];
            for(ll i=2;i==2||i*i<=tmp;i++){
                if(tmp%i) continue;
                if(!(tmp%i)) while(!(tmp%i)){
                    tmp /= i;
                    mp[i]++;
                }
            }
            if(tmp!=1) mp[tmp]++;
        }
        int res = 0;
        for(auto it = mp.begin();it!=mp.end();it++){
            ll k = it->second;
            res += k/2;
            rest += k%2;
        }
        res += rest/3;
        cout << res << '\n';
    }
}
```

# D. Unique Palindromes(Upsolving)

나는 팰린드롬만 보면 지레 겁을 먹는다. 이제는 팰린드롬에 쫄지 않도록 열심히 공부를 해야겠다. 

이 문제를 선택하지 않고 E번으로 넘어간 이유는 이 문제의 호흡이 꽤 길어서 해석하기 싫었기 때문이다. 그리고 당시 푼 사람 수도 200명 이내로 매우 적었따.ㅠ.ㅠ

- 문제이해 과정
    1. p(t)는 string t의 서로다른 팰린드롬 substring의 개수이다. 
    2. p(s, m) = p(t) 라고 하면 t = s[1….m] 이다. 
        
        즉 , s의 크기가 m인 prefix가 t라는 뜻이다. 
        
    3. $p(s, x_i) = c_i$ 팰린드롬인 substring의 개수가 $c_i$ 이다. 
    4. 위 식에서 $x_i$와 $c_i$의 쌍을 condition이라고 하는데
    5. 이 때, k개의 컨디션을 가진 string 을 찾는다. 

위에서 본것 처럼 꽤나 문제 이해가 어려웠다. 하지만 차근차근 본다면 항상 할 수 있다는 생각을 가져야하는데 그게 잘 안된다. 시간 제한이 있기 때문에 그런 생각이 잘 안드는 것 같다. 사실 저렇게 천천히 쓰면서도 이해 하는데 5분~10분 밖에 안걸리는데 대회에서 지레 겁을 먹는 습관은 좀 고치는게 좋을 것 같다. 

먼저 부분집합이 팰린드롬이 되는 경우를 관찰해보자.

1. 자기 자신 a는 무조건 팰린드롬이니 1이다. 
2. 다른 것들이 모이면 abcd 글자수 만큼이 팰린드롬이다. 
3. aaaaa같은 것들이 모이면 모든 부분집합이 팰린드롬이니까 $n$ 이 팰린드롬인 부분집합의 개수이다. 
    - a, aa, aaa, aaaa, aaaaa이렇게 총 5개이다.
4. abaaba 이런식이면 팰린드롬인 것이 개수는 3+1+1+1이 된다. 

위 내용을 통틀어 확인해보면 글자수가 $n$이라고하면 팰린드롬인 부분집합인 것의 개수 $x$는 $x ≤ n$이다. 

```cpp
//그래서
if (c[0] < 3 || c[0] > x[0]) {//n은 3보다 크기 때문에, 글자수가 x인곳에서 c가 더 클수는 없음
      cout << "NO\n";
      continue;
}
```

2, 3번 특징 때문에 매번 다른 글자수를 쓸 필요없이 그냥 같은걸 추가하므로써 같은 효과를 낼 수 있다. 

**ex) C = 4 N = 6**

**abcdab 이런 식으로 만들 수 있음.  (a, b, c, d)**

**aabcab (a, aa, b, c) 이것도 가능**

1. 일단 n도 C도 3보단 크기 때문에 3보다 C-3개 만큼 a를 넣는다. 
2. 그다음엔 abc를 넣는다고 하면 3개의 팰린드롬 부분집합이 만들어진다.  +(….a,  c, d)
3. 그다음엔 abcabc를 계속돌리면 아무것도 만들어지지 않는다. 따라서 정확히 C개를 맞출 수 있다. 

```cpp
#include <bits/stdc++.h>
#define fast_io cin.tie(NULL); ios_base::sync_with_stdio(false);
using namespace std;
typedef long long ll;
typedef pair<int, int> pii;
typedef pair<ll, ll> pll;
typedef tuple<int, int, int> tiii;
#define xx first
#define yy second

int main() {
    fast_io
    int tt; cin >> tt;
    while (tt--) {
        int n, k; cin >> n >> k;
        vector<int> x(k), c(k);
        for(int i=0;i<k;i++) cin >> x[i];
        for(int i=0;i<k;i++) cin >> c[i];
        if(c[0]<3||c[0]>x[0]){
            cout << "NO\n";
            continue;
        }
        string res;
        char cur = 'a';
        for(int i=0;i<c[0]-3;i++) res.push_back(cur);
        for(int i=c[0]-3;i<x[0];i++){
            res.push_back(cur++);
            if(cur=='d') cur = 'a';
        }
        
        bool ok = true;
        for(int i=1;i<k;i++){
            int dx = x[i]-x[i-1];
            int dc = c[i]-c[i-1];
            
            if(dc > dx){
                ok = false;
                break;
            }
            
            for(int j=0;j<dc;j++){  //새로운거 추가
                res.push_back('z'-i);
            }
            for(int j=dc;j<dx;j++){
                res.push_back(cur++);
                if(cur=='d') cur = 'a';
            }
        }
        if(ok){
            cout << "YES\n";
            cout << res << '\n';
        }else{
            cout << "NO\n";
        }
        
    }
}
```

상당히 어렵고 팰린드롬의 성질의 정수를 느낄 수 있었다. 다양한 팰린드롬의 성질을 모두 신경 써야한다. 

# E. Removing Graph (-4, Upsolving)

대회 때 D를 버리고 본 문제이다. 내가 백준에서 게임이론 관련 문제를 많이 풀어 봤기 때문에 꽤나 자신있었는데(실제로 잘 풀었다고 생각함) 이 문제는 내 생각보다 훨씬 더 어려운 문제였다. 그 이유는 

 

<aside>
💡 사이클이 있다가 없어지고 선형 정점모임이 생길 수 있다.

</aside>

위의 이유가 이 문제를 , grundy수를 구하기 어렵게 만들었다. 처음에는 그냥 사이클에 포함된 정점의 개수에서 아무거나 뺄 수 있다고 생각을 하고 문제를 해결했다. 즉, 각 사이클을 님게임의 돌더미라고 생각을 한 것이다. 

하지만 아쉽게도 위 사실을 간과한 덕분에 테스트 케이스 9번을 통과하지 못했다..

먼저 결론은 내가 푼 것보다 훨씬 쉬운데 아래와 같다. 

<aside>
💡 사이클의 크기 X가 r+l-1보다 작으면 $\lfloor{\frac{X}{l}}\rfloor$, 나머지 경우는 0이 그런디수가 된다.

</aside>

위 내용을 증명하기가 상당히 까다로웠는데 

$cycle[x] = mex(chain[x-r], chain[x-r+1], — chain[x-l])$

위 처럼 되기 때문에 

𝑐ℎ𝑎𝑖𝑛[𝑎]⊕𝑐ℎ𝑎𝑖𝑛[𝑏]≤𝑐ℎ𝑎𝑖𝑛[𝑎]+𝑐ℎ𝑎𝑖𝑛[𝑏]=⌊$\frac{a}{l}$⌋+⌊$\frac{b}{l}$⌋≤⌊$\frac{a+b}{l}$⌋≤⌊$\frac{x-l}{l}$⌋=⌊$\frac{x}{l}$⌋−1

이런 식이 만들어진다. 따라서 r+l-1보다 작으면 무조건 $\lfloor{\frac{X}{l}}\rfloor$, 나머지는 0이 되는 것이다. 

chain과 cycle의 관계를 이해하는 것이 매우 중요한 문제였다. 

```cpp
#include <bits/stdc++.h>
#define fast_io cin.tie(NULL); ios_base::sync_with_stdio(false);
using namespace std;
typedef long long ll;
typedef pair<int, int> pii;
typedef pair<ll, ll> pll;
typedef tuple<int, int, int> tiii;
#define xx first
#define yy second

const int MAX = 2e5+1;
vector<int> adj[MAX];
bool visited[MAX];

int dfs(int here){
    int ret = 1;
    visited[here] = true;
    for(int nxt : adj[here]){
        if(!visited[nxt]) ret += dfs(nxt);
    }
    return ret;
}

int main() {
    fast_io
    int n, l, r; cin >> n >> l >> r;
    for(int i=0;i<n;i++){
        int u, v; cin >> u >> v;
        adj[u].push_back(v);
        adj[v].push_back(u);
    }
    vector<int> chunk;
    for(int i=1;i<=n;i++) if(!visited[i]) chunk.push_back(dfs(i));
    int G = 0;
    for(int X : chunk){
        if(X<=r+l-1) G ^= X/l;
        else G ^= 0;
    }
    
    if(G) cout << "Alice\n";
    else cout << "Bob\n";
}
```