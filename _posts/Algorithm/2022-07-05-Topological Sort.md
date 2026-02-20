---
layout: post
categories: ["BOJ"]
title:  "Topological Sort"
tags : [DFS, 위상정렬]
---

백준 3665번 최종 순위 문제풀이
====================================

[3665 최종 순위] <https://www.acmicpc.net/problem/3665>  .     
 그래프를 모델링하고 BFS 위상 정렬을 한다.   

## 문제상황 파악하기.  
작년순위가 모두 주어지고 그 다음에는 올해 등수가 바뀐 팀이 주어진다.     
이 때 올해 순위를 확정하여야한다.     
1등 부터 자식으로 방향이 있는 그래프를 모델링하고, 전후 관계가 있으므로 위상정렬한다.     

## Topological Sort(위상 정렬)가 뭐길래?
예를 들면 수학을 공부 할 때 더하기를 배우고 곱하기를 배우는게 좋다, 빨래를 하고 건조를 해야한다. 등     
선후관계가 있는 것들이 있다.     
이런 것들을 그래프로 모델링 할 때 위상정렬로 일직선에 놓인것 처럼 모델링하는 것이다.     
그래서 정점들을 출력하면 순서대로 나올 수 있도록 한다.     
DFS로 위상정렬하는 방법은 단순하다.(dfs함수 종료 할때 정점을 추가하고 다 추가한 뒤 배열을 뒤집어 주면 됨)      
하지만 이문제는 올해 순위가 특정 될 수 도 있고 안될 수도 있어서 dfs로 단순히 풀기가 쉽지 않았다.     

## 아이디어 얻기.  
1등을 루트로 선후관계를 그래프로 그려보면 꼴등은 모든 곳에서 화살표를 받을 것이고 1등은 들어오는 간선이 없을 것이다.     
즉 inorder[root] = 0이고 inorder[leaf] = n 일 것이다.      
그리고 올바른 순위라면 모든 inorder가 한개씩 차이가 날 것이다.      
즉 inorder가 작은것부터 큐에 넣어서 처리하면 된다.     
이 문제는 잘 지켜보면 작년 순위가 모두 주어졌고 순위 변경만 일어난다.     
그렇다면 모순될 수는 있어도 순위 정보를 모를 수는 없다. 따라서 ?는 나올리가 없다.      
난 이런 낚시가 너무 어렵다. 엄청난 혼란이 왔었다.       

## 주의할 점
BFS 위상정렬할 때 사이클이 발견되면 모순된다는 뜻이다.      
인접리스트를 쓸 수도 있는데 인접행렬이 더 편한거 같다(inorder를 계산할 떄)        

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

int n,m;
vector<int> last;
vector<vector<int> > adj;

void BFS_topoSort(){
    vector<int> indegree(n+1, 0);

    for(int u=1;u<=n;u++){
        for(int v=1;v<=n;v++){
            if(adj[u][v]) indegree[v] += adj[u][v];
        }
    }

    queue<int> q;
    for(int i=1;i<=n;i++) if(!indegree[i]) q.push(i);   //DAG특성상 하나가 있을거임
    int cnt=0;
    vector<int> curorder;
    while (!q.empty()){
        int here = q.front();
        q.pop();
        curorder.push_back(here);

        for(int i=1;i<=n;i++){
            if(adj[here][i]){
                indegree[i]--;
                if(!indegree[i]) q.push(i);
            }
                
        }
        cnt++;
    }
    
    if(cnt!=n) cout << "IMPOSSIBLE" << '\n';
    else{
        for(int i=0;i<curorder.size();i++) cout << curorder[i] << ' ';
        cout << '\n';
    }
}
int main(){
    fast_io;
    int t; cin >> t;
    while (t--){
        cin >> n;
        last = vector<int> (n+1);
        adj = vector<vector<int> > (n+1, vector<int> (n+1, 0));
        for(int i=1;i<=n;i++) {
            cin >> last[i];
            for(int j=1;j<i;j++){
                adj[last[j]][last[i]]++;  //last[j]에서 last[i]로 가는길이 있다
            }
        }
        
        cin >> m;
        for(int i=0;i<m;i++){
            int u, v;
            cin >> u >> v;
            if(adj[u][v]<adj[v][u]) swap(u, v);
            adj[u][v]--;
            adj[v][u]++;
        }

        BFS_topoSort();
    }
}
```
