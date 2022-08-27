---
layout: posts
categories: ["BOJ"]
title:  "Segment Tree 응용"
tags : [DnC, 분할정복, 세그먼트트리]
---

백준 10167번 금광 문제풀이
====================================

[10167 금광] <https://www.acmicpc.net/problem/10167>  .     
 세그먼트트리 대표 다이아 금광을 풀어보자!       
[연속합과 쿼리](https://www.acmicpc.net/problem/16993)       
위 문제를 풀고 나니 금광도 풀 수 있다고 해서 호다닥 달려왔다.      
근데 뭐가 풀 수 있다는 건지 짱짱 어려웠다.      
좌표압축도 같은 값 처리 어떡하지? 이러다가 이상하게 짜고 세그트리를 어떻게 해야하지 하면서 얼탔다.      
이 문제가 워낙 유명해서 다른 블로그에 정리가 잘 되어있어서 다행이다.      
역시 사람들은 대단하다.     

## 문제상황 파악하기.  
연속합과 쿼리를 풀어봤다면 연속하는 최대 합을 구하는 테크닉을 배웠을 것이다.(분할 정복느낌으로다가)      
그렇다면 금광문제도 그 문제처럼 치환해야하고 그렇다면 좌표간의 관계. 즉 정렬이 필요하다.     
하지만 좌표값이 최대 10억까지 가니까 이를 다 커버하기에는 메모리가 부족하다.     
따라서 좌표 압축을 통해 처리해야한다.     
좌표압축은 여러 블로그에 좋은 테크닉이 있어서 참고했다.(좌표압축이라고 치면 많이 나온다)     

## 아이디어 얻기.  
좌표 압축 까지 했다면 어떤식으로 자료들을 관리 할지 보자!      
먼저 나는 Mine(광산)클래스를 다음과 같이 만들었다/
```cpp
class Mine{
public:
    int x, y;
    ll value;
    
    bool operator < (const Mine &m)const{
        if(this->y != m.y) return this->y < m.y;
        else return this->x<m.x;
    }
};
```
연산자 오버로딩은 y값을 기준으로 정렬하도록 만들었다.      
이는 x값으로 해도 되지만 y값이 위에서 부터 내려오는 모습(2차원 배열을 기준으로 본것이다.)이 우리의 직관에 더 부합한다.      
좌표압축까지 완료 했다면 이제 모든 점을 기준으로 검사해야하는데 작은 점부터 내려가면서 검사한다.     
그러니 자신보다 y값이 작은 건 다시 안봐도 된다.     
y값을 기준으로 검사하며 x좌표기준 세그트리에 값을 넣으면 된다.      
이 때 주의 해야할 점은 y값이 같은 점을 검사 할때 앞에것, 뒤에것 따로 하는게 아니라 한번에 넣어놓고 검사해야한다.      
당연하다 네모를 그리면 같이 들어가니까 말이다.      
트리는 다음과 같은 Data class를 이용했다.     
```cpp
class Data{
public:
    ll lmax, rmax, fmax, tmax;
};
```

## 주의할 점
y값이 같으면 같이 검사해야하는데 나는 갑자기 x값하고 헷갈렸다.      
x도 같이 검사 해야하는거 아니야? 했는데 아니다.     
조금만 그려보면 알 수 있다.       

# 실제 코드
나머지 주의 할 점은 코드에 주석으로 처리했다.     
```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <string>
#include <cstring>
#include <queue>
#include <cmath>
#include <set>
#include <map>
#define fast_io cin.tie(NULL); cout.tie(NULL); ios_base::sync_with_stdio(false);
using namespace std;
typedef long long ll;
typedef pair<int, int> pii;
typedef pair<ll, ll> pll;

int n;
class Mine{
public:
    int x, y;
    ll value;
    
    bool operator < (const Mine &m)const{
        if(this->y != m.y) return this->y < m.y;
        else return this->x<m.x;
    }
};

class Data{
public:
    ll lmax, rmax, fmax, tmax;
};

vector<Mine> mines;
vector<Data> tree;
vector<int> xcoord;
vector<int> ycoord;

void compress(){    //좌표 압축함
    sort(xcoord.begin(), xcoord.end());
    xcoord.erase(unique(xcoord.begin(), xcoord.end()), xcoord.end());
    sort(ycoord.begin(), ycoord.end());
    ycoord.erase(unique(ycoord.begin(), ycoord.end()), ycoord.end());
    for(int i=1;i<=n;i++){
        mines[i].x = (int)(lower_bound(xcoord.begin(), xcoord.end(), mines[i].x)-xcoord.begin())+1;
        mines[i].y = (int)(lower_bound(ycoord.begin(), ycoord.end(), mines[i].y)-ycoord.begin())+1;
    }
    sort(++mines.begin(), mines.end());
}

Data update(int x, ll v, int node, int S, int E){
    if(x<S||x>E) return tree[node];
    if(S==E){
        tree[node].lmax += v;
        tree[node].rmax += v;
        tree[node].fmax += v;
        tree[node].tmax += v;
        return tree[node];
    }
    int mid = (S+E)>>1;
    Data left = update(x, v, 2*node, S, mid);
    Data right = update(x, v, 2*node+1, mid+1, E);
    Data &ret = tree[node];
    ret.fmax = left.fmax+right.fmax;
    ret.lmax = max(left.lmax, left.fmax+right.lmax);
    ret.rmax = max(right.rmax, right.fmax+left.rmax);
    ret.tmax = max({left.tmax, right.tmax, left.rmax+right.lmax});
    return ret;
}

int main(){
    fast_io;
    cin >> n;
    mines = vector<Mine> (n+1);
    xcoord = vector<int> (n);
    ycoord = vector<int> (n);
    for(int i=1;i<=n;i++){
        cin >> mines[i].x >> mines[i].y >> mines[i].value;
        xcoord[i-1] = mines[i].x;
        ycoord[i-1] = mines[i].y;
    }
    compress();  //좌표 압축
    ll res = 0;
    for(int i=1;i<=n;i++){
        if(mines[i].y==mines[i-1].y) continue;  //y값이 동일하면 뒤에거만 검사한다. 왜냐면 밑에서 처리 하는걸보면안다.
        tree = vector<Data> (4*n+1, {0,0,0,0});   //0이상임 최대값은
        for(int j=i;j<=n;j++){
            int hx = mines[j].x; ll hv = mines[j].value;
            update(hx, hv, 1, 1, n);
            // y값이 동일한것은 업데이트를 다 해놓고 마지막만 연산한다.
            // 왜냐면 다 같이 네모 안으로 들어가니까
            if(j==n||mines[j].y!=mines[j+1].y) res = max(res, tree[1].tmax);
        }
    }
    cout << res;
}

```
