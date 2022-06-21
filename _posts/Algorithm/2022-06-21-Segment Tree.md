---
layout: posts
categories: ["BOJ"]
title:  "Segment Tree - 구간갱신"
---

lazy propagation없이 구간 갱신하기
===============================

[16975 수열과 쿼리 21] <https://www.acmicpc.net/problem/16975>  .     
 lazy propagation없이 segment tree를 이용하여 구간 갱신을 하고 점 쿼리를 해결한다.   

## 문제상황 파악하기.  
문제는 구간에다가 k를 더한다.    
우리가 알고있는 segment tree로는 구간의 크기만큼 시간이 걸릴 것이다.            
그렇다면 구간이 크다면 그냥 선형 배열 수정하듯이 O(n)의 시간 복잡도를 가질 것이다. (세그트리의 의미가 없겠다...).   
그래서 구간 update를 위한 방법으로 lazy propagation이 있는데 이는 내가 아직 공부를 못해서 모르고 그거 없이 구간 update하는 법을 공부했다.        
이는 [구간 갱신 + 점 쿼리] 에 사용된다.    

## 어떻게 구간갱신 + 점 쿼리를?
다른 배열 D[i]를 사용하는 것이다. D[i] = A[i]-A[i-1], D[0]=A[0] 으로 정의한다.     
이 배열이 구간 갱신을 할 때 필요하다. 
update(l, r, x)를 D[l] += x, D[r+1] -= x 를 해준다.
printArray() A[0] = D[0]는 그냥 프린트하고 A[i] = A[i-1]+D[i]를 하고 프린트한다.
update는 상수시간, 프린트는 여기서는 배열의 크기의 시간이 걸리고 점이면 상수시간에 해결 가능하다.    
[구간 갱신 이용] <https://www.geeksforgeeks.org/difference-array-range-update-query-o1/>      
위의 개념을 세그먼트 트리에 적용하는 것이다!!     

## 아이디어 얻기.  
Segment Tree를 만들때 D[i]를 이용한다. 그렇게 되면 세그트리에는 D[i]의 부분합들이 들어가 있을 것이다.     
그렇다면 점쿼리를 구할 때 뭐를 출력해야하는가 index x의 값을 구하고 싶으면 sum(x)를 하면 된다.     
ex) sum(3) = (arr[3]-arr[2])+(arr[2]-arr[1])+(arr[1]-arr[0]) = arr[3]이기 때문이다.    
세그트리에서는 D[]를 2번의 점 갱신, 한번의 구간합 구하기 하는 거나 다름 없지만 arr에서는 구간 갱신, 점쿼리 하는 꼴이 되는 것이다.     
너무 놀랍다...

## 주의할 점
값이 long long을 넘어갈 수 있다. 범위를 보면 쉽게 알 수 있다.      

# 실제 코드

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <string>
#include <queue>
#include <cmath>
#define fast_io cin.tie(NULL); cout.tie(NULL); ios_base::sync_with_stdio(false);
using namespace std;
typedef long long ll;

int n, m;
vector<ll> arr;
vector<ll> tree;

ll init(int node, int S, int E){
    if(S==E){
        return tree[node] = arr[S]-arr[S-1];        //여기가 중요!!
    }
    int mid = (S+E)/2;
    return tree[node] = init(2*node, S, mid) + init(2*node+1, mid+1, E);
}

void update(int x, ll val, int node, int S, int E){ //점 갱신 먼저 구현한다.
    if(S==E) tree[node] += val;
    else{
        int mid = (S+E)/2;
        if(x<=mid) update(x, val, 2*node, S, mid);
        else update(x, val, 2*node+1, mid+1, E);
        
        tree[node] = tree[2*node]+tree[2*node+1];   //update를 한후에 더해주는 연산
    }
}

ll sum(int L, int R, int node, int S, int E){   
    if(L>R) return 0;
    if(L==S&&R==E) return tree[node];   
    int mid = (S+E)/2;
    return sum(L, min(mid, R), 2*node, S, mid)+sum(max(L, mid+1), R, 2*node+1, mid+1, E);
}

void getElement(int x){
    cout << sum(1, x, 1, 1, n) << '\n';
}

void RangeUpdate(int L, int R, ll x){
    update(L, x, 1, 1, n);          // arr[l] += x;
    if(R+1<=n) update(R+1, -x, 1, 1, n); //arr[r+1] -= x;
}

int main(){
    fast_io;
    cin >> n;
    arr = vector<ll> (n+1);
    tree = vector<ll> (4*n+10);  //넉넉잡아 4배 했음
    for(int i=1;i<=n;i++) cin >> arr[i];
    init(1, 1, n);
    cin >> m;
    for(int iter=0;iter<m;iter++){
        int o;
        cin >> o;
        if(o==1){
            int i, j;
            ll k;
            cin >> i >> j >> k;
            RangeUpdate(i, j, k);
            
        }else{
            int x;
            cin >> x;
            getElement(x);
        }
    }
}


```
