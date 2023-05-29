---
layout: posts
categories: ["Codeforces"]
title:  "코드포스 - 연습중1"
tags : [upsolving, 코드포스]
use_math : true
---


# 2023-05-13-Edu Codeforce round 148 (Div.2)

# 개요

에듀라운드가 어려운건지….

에듀라운드는 블루퍼포 이상을 맞아본적이 없는 것 같다. 

솔직히 그렇게 큰 차이는 없는데 왜 그러는지는 도저히 모르겠다. 

이번 셋은 C까지 매우쉽고 D부터는 좀 어려웠다..

D는 감은 잡았는데 뭔가 구현이 막막해서 못풀었다. (이런 문제 좋아보이는데 많이 풀어보고 싶다. )

# A. New Palindrome (0:09)

팰린드롬이다. 

뭔가 나는 잘 못푼 것 같다. (그리 깔끔한 코드가 나오지 않아서 그렇게 생각했다. )

1. 등장한 알파벳이 홀수인 것의 개수가 2개 이상이면 팰린드롬 절대 안된다. 
2. 1번을 만족하고 짝수인 것이 많으면 무조건 팰린드롬이 여러개 나온다. 
3. 그 중 짝수인것이 하나라면 (aaa같은거… 팰린드롬이 하나밖에 안나온다.)
    1. 따라서 팰린드롬이 하나인 경우, 원래 문자열이 팰린드롬인지 검사하고 결과를 출력한다. 

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

int alpha[26];
int main(){
    fast_io
    int tt; cin >> tt;
    while (tt--) {
        string s; cin >> s;
        memset(alpha, 0, sizeof(alpha));
        for(int i=0;i<s.size();i++){
            alpha[s[i]-'a']++;
        }
        int odd = 0, even = 0;
        for(int i=0;i<26;i++){
            if(!alpha[i]) continue;
            if(alpha[i] & 1){
                odd++;
                if(alpha[i]!=1) even++;
            }
                
            else even++;
        }
        if(odd>1){
            cout << "NO\n";
            continue;
        }
        if(odd<=1&&even>=2){
            cout << "YES\n";
            continue;
        }
        
        if(odd<=1&&even==1){
            bool ok = true;
            for(int i=0;i<s.size()/2;i++){
                if(s[i]!=s[s.size()-1-i]) ok = false;
            }
            if(ok){
                cout << "NO\n";
            }else{
                cout << "YES\n";
            }
        }
    }
}
```

# B. Maximum Sum (0:26)

좋은 문제 같다. 처음에는 우선순위큐로 접근했는데 단순히 이번경우가 더 작다고 그리디하게 뺴버리면 다음 경우가 최선이 아닐 수 있다. 따라서 정렬된 배열에서 앞에서 몇번, 뒤에서 몇번 빼는지를 모두 세주고 그중 최대값을 찾아주는 것이 옳다. 

나는 부분합을 구하고 전체(sum)에서 빼는 식으로 구현했다. 

```cpp
ll res =0;
for(int i=0;i<=k;i++){
  res = max(res, sum - psa[2*k-2*i] - (psa[n]-psa[n-i]));
}
```

이 부분이 가장 핵심적인 부분이다. 

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
    while (tt--) {
        int n, k; cin >> n >> k;
        vector<ll> a(n+1), psa(n+1);
        ll sum = 0;
        for(int i=1;i<=n;i++){
            cin >> a[i];
            sum += a[i];
        }
        sort(a.begin(), a.end());
        for(int i=1;i<=n;i++){
            psa[i] = psa[i-1] + a[i];
        }
        
        ll res =0;
        for(int i=0;i<=k;i++){
            res = max(res, sum - psa[2*k-2*i] - (psa[n]-psa[n-i]));
        }
        
        cout << res << '\n';
    }
}
```

# C. Contrast Value (0:55)

이 문제는 증가하는 부분, 감소하는 부분을 세는 문제로 바꿀 수 있다. 

이를 알아내는 것이 그렇게 어렵지 않다..너무 직관적이기 때문이다. 

나는 중간에 같은 부분을 처리하는데에서 이상하게 처리하여서 시간이 좀 걸렸다. 

같은 원소는 그냥 가볍게 무시하면 된다. 

예를 들어 1 2 2 3 3 3 4 4 4 5 5 3 1 이라는 배열이 있어도 이거는 1 5 1 로 줄일 수 있기 때문이다. 

따라서 증가하는 부분 + 감소하는 부분 +1 이 정답이다.  

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
    while (tt--) {
        int n; cin >> n;
        vector<ll> a(n+1);
        for(int i=1;i<=n;i++) cin >> a[i];
        a[0] = a[1];
        int res = 0;
        int state = 0;
        for(int i=2;i<=n;i++){
            if(a[i]>a[i-1]){
                if(state==1){
                    continue;
                }else{
                    res++;
                }
                state = 1;
            }else if(a[i]==a[i-1]){
                continue;
            }else{
                if(state==-1){
                    continue;
                }else{
                    res++;
                }
                state = -1;
            }
        }
        
        cout << res+1 << '\n';
    }
}
```

# D&E. Red-Blue Operation(Upsolving)

이 문제를 1시간 정도 봤는데 못풀었다. 

근데 중간에 내 문제를 발견한게….내가 집중을 못하고 있었다.

문제를 읽고 갑자기 침대에 눕질 않나… 물이나 따르러 나가질 않나….

뭔가 문제 이해를 제대로 못했을 때 머리속에 잡념이 생기며 시간을 축내고 있었던 것이다. 

2시간은 온전히 집중할 수 있는 내가 될 수 있도록해야겠다. 요즘 집중을 너무 못한다. 

공부도 1시간 이상 앉아있기가 힘들다. 이 문제를 고칠 수 있는 방법을 아는 사람은 연락 바란다. 

문제는 hard를 기준으로 풀어보겠다.

쨋든 문제를 이해해보면

1부터 k까지 더하는 연산, 빼는 연산을 적절히 하여 최솟값을 가장 크게 만드는 것이다. 

일단, 한 원소에 홀수번 연산을 하면 값이 줄어들고, 짝수번 연산을 하면 값이 늘어난다. 

따라서 2*k가 2*n으로 나누어지면 모든 원소의 값을 늘릴 수 있겠지만 그 경우가 아니라면 홀수번 접근하여 -연산을 해야하는 경우가 생길 것이다. 

그 때 $+1-2$ 를 하여 -1을 빼주는 것이 이득이다. 

여기까지가 내가 떠올린 것이고 집중력이 다해 풀지 못했다. 이제 어떻게 해야할까?

1. 배열을 정렬해준다. 
2. k < n일 때는 구하기 쉽다. 
3. k ≥ n 인데 결국 빼는 연산이 필요한 경우는 제일 작은거랑 고루고루 -1씩 뺐을 때랑 비교해야한다. 
    
    제일 작은건 k<n일 떄처럼 구하면 되는데 고루고루 -1씩 뺐을 때가 문제다. 
    
    고루고루 -1씩 뺏을 때 최선은 모든 경우가 다 같은경우이다. 그래서 연산을 했을 때 모든 원소를 합한 값을 n으로 나눠가지는 경우와 비교하면 된다. 
    

예를 들어, 2 4 4 5 8의 원소들이 있고 k = 7이라고 해보자. 그러면 일단 각 원소에 7, 6, 5, 4, 3을 더할 것이다. 

그리고 나머지 2, 1은 하나는 더하고 하나는 뺄 것이다.  다시 저 원소들에 k = 14라고 해보자. 그러면 14, 13, 12, 11, 10을 더하고 나머지 1부터 9로 생기는 경우는 한 원소에 2개씩 적용시켜 (남은 수+1)/2가 될 것이다.  즉 -5이다. 그러면 

$$
2+4+4+5+8 (원래 원소합)+ 14+13+12+11+10(n개에 최대 수를 더하고) - \frac{남은 수}{2}
$$

이런 식으로 된다. 

위 수학 공식 블록의 논리를 이해하면 아래 코드도 이해할 수 있다 .

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

const int INF = 1e9+1;

int main(){
    fast_io
    int n, q; cin >> n >> q;
    vector<ll> a(n), pre(n+1, INF);
    ll sum = 0;
    for(int i=0;i<n;i++){
        cin >> a[i];
        sum += a[i];
    }
    sort(a.begin(), a.end());
    for(int i=0;i<n;i++){
        pre[i+1] = min(pre[i], a[i]-i);
    }

    for(int i=0;i<q;i++){
        ll k; cin >> k;
        if(k<n){   
            cout << min(pre[k]+k, a[k]) << ' ';
            continue;
        }   
        if(k%2 != n%2){
            cout << min(min(pre[n-1]+k, a[n-1]), (sum + (k-n+2+k)*(n-1)/2-(k-n+1)/2)/n) << ' ';
        }else{
            cout << min(pre[n]+k, (sum+(k-n+1+k)*n/2-(k-n)/2)/n) << ' ';
        }
    }
}
```