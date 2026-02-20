---
layout: post
categories: ["Problem Solving", "Algorithm"]
title:  "Prim Algorithm optimazation"
comments: true
tags : [MST, Prim]
---

백준 4386 별자리 만들기 문제풀이
===============================

[4386 별자리 만들기] <https://www.acmicpc.net/problem/4386>  .     
 간선을 추려서 MST(minimum spanning tree)를 만든다.   

## 문제상황 파악하기.  
정점들의 위치가 주어지고 이동은 어디든 할 수 있다 .   
이동 할때 그 거리는 점과 점사이의 거리이다.      
모든 별이 연결은 되어 있어야한다.   
즉 후보 간선들을 만들고 모든 점을 포함하는 MST를 만들고 그 가중치들을 다 합하면 끝이다!   

## MST가 뭐길래?
minimum spanning tree.         
그래프는 여러가지 스패닝 트리를 만들 수 있는데 그중 가중치 합이 가장 작은 트리이다.   
그래프의 연결성은 유지하고 가장 싼 그래프를 찾는 것이다.   
이를 찾는 대표적인 알고리즘으로 Kruskal 알고리즘과, Prim알고리즘이 있다.
잘 알려진 구현방법으로 하면 Kruskal은 O(ElogE), Prim은 O(VE)이다.   
오늘은 E가 약 10000까지 커질 수 있고 V는 최대 100이다. 둘 중 무엇을 써도 되지만 프림 알고리즘을 최적화하여 O(ElogV)로 문제를 풀어보겠다.   

## 아이디어 얻기.  
각 정점에서 간선은 V-1개만들 수 있다 이를 다 만들고 검사해도 시간안에 잘 통과 할 것이다.   
getDist함수를 짜서 이를 이용해 간선을 만들어보자.    

```cpp
//거리를 구하는 함수
inline double getDist(pdd p1, pdd p2){  //함수 호출엔 시간이 오래걸리니 inline함수로 선언했다.
    double temp = pow((p2.first-p1.first), 2)+pow(p2.second-p1.second, 2);
    return sqrt(temp);
}
// 구한거리를 가중치로 하여 간선들 정보 저장하기
   for(int i=0;i<n;i++){   //각각 자신을 제외하고 n-1개의 간선을 갖는다. 간선 수의 최댓값은 10000
        for(int j=0;j<n;j++){
            if(i==j) continue;
            adj[i].push_back({getDist(stars[i], stars[j]),j});
        }
    }
```

## 주의할 점
실수 연산이므로 출력형식에 주의해야한다.   
프림알고리즘을 최적화하는 과정이 다익스트라와 비슷하지만 다익스트라는 한 정점에서의 최단거리를 구하는 거라면   
프림알고리즘은 각 정점에서 최단거리만 뽑아서 검사하는 것이다.    
매우 비슷하게 생겨서 주의를 해야한다   

# 실제 코드

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <cmath>
#include <queue>
using namespace std;
typedef pair<double, double> pdd;
typedef pair<double, int> pdi;
const int INF = 987654321;
int n;
vector<pdd> stars;
vector<pdi> adj[101];    //가중치가 있는 인접리스트

inline double getDist(pdd p1, pdd p2){
    double temp = pow((p2.first-p1.first), 2)+pow(p2.second-p1.second, 2);
    return sqrt(temp);
}

double prim(){
    vector<bool> intree(n, false);
    vector<double> minweight(n, INF);
    double ret = 0;
    minweight[0] = 0;
    priority_queue<pdi, vector<pdi>, greater<pdi> > pq;
    pq.push({0, 0});
    
    while (!pq.empty()) {
        int here = pq.top().second;
        double weight = pq.top().first;
        pq.pop();
        if(intree[here]) continue;
        intree[here] = true;
        ret += weight;
        
        for(int i=0;i<adj[here].size();i++){
            int there = adj[here][i].second;
            double togo = adj[here][i].first;
            if(!intree[there]&&minweight[there]>togo){
                minweight[there]= togo;
                pq.push({minweight[there], there});
            }
        }
        
    }
    return ret;
}

int main(){
    cin.tie(NULL); cout.tie(NULL); ios_base::sync_with_stdio(false);
    cin >> n;
    for(int i=0;i<n;i++){
        double y, x;
        cin >> y >> x;
        stars.push_back({y,x});
    }
    
    for(int i=0;i<n;i++){   //각각 자신을 제외하고 n-1개의 간선을 갖는다. 간선 수의 최댓값은 10000
        for(int j=0;j<n;j++){
            if(i==j) continue;
            adj[i].push_back({getDist(stars[i], stars[j]),j});
        }
    }
    
    cout << fixed;
    cout.precision(2);
    cout << prim();
    
}

```
