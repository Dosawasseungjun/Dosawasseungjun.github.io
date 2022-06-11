---
layout: posts
categories: ["BOJ"]
title:  "Disjoint Set"
---

백준 4803 트리
===============================

[4803 트리] <https://www.acmicpc.net/problem/4803>  .     
 상호 배타적 집합(disjoint set)을 이용하여 트리인지 아닌지 판단한다.

## 문제상황 파악하기.  
정점을 잇는 간선이 주어진다 .   
이 그래프는 서로 떨어져있는 그래프일 수도 있고 사이클이 있을 수도 있다.   

즉 떨어져 있는 그래프 하나 하나가 트리인지 아닌지 확인하고 그 개수를 세는 것이다!
트리의 특징으로는 정점이 V면 간선의 개수는 v-1이고, 사이클이 없다는 것이다.

## Disjoint Set이 뭐길래?
집합을 다루는 자료구조이다.      
각 집합마다 부모가 하나 있다고 하고 이를 트리 구조로 정리하는 것이 disjoint set이다.   
이 문제에서는 merge부분을 조금 변형하여 disjoint set을 구현했다.   
disjoint set기본 자체는 종만북 : 알고리즘 문제해결 전략을 참고하였다.   
```cpp
struct disjointSet{
    vector<int> parent,rank;
    disjointSet(int n):parent(n+1), rank(n+1, 1){
        for(int i=1;i<=n;i++) parent[i] = i;
    }
    int find(int u){
        if(parent[u]==u) return u;
        return parent[u] = find(parent[u]);
    }
    void merge(int u, int v){
        u = find(u);
        v = find(v);
        if(u==v){
            tominus[v] = 1;
            return;
        }
        
        if(tominus[u]&&tominus[v]) tominus[u] = 0;
        if(rank[u]>rank[v]) swap(u,v);
        parent[u] = v;
        rank[v] += rank[u];
        rank[u] = 0;
    }
};
```

## 아이디어 얻기.  
사이클이 있는 것도 세어주되 나중에 빼주기 위해서 위에 있는 tominus 배열을 만들었다.   
연결되어있는 그래프의 개수를 모두 세고 그중에 tominus(사이클이 있는 그래프)를 빼준다는 느낌이다.   

## 주의할 점
하지만 문제가 생겼다!! 사이클이 있는 두 개의 집합을 합칠 때 tominus가 각각 1이라서 총 2번 빠지는 문제가 생겼다.   
이는 둘다 tominus가 1인것을 합칠 때 하나를 0으로 만들어 줌으로써 해결했다.   

반례를 만들었으니 참고 하면 좋을것 같다.
9 13   
1 2   
2 3   
3 4   
1 5   
2 5   
3 5   
4 5   
6 7   
7 8   
8 9    
6 9    
7 9    
4 6   
0 0
답은 no tree여야하는데 나는 tree값이 음수가 되어버려 이상한것을 출력했다..


# 실제 코드

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<int> tominus;

struct disjointSet{
    vector<int> parent,rank;
    disjointSet(int n):parent(n+1), rank(n+1, 1){
        for(int i=1;i<=n;i++) parent[i] = i;
    }
    int find(int u){
        if(parent[u]==u) return u;
        return parent[u] = find(parent[u]);
    }
    void merge(int u, int v){
        u = find(u);
        v = find(v);
        if(u==v){
            tominus[v] = 1;
            return;
        }
        
        if(tominus[u]&&tominus[v]) tominus[u] = 0;
        if(rank[u]>rank[v]) swap(u,v);
        parent[u] = v;
        rank[v] += rank[u];
        rank[u] = 0;
    }
};
int main(){
    cin.tie(NULL); cout.tie(NULL); ios_base::sync_with_stdio(false);
    int tc=0;
    while (1){
        tc++;
        int n, m;
        cin >> n >> m;
        if(n==0&&m==0) break;
        tominus = vector<int> (n+1,0);
        disjointSet dset(n);
        int trees = 0;
        for(int i=0;i<m;i++){
            int a,b;
            cin >> a >> b;
            dset.merge(a,b);
        }
        for(int i=1;i<=n;i++){
            if(dset.rank[i]>0) trees++;
            trees -= tominus[i];
        }
        if(trees==0) cout << "Case " << tc << ": No trees." << '\n';
        else if(trees==1) cout << "Case " << tc << ": There is one tree." << '\n';
        else cout << "Case " << tc << ": A forest of " << trees << " trees." << '\n';
    }
    
}


```
