---
layout: post
categories: ["BOJ"]
title:  "Prefix Sum 문제"
tags : [PrefixSum, 누적합]
---

백준 23877번 Convoluted Intervals 문제풀이
====================================

[23877 Convoluted Intervals] <https://www.acmicpc.net/problem/23877>  .     
 누적합과 조합론 지식을 이용하여 문제를 푼다.                          

2학년 중간고사가 끝나서 다시 알고리즘 문제를 잡기 시작했다.          
근데 뭔가...벌써 기말 대비를 해야할 것 같은 기분이 든다.ㅋㅋ          
요즘은 USACO문제를 풀고 있는데...오..문제가 좋은 문제가 많은 듯하다.         
코트포스 연습하기에도 좋은 문제들이다.          
이 문제는 내가 꽤 고생했어서 풀이를 남겨보려고 한다.        

## 문제상황 파악하기.  
게임을 이길 수 있게 하는 i, j쌍의 수를 구한다.        
i, j쌍의 개수는 N^2개가 있다.       
조건을 만족하는 쌍을 구하는 것이다.        


## 아이디어 얻기.  
시작점과 끝점 합한 값을 직접 구하려고 하면 N^2이므로 이미 시간 초과다.       
그래서 m이 5000이하라는 것을 이용해야한다.        
먼저 시작점이 몇번 나왔는지, 끝점이 몇번나왔는지를 기록한다.      
Ai+Aj = k라고 할때 시작점이 k값이 되는 값을 M^2에 구할 수 있다.       
끝점도 마찬가지로 구하면
st[i] : i라는 숫자가 시작점인 쌍의 개수
ed[i] : i라는 숫자가 끝점이 쌍의 개수
로 정의 할 수 있다.         
그러면 0부터 차례로 올라가며 시작점 쌍의 개수를 더하고 끝점 쌍의 개수를 빼면 된다.

## 주의할 점
쌍의 개수가 최대 N^2이니까 이것만 보고도 답은 int 형을 넘어간다는 것을 알 수 있다.                 

# 실제 코드
나머지 주의 할 점은 코드에 주석으로 처리했다.     
```cpp
#include <bits/stdc++.h>
#define fast_io cin.tie(NULL); ios_base::sync_with_stdio(false);
using namespace std;
typedef long long  ll;
typedef pair<int, int> pii;
typedef pair<ll, ll> pll;

const int MAX = 5001;
ll ans[2*MAX+1];
int main(){
    fast_io
    int n, m; cin >> n >> m;
    vector<ll> a(MAX+1, 0), b(MAX+1, 0), st(2*MAX+1, 0), ed(2*MAX+1, 0);
    for(int i=1;i<=n;i++){
        ll x, y; cin >> x >> y;
        a[x]++; b[y]++;
    }
    for(int i=0;i<=m;i++){
        for(int j=0;j<=m;j++){
            st[i+j] += a[i]*a[j];
            ed[i+j] += b[i]*b[j];
        }
    }
    
    for(int k=0;k<=2*m;k++){
        ans[k] = (k ? ans[k-1] : 0) +st[k];
        cout << ans[k] << '\n';
        ans[k] -= ed[k];
    }
    
}

```
