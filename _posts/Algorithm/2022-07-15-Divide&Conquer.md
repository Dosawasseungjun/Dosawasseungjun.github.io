---
layout: post
categories: ["BOJ"]
title:  "Divide & Conquer"
tags : [DnC, 분할정복]
---

백준 18253번 최단경로와 쿼리 문제풀이
====================================

[18253 최단경로와 쿼리] <https://www.acmicpc.net/problem/18253>  .     
 쿼리를 한번에 계산하는 테크닉을 배워보자.   
 처음으로 풀게된 다이아 문제이고 참 좋은 문제라는 생각이 들어서 포스팅한다.     

## 문제상황 파악하기.  
문제상황은 간단하다 일단 Naive하게 짠다고 하면 각 쿼리마다 다익스트라를 하는 방법이고 이는 당연히 시간초과다.       
그래도 다익스트라를 이용하여 최단거리를 구할 수 있다는 것을 생각할 수 있다.     

## 아이디어 얻기.  
처음에는 각 쿼리를 빠르게 계산하는 방법을 떠올렸다.     
하지만 그러려면 쿼리가 최대 10만이므로 각연산을 로그시간만에 끝내야한다.      
쿼리 구간이 크게 주어진다면 다익스트라를 하면서 쿼리 각 연산을 로그시간안에 끝내기가 까다로웠다.      
쿼리마다 연산을 하는 것이 아니라 한번에 모든 쿼리를 연산해야했다.      
이를 위한 가장 중요한 아이디어는 N이 작다는 것이다.(최대 5)       
N이 작고 어느 지점에서 다른 지점으로 가기 위해서는 그 사이에 있는 한 줄(세로줄)을 무조건 건너야만 한다.      
그래서 가운데 세로줄에 대해 다익스트라를 하면 n번의 다익스트라로 구간 최소를 구할 수 있다.       
한번의 분할 정복을 하면서 모든 쿼리를 연산해두는 것이다.      
```cpp
class Query{
public:
    int y1, x1, y2, x2, idx;
    Query(){}
    Query(int a, int b, int c, int d, int e){
        y1 = a; x1 = b; y2 = c; x2 = d;
        idx = e;
    }
};
```
위와 같이 쿼리 클래스를 만들고 배열에 저장해뒀다.      

## 주의할 점
이 문제는 위와 같은 아이디어로 구현을 한다고 하더라도 최적화에 꽤 많은 신경을 써야한다.      
그 중에서 나의 문제는
* 다익스트라를 할 때 그 구간만 연산하는 것은 알고 있었지만
* 다익스트라의 dist함수를 초기화 할때 전체 구간을 초기화해서 시간초과가 계속 났다.       

# 실제 코드
나머지 주의 할 점은 코드에 주석으로 처리했다.     
```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <string>
#include <queue>
#include <cmath>
#include <set>
#include <map>
#define fast_io cin.tie(NULL); cout.tie(NULL); ios_base::sync_with_stdio(false);
using namespace std;
typedef long long ll;
typedef pair<int, int> pii;

class Query{
public:
    int y1, x1, y2, x2, idx;
    Query(){}
    Query(int a, int b, int c, int d, int e){
        y1 = a; x1 = b; y2 = c; x2 = d;
        idx = e;
    }
};

const int dy[] = {-1, 1, 0, 0};
const int dx[] = {0, 0, 1, -1};
const ll INF = 500000000000001;
int n, m;               //STL이 느려서 그런가...
Query query[100001];   //push_back이 느려서 그런가??
ll grid[6][100001];
ll res[100001];
ll dist[6][100001];

void dijkstra(int sy, int sx, int range1, int range2){
    for(int i=1;i<=n;i++){
        for(int j=range1;j<=range2;j++) dist[i][j] = INF;
    }
    priority_queue<pair<ll, pii>> pq;
    dist[sy][sx] = grid[sy][sx];
    pq.push({-dist[sy][sx], {sy, sx}});
    while (!pq.empty()) {
        int hy = pq.top().second.first, hx = pq.top().second.second;
        ll nowcost = -pq.top().first;
        pq.pop();
        
        if(dist[hy][hx]<nowcost) continue;
        for(int i=0;i<4;i++){
            int ny = hy+dy[i], nx = hx+dx[i];
            if(ny<1||ny>n||nx<range1||nx>range2) continue;
            ll nextcost = nowcost+grid[ny][nx];
            if(dist[ny][nx]>nextcost){
                dist[ny][nx]= nextcost;
                pq.push({-nextcost, {ny, nx}});
            }
        }
    }
}


void solveDNC(int L, int R, Query qu[], int qusize){
    if(!qusize||L>R) return;
    int mid = (L+R)>>1;
    for(int i=1;i<=n;i++){  // (i, mid)에서 다익스트라를 해서 쿼리 중 이곳을 지나는 최솟값을 갱신한다.(n번 다익스트라함)
        dijkstra(i, mid, L, R);
        for(int j=0;j<qusize;j++){
            res[qu[j].idx] = min(res[qu[j].idx], dist[qu[j].y1][qu[j].x1]+dist[qu[j].y2][qu[j].x2]-grid[i][mid]);
        }
    }
    Query left[qusize];
    Query right[qusize];
    int lsize= 0, rsize =0;
    for(int i=0;i<qusize;i++){   //mid를 안지나도 되는 경우를 넣는다
        if(qu[i].x1<mid&&qu[i].x2<mid) left[lsize++] = qu[i];   // 쿼리범위가 mid보다 작을 때
        else if(qu[i].x2>mid&&qu[i].x1>mid) right[rsize++] = qu[i];  //쿼리범위가 mid보다 클 때
    }
    solveDNC(L, mid-1, left, lsize);
    solveDNC(mid+1, R, right, rsize);
}


int main(){
    fast_io;
    cin >> n >> m;
    for(int i=1;i<=n;i++){
        for(int j=1;j<=m;j++){
            cin >> grid[i][j];
        }
    }
    
    int q; cin >> q;
    for(int i=0;i<q;i++){
        int r1, c1, r2, c2;
        cin >> r1 >> c1 >> r2 >> c2;
        if(c1>c2){
            swap(r1, r2);
            swap(c1, c2);
        }
        Query q(r1, c1, r2, c2, i);
        query[i] = q;
    }
    
    for(int i=0;i<q;i++) res[i] = INF;
    solveDNC(1, m, query, q);  //한번에 모든 쿼리를 계산
    for(int i=0;i<q;i++){
        cout << res[i] << '\n';
    }
}


```
