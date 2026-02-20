---
layout: post
categories: ["Competitive Programming", "codeforce"]
title:  "코드포스 - 연습중2"
tags : [upsolving, 코드포스]
use_math : true
---

# 2023-05-25-Edu Codeforce round 149 (Div.2)

# 개요

디비전 2는 솔직히 4문제는 풀어야 본전이다. 

나도 옛날엔 인정하지 않았지만 A == 브론즈, B== 실버하위, C == 실버 상위, D == 골드 수준의 문제들이 출제 되기 때문이다. (물론 편차가 있긴하지만)

예전에는 내가 C, D를 자주 못풀었기 때문에 D가 무슨 골드냐 플레는 되겠지..했는데 솔직히 풀이를 보면 골드가 맞다. ㅋㅋ

내가 아직 골드는 확정적으로 푸는 실력이 안되는 것이다. 

그래도 오늘은 4문제를 겨우겨우 어찌저찌 풀었으니 다행이다. E까지 업솔빙을 해보겠다. 

# A. Grasshopper on a Line (0:05)

해가 무조건 있다고 알려줬다. 

그러니 k로 나누어 떨어지지 않으면 1을 출력하고 x로 바로 이동한다. 

k로 나누어 떨어지면 2를 출력하고 i, x-i로 분할하여 생각한다. 

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

int main(){
    fast_io
    int tt; cin >> tt;
    while(tt--){
        int x, k; cin >> x >> k;
        if(x%k){
            cout << 1 << '\n';
            cout << x << '\n';
        }else{
            cout << 2 << '\n';
            for(int i=1;i<=x;i++){
                if(i%k&&(x-i)%k){
                    cout << i << ' ' << x-i << '\n';
                    break;
                }
            }
        }
    }
}
```

# B. Comparion String (0:10)

꺾은 괄호가 들어가는 문자열에서 숫자를 적절히 배열하여 올바른 식을 만들 때 , 사용할 수 있는 숫자의 최소개수를 구하는 것이다. 

연속되는 << $\dots$와 >>$\dots$의 개수를 세고 거기에 수를 넣는다고 생각하면 연속되는 괄호의 개수 +1이 정답이다. 

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

int main(){
    fast_io
    int tt; cin >> tt;
    while(tt--){
        int n; cin >> n;
        string s; cin >> s;
        int res = 0;
        char pre = 0;
        int now = 0;
        for(int i=0;i<s.size();i++){
            if(s[i]==pre){
                now++;
            }else{
                now = 1;
                pre = s[i];
            }
            res = max(res, now);
        }
        cout << res+1 << '\n';
    }
}
```

# C. Best Binary String (0:39)

조금 오래 걸리긴 했다. 그 이유는 reverse의 뜻을 toggle과 혼동했기 때문이다. 

0을 1로 바꾸고 1을 0으로 바꾸라는 줄 알았는데 알고보니 substring을 그냥 뒤집는 거였따. 

문제를 똑바로 읽기로 다짐한지 2주도 안되었는데 바로 착각해버렸다. 

솔직히 영어를 못하는 문제도 조금은 있는 것 같다. 

결국 이 문제는 물음표 자리에 바로 이전 것이 들어가면 된다. 

문제를 따라가느라 deque을 이용했다. (하지만 필요없을 듯하다, 그래도 연속되는 ?가 있을 수 있으니 자료구조를 이용하긴 해야할듯)

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

int main(){
    fast_io
    int tt; cin >> tt;
    while(tt--){
        string s; cin >> s;
        deque<char> dq;
        dq.push_back('0');
        string res;
        for(int i=0;i<s.size();i++){
            if(s[i]=='0'){
                dq.push_back('0');
            }else if(s[i]=='1'){
                if(dq.front()=='0'){
                    while(dq.front()!='0') {
                        res += dq.front();
                        dq.pop_front();
                    }
                }else{
                    if(dq.back()=='0'){
                        while(!dq.empty()){
                            res += dq.front();
                            dq.pop_front();
                        }
                    }
                }

                dq.push_back('1');
            }else{
                dq.push_back(dq.back());
            }
        }
        while(!dq.empty()){
            res += dq.front();
            dq.pop_front();
        }
        for(int i=1;i<res.size();i++) cout << res[i];
        cout << '\n';
    }
}
```

이 풀이 말고 관찰을 통해 위 사실을 알아낸뒤

# D. Bracket Coloring (1:59 , +3)

솔직히 이 문제를 이렇게나 늦게 푼 것은 온전히 해석 탓이다. 

정말 화가 난다. 문제를 제대로 읽지 못해 시간 끈 것이 이 대회만 해도 2개라니….

영어 공부한다고 이런 습관이 고쳐지기는 쉽지 않을 것이다. 

문제를 이해 하면 다음과 같다.

1. 올바른 문자열은 - regular 문자열이다. 
2. reverse하여 regular 문자열이 된다면 beautiful 문자열이다. 
    - 물론 beautiful 문자열은 regular문자열을 포함한다. (하지만 따로 보는 것이 문제에선 좋다)
3. 이제 색을 칠할 건데, 칠한 색을 쭉 나열했을 땐 beautiful 문자열이어야한다. 

따라서 위 내용 중 가장 핵심은

**regular랑 beautiful이랑 섞이면 절대로 beautiful이 될 수 없다는 것이다.**

그래서 이 문제는 regular와 beautiful을 따로 색칠하는 문제가 된다. 

따라서 될 수 있는 Color의 최대값은 2이다. 

나는 그냥 beautiful을 뒤집어서 beautiful이면 되는 줄 알았는데….이따구로 이해해서 4틀을 한 내가 너무 한심하다. 

하지만 그래도 시간안에 올바르게 이해해서 다시 풀었으니 봐주도록 해야겠따.

 (안봐줬을 때 페널티로 할 것도 없음ㅋㅋ)

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

int main(){
    fast_io
    int tt; cin >> tt;
    while(tt--){
        int n; cin >> n;
        string s; cin >> s;
        vector<int> fr, bk;
        for(int i=0;i<n;i++){
            if(s[i]=='(') fr.push_back(i);
            else bk.push_back(i);
        }
        if(fr.size()!=bk.size()){
            cout << -1 << '\n';
            continue;
        }

        set<int> ST;
        vector<int> res(n);
        deque<char> dq;
        int k1 = 0, k2 = 0;
        for(int i=0;i<n;i++){
            if(dq.empty()||dq.back()==s[i]) {
                if(s[i]=='('&&i<fr[k1]) continue;
                if(s[i]==')'&&i<bk[k2]) continue;
                dq.push_back(s[i]);
            }
            else{
                ST.insert((dq.front()=='('));
                
                while(!dq.empty()){
                    res[fr[k1]] = (dq.front()=='(');
                    res[bk[k2]] = (dq.front()=='(');
                    k1++; k2++;
                    dq.pop_front();
                }
                
            }
        }
        
        cout << ST.size() << '\n';
        for(int ANS : res){
            if(ST.size()==1) cout << 1 << ' ';
            else if(ANS==0) cout << 1 << ' ';
            else cout << 2 << ' ';
        }
        cout << '\n';
    }
}
```

# E. Playoff Fixing (Upsolving)

문제를 정리해보면 1번팀이 제일 세고 $2^k$번째 팀이 가장 약하다. 

이 때 토너먼트는 seed를 받고 그에 따라 결정된다. (1-2번 시드끼리, 3-4번 시드끼리 ….)

토너먼트가 실력대로 결과가 나오도록 조작할 수 있을 때 그렇게 만들 수 있는 경우의 수를 구한다. 

예를 들면

1 2 3 4 라면 1번 2번팀이 첫라운드에 싸우니까 절대로 실력대로 결과가 나오지 않는다. 

-1 -1 -1 -1 이라면 1번팀은 4군데중 아무데나 갈 수 있고 2번팀은 그 반대라인으로 가면 2개 중하나가 된다. 그리고 3, 4를 배치하는경우의 수가 2개니까 $4 \times 2 \times 2$ 가 된다. 

위 내용이 문제 정리다.  그럼 어떻게 풀어야 할까?

1. $2^k$의 팀이 경기를 하면 다음 승자조는 $2^{k-1}$팀이 된다.  (그리고 그 승자조는 팀번호가 낮은 사람들이다. )
2. 이번 턴에 지는 사람 $2^{k-1}$의 배치는 맘대로 할 수 있다. (-1인 경우에)
    
    그래서 지는 사람이 -1이라면 이들의 배치를 신경써야한다. 
    
3. 만약 이기는 사람, 지는 사람이 둘다 -1라면 둘의 배치는 바꿔도 되니까 2를 곱해준다. 
4. 불가능한 경우는 기준을 이용해 계산했을 때 떨어지면 안되는 사람이 떨어지면 0을 출력하고 종료한다. 
5. 만약에 둘다 -1이 아니고 결정이 되었으면 배치는 신경안써도 된다. 

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

const int MOD = 998244353;

int main(){
    fast_io
    int K; cin >> K;
    vector<int> a(1<<K);
    for(int i=0;i<(1<<K);i++){
        cin >> a[i];
        if(a[i]!=-1) --a[i];
    }

    ll res = 1;
    for(int i=K-1;i>=0;i--){
        int big = (1 << i);
        int minus_one = 0;
        vector<int> na(1 << i);
        for(int j=0;j<(1<<i);j++){
            if(a[2*j]>a[2*j+1]) swap(a[2*j], a[2*j+1]); // 앞이 이김

            if(a[2*j]==-1){
                if(a[2*j+1]>= (1 << i)){    //앞이 이기는 경우가 맞음
                    big--;
                    na[j] = -1;
                }else if(a[2*j+1]!=-1){ //이건 뒤가 이기는 경우임
                    na[j] = a[2*j+1];
                }else{      //배치를 맘대로 해도 됨
                    na[j] = -1;
                    minus_one++;
                }
                continue;
            }

            if( a[2*j]<(1<<i) == a[2*j+1]< (1 << i)){      //둘다 기준보다 작으면 안됨
                cout << 0;
                return 0;
            }

            na[j] = a[2*j]; //정상적으로 앞이 이김
            big--;
        }

        for(int i=0;i<minus_one;i++) res = res * 2LL % MOD; // 둘의 배치를 바꿀 수 있음
        for(int i=1;i<=big;i++) res = 1LL*res * i %MOD; //이긴 것들의 순서 조정
        a = na;
    }
    cout << res;

}
```

재밌는 문제였따. 

토너먼트 문제는 이긴 사람, 진 사람을 제대로 나누고 생각하는 것이 중요해 보인다.