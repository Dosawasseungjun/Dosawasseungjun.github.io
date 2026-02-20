---
layout: post
categories: ["BOJ"]
title:  "Segment Tree"
tags : [Segment Tree, 세그먼트트리]
---

백준 11505 구간 곱 구하기 문제풀이
===============================

[11505 구간 곱 구하기] <https://www.acmicpc.net/problem/11505>  .     
 segment tree를 이용하여 빠르게 구간 곱을 변경하고 출력한다.   

## 문제상황 파악하기.  
[2042 구간 합 구하기] <https://www.acmicpc.net/problem/2042>  .   
위 문제와 똑같지만 구간합이 구간 곱으로 변했다. 합과 거의 비슷하지만 주의해야할 부분이 몇개 있다.    
먼저 구간 곱을 모두 구해 놓고 한다고 하면 구간 곱을 출력하는 것은 O(1)에 할 수 있지만,        
구간 곱을 수정하는데에는 O(n)이 걸린다.   
이를 해결하기 위해서 구간을 나눠서 구간의 곱을 미리 다 구해 놓고 수정 할 때 트리를 따라가며 해결하면 수정에 O(logN), 탐색(출력)에 O(logN)이 걸릴 것이다.        

## Segment Tree가 뭐길래?
먼저 쿼리 란
> 어떤 문제에 비슷한 형태의 질문이 여러 개 주어지는 것이다.

모든 쿼리에 대해 올바르게 답하면서 시간안에 해결하려면 쿼리를 어느 정도 미리 계산해 두면 좋다.   
그래서 구간 별로 계산을 해두고 쿼리가 주어지면 필요한 부분만 뽑아서 계산하는 것에서 착안한 것이 Segment tree이다.    
펜윅 트리(bit연산이용),index tree 등등 여러 종류가 있고 트리구조 답게 재귀를 사용하는 것이 직관적이다.     
여기서는 트리를 채우는 init(), 트리의 어떤 수를 변경하는 update(), 트리의 구간 곱을 출력하는 query()함수로 segment tree를 구현했다.    


## 아이디어 얻기.  
Segment Tree를 만들었으면 끝이다. 주어진 쿼리에 대해 계산하면 된다.    

## 주의할 점
구간 합에 비해 주의 할 점이 몇개 생겼다.    
구간 합은 그냥 0을 리턴하면 됐지만 구간 곱이기 때문에 1을 리턴해야한다.     
또한 구간 곱이라서 update할 때 0으로 나누는 경우가 생기면 안된다.     
0을 처리하는 부분이 중요하고 나는 init함수와 비슷한 형태로 update를 만들고 필요한 부분만 검사하는 식으로 구현했다.    
메모리 초과를 피하기 위해서 ceil(log2(MAX))+1 을 높이로 tree의 크기를 설정했다.    
int형으로 된다고 했지만 곱이기 때문에 중간에 int형이 넘어갈 까봐 long long으로 처리했다.    

# 실제 코드

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <cmath>
using namespace std;
#define fast_io cin.tie(NULL);cout.tie(NULL);ios_base::sync_with_stdio(false);
typedef long long ll;

const int MAX = 1000001;
const int HEIGHT = 1<<((int)ceil(log2(MAX))+1);
const int BIGNUM = 1000000007;
int n, m, k;
vector<ll> arr;
vector<ll> tree;

ll init(ll node, ll S, ll E){
    if(S==E){
        return tree[node] = arr[S];
    }
    ll mid = (S+E)/2;
    return tree[node] = (init(2*node, S, mid)*init(2*node+1, mid+1, E))%BIGNUM;
}

ll update(ll x, ll node, ll S, ll E){
    if(x<S||x>E) return tree[node];
    if(S==E) return tree[node] = arr[x];
    ll mid = (S+E)/2;
    return tree[node] = (update(x, 2*node, S, mid)*update(x, 2*node+1, mid+1, E))%BIGNUM;
}

ll query(ll L, ll R, ll node, ll S, ll E){
    if(L>E||R<S) return 1;
    if(S>=L&&R>=E) return tree[node];
    ll mid = (S+E)/2;
    return (query(L, R, 2*node, S, mid)*query(L, R, 2*node+1, mid+1, E))%BIGNUM;
}

int main(){
    fast_io;
    cin >> n >> m >> k;
    arr = vector<ll> (MAX);
    tree = vector<ll> (HEIGHT+1, 1);
    for(int i=1;i<=n;i++) cin >> arr[i];
    init(1, 1, n);
    for(int i=0;i<m+k;i++){
        ll a, b, c;
        cin >> a >> b >> c;
        if(a==1){
            arr[b] = c;
            update(b, 1, 1, n);
        }else{
            cout << query(b, c, 1, 1, n) << '\n';
        }
    }
}


```
