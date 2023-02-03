---
layout: posts
categories: ["Codeforces"]
title:  "코드포스 - 블루 좀 가자"
tags : [upsolving, 코드포스]
---

Codeforces#846, TypeDB Foreces 2023, Codeforces#848 업솔빙
===============================

## Codeforces#846, TypeDB Foreces 2023, Codeforces#848 업솔빙
정말 오랜만이다. 업솔빙을 하는 것이 저번 포스팅이 마지막이었으니 10월이다...        
그 동안 코드포스를 안한 것도 아니다. 백준 스트릭도 꾸준히 유지했다.          
이것의 패인은 2가지다. 첫번쨰는 알바다. 편의점 알바를 시작했는데 이것이 야간알바다 그래서 코포를 놓칠때가 많았다.         
두번째는 연애다. 요즘 내가 너무 행복한 나날들을 보내고 있기에 알골 따위(?)의 중요성을 잠시 잊었다.         
알고리즘을 할때와 또 다른 색다른 재미를 삶에서 찾았다보니 업솔빙을 잠시 멀리했던 것이다.         
이러다가 블루 못찍는건 아닐까 모른다.(그건 정말 싫다)          
어쨋든 블로그에도 글을 써야하니 3개를 한꺼번에 업솔빙을 해보도록 하겠다.       
물론 아직 내가 E를 풀 실력은 안되니 D까지만 총 12문제의 업솔빙을 시작해보겠다.         
       

## 846 A. Hayato and School(TLE)
846 셋을 망치게한 레전드 주범이다. 분명히 풀때는 통과했는데 시스텟에서 TLE로 터져버렸다.         
이런 경험은 처음이라 눈물이 난다 ㅠㅠ n^3 풀이가 안되는건 명확한데 왜 깝치면서 brute force를 한건지..ㅠㅠ          
이 문제는 그리디인데 짝수 2개, 홀수 1개 또는 홀수 3개가 있는지 확인하고 있다면 앞에서 부터 해당하는 것을 찾으면 된다. 
구현은 간단한데 조금 기니까 생략하겠다.         

## 846 B. GCD Partition(1:10)
 B는 상당히 어려웠따. 왜냐면 이게 돼? 싶었기 때문이다.       
 ```cpp
 int main(){
    fast_io
    int tt; cin >> tt;
    while (tt--) {
        int n; cin >> n;
        vector<ll> a(n+1);
        ll sum = 0;
        for(int i=1;i<=n;i++){
            cin >> a[i];
            sum += a[i];
        }
        ll res = 0;
        ll k = 0;
        for(int i=1;i<n;i++){
            k += a[i];
            res = max(res, gcd(k, sum-k));
        }
        cout << res << '\n';
    }
}
 ```
 구현을 모두하면 시간 초과니까 앞에서 부터 쭉 쓸고 오면서 구해야한다. 
 이때 sum을 구해놓고 앞에서 부터 2개로 나누어서 생각하면 편하다. 

## 846 C. 문제오류
이 문제는 문제오류로 이 set전체가 unrated됐다. 
어찌보면 다행이다.        

## 846 D. Bit Guessing Game(WA)
인터랙티브 문제이고, 인터랙티브를 맞춘적은 단 한번도 없다.        
열심히 풀었는데 참 아쉽다.      
따라서 여기서 업솔빙을 잘해볼 것이다 .        
먼저 내가 생각한 아이디어는 맞았따. 빼기를 하면 이전의 cnt에서 새로 생기는 1의 개수가 규칙적이다.       
예를 들어 8 = 1000 , 2 = 10 이고 8이랑 2를 빼면 6 = 110 이런식으로 1의 개수가 2개로 늘어난다.        
그러니까 1을 추가해서 개수 변화가 없으면 1자리에 있다는 거고 개수변화가 1이 많이 늘어나면 그 앞에 몇자리 앞에 1이 존재한다는 것이다.       
따라서 에디토리얼 기반의 코드를 보면 다음과 같다.      
```cpp
while (tt--) {
    int cnt;
    cin >> cnt;
    int res = 0;
    int was = 0;
    while (cnt > 0) {
        res += 1;
        int nw = ask(1 + was);
        int back = nw - cnt + 1;
        res += (1 << back) - 1;
        was = (1 << back) - 1;
        cnt = nw - back;
    }
    cout << "! " << res << endl;
}
```
나는 큰수부터 보면서 해결하려고 했는데 그것보다 1만 추가해서 ( 1의 개수가 최대 30개 정도니까 )해결하는 것이 인상깊었다.       

## TypeDB A. Exponential Equation(0:08)
꽤 잘본 셋이다. 나는 구성적 문제에 꽤 강한듯 하다.         
이 문제는 홀수면 절대 불가능하고 짝수면 1과 n/2로 나누면 정답이다.        
```cpp
int main(){
    fast_io
    int tt; cin >> tt;
    while (tt--) {
        ll n; cin >> n;
        if(n&1){
            cout << -1 << '\n';
        }else{
            cout << 1 << ' ' << n/2 << '\n';
        }
    }
}
```  

## TypeDB B. Number Factorization(0:28)
소수를 이용하는, 소인수분해는 코포에 자주나온다. 다행히 그 테크닉을 아라서 이용했따. 
소인수분해했을 때 그 소수가 몇개 나오는지도 저장해놓은 배열을 만들어두고 이를 등장횟수에 따라 정렬한다.       
그 이후는 등장횟수가 적은 것 부터 보면서 결과 값을 갱신한다.       
이게 뭐냐면 조금 조사를 하다보면 시그마(a*p)의 최댓값은 소인수분해를 하고 최대한 밑을 곱해서 크게 한 후에 지수를 곱해야한다.        
이를 이용한 것이 아래 코드이다.       
```cpp
int main(){
    fast_io
    int tt; cin >> tt;
    while (tt--) {
        ll n; cin >> n;
        ll tmp = n;
        vector<pii> ap;
        for(int i=2;i*i<=n;i++){
            int cnt = 0;
            while(!(tmp%i)){
                tmp /= i;
                cnt++;
            }
            if(cnt){
                ap.push_back({cnt, i});
            }
        }
        if(tmp!=1){
            ap.push_back({1, tmp});
        }
        sort(ap.begin(), ap.end());
        ll k = 1;
        for(int i=0;i<ap.size();i++){
            k *= ap[i].second;
        }
        ll x = 0;
        ll res = 0;
        for(int i=0;i<ap.size();i++){
            res += k*(ap[i].first-x);
            x = ap[i].first;
            k /= ap[i].second;
        }
        cout << res << '\n';
    }
}
```

## TypeDB C. Remove the Bracket(1:15)
꽤 오래걸렸지만 매우 잘 풀었다고 생각한다.         
나는 dp를 이용했는데 dp식 정의는 다음과 같다. 
>dp[i][k==2] : i번째까지 봤고 i번째가 k상태(0 그대로, 1은 swap)일때 최솟값.
정의 했다. 
또한 최적이 되는 상태는 s를 기준으로 최대한 차이를 많이 벌려야하기 때문에 0, a[i], 나 s, a[i]-s로 나눠질 수밖에 없다.       
```cpp
#include <bits/stdc++.h>
#define fast_io cin.tie(NULL); ios_base::sync_with_stdio(false);
using namespace std;
typedef long long ll;
typedef pair<int, int> pii;
typedef pair<ll, ll> pll;
typedef tuple<int, int, int> tiii;

const int MAX = 2e5+1;
ll dp[MAX][2];

int main(){
    fast_io
    int tt; cin >> tt;
    while (tt--) {
        memset(dp, 0, sizeof(dp));
        int n, s; cin >> n >> s;
        vector<int> a(n);
        for(int i=0;i<n;i++) cin >> a[i];
        ll lp = 2e5+1, lq = a[0];
        for(int i=1;i<n;i++){
            ll p, q;
            if(s>=a[i]){
                p = 0;
                q = a[i];
            }else{
                p = s;
                q = a[i]-s;
            }
            if(p>q) swap(p, q);
            if(i==n-1) p = q = a[n-1];
            dp[i][0] = min(dp[i-1][0]+lq*p, dp[i-1][1]+lp*p);
            dp[i][1] = min(dp[i-1][1]+lp*q, dp[i-1][0]+lq*q);
            lp = p;
            lq = q;
        }
        cout << min(dp[n-1][0], dp[n-1][1]) << '\n';
    }
}
```

## D. Game on Axis(upsolving)
이 문제 또한 코포 단골 손님인 사이클이다.         
이 것은 대회때 판단을 했고, dfs와 dsu를 이용하여 풀 수 있겠다는 생각은 했지만....        
역시나 아직 나의 내공이 부족한지 1시간 반을 투자했는데 예제가 아슬아슬하게 안나오는 경지밖에 안되었다. ㅠㅠㅠ         
그래도 튜토리얼을 보니 아이디어는 맞았으니 이것으로 위안을 삼아야겠따.      
결국 이 게임의 목적은 게임을 끝내는 것이다. 그런데 사이클이 돌면 게임을 끝낼 수 없다.       
따라서 배열 밖으로 나가는 것이 게임의 목적이다.           
이 문제는 사이클을 세는 것이 더 빠르니까 전체 경우(n*(2n+1)) 에서 사이클이 생기는 경우를 빼는 것이 바람직하다.       


## 848 A. Flip Flop Sum(0:05)
A는 쉬웠다. -1이 두개 붙어있으면 그것을, 그 다음은 -1, 1, 그 다음은 1, 1 순으로 바꿀 수 있으면 바꾸고 끝낸다.         
```cpp
int main(){
    fast_io
    int tt; cin >> tt;
    while (tt--) {
        int n; cin >> n;
        vector<int> a(n+1);
        int ok = 0;
        int sum = 0;
        for(int i=1;i<=n;i++){
            cin >> a[i];
            sum += a[i];
            if(a[i]==-1&&a[i-1]==-1) ok = 1;
            if(!ok&&a[i]+a[i-1]==0) ok = -1;
        }
        if(ok==1) cout << sum+4 << '\n';
        else if(ok==-1) cout << sum << '\n';
        else cout << sum-4 << '\n';
    }
}
```
## 848 B. The Forbidden Permutation(upsolving)
아직도 잘 모르겠다. 이것을 어떻게 푸는 것인지...ㅠㅠ         
B번에 올인했는데 결국엔 못풀었따. 그래서 C로 넘어갔따.        
일단 이문제를 틀린 가장 큰 패인은 문제를 잘못 이해한 것이다.        
나는 good array가 되려면 모든 부분이 다 good이어야하는 줄 알았는데 한 곳만 good이면 되는 것이다.        
하... 정말 쉬운 문제였는데 매우 아쉽다.        



## 848 C. Flexible String(1:45)
이 문제는 매우 쉽다.       
그래서 C에 있는 것이 이상했다.  왜냐면 단순 브루트포스로 풀리기때문이다.       
근데 시간복잡도가 애매하게 계산되어서 해볼까 말까 고민하게 만드는 문제였다.       
이런 상황들이 대회때 매우 중요한데 참 아쉬운 문제 일 수도 있다.        
그래도 실전에서 prev_permutation을 이용해서 조합을 계산하는 테크닉을 써먹었다는 것에 기분이 좋았다.                
```cpp
#include <bits/stdc++.h>
#define fast_io cin.tie(NULL); ios_base::sync_with_stdio(false);
using namespace std;
typedef long long ll;
typedef pair<int, int> pii;
typedef pair<ll, ll> pll;
typedef tuple<int, int, int> tiii;
 
int main(){
    fast_io
    int tt; cin >> tt;
    while (tt--) {
        int n, k; cin >> n >> k;
        string a, b;
        cin >> a >> b;
        map<char, int> mp;
        set<char> s;
        int cnt = 0;
        for(int i=0;i<n;i++){
            if(s.find(a[i])!=s.end()) continue;
            mp[a[i]] = cnt++;
            s.insert(a[i]);
        }
        vector<int> x, tmp;
        for(int i = 0;i<cnt;i++) x.push_back(i);
        for(int i=0, c=0;i<cnt;i++, c++){
            if(c<k) tmp.push_back(1);
            else tmp.push_back(0);
        }
        ll res = 0;
        do {
            ll ret = 0;
            int last = 0;
            for(int i=0;i<n;i++){
                if(a[i]==b[i]||tmp[mp[a[i]]]==1) continue;
                ll kk = i-last;
                ret += kk*(kk+1)/2;
                last = i+1;
            }
            ll kk = n-last;
            ret += kk*(kk+1)/2;
            res = max(res, ret);
        } while (prev_permutation(tmp.begin(), tmp.end()));
 
        cout << res << '\n';
    }
}
```


## 848 D. Flexible String Revisit(upsolving)
B번 때문에 당연히 못건드렸던 문제지만 내가 dp 연습을 꽤 많이 했기 때문에 생략한다.         



