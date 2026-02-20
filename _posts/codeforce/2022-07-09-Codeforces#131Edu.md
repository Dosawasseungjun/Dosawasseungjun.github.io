---
layout: post
categories: ["Codeforces"]
title:  "코드포스 - 나는 바보다"
tags : [upsolving, 코드포스]
---

에듀 라운드 131 업솔빙
===============================

## Educational Codeforces Round 131 개요
이쯤 되면 컨디션 문제도 아닌것같다.    
내가 그린은 어케 갔었는지도 의문이다.ㅋㅋㅋㅋㅋ       
코포는 시간이 생명인데 영어에서 자꾸 절어서 시간이 오래걸리고 여전히 3솔을 못한다.ㅠㅠ       
이제부턴 진짜 버추얼이라도 돌아봐야겠다.       

## A. Grass Field
너무 쉬웠는데 한번 틀렸다.      
영어를 잘못 이해했다. 자신을 포함해서 총 3개의 칸이 지워지는건데 왜 2개라고 읽었는지 모르겠다.     
바보 같은 실수로 절고 7분 걸렸다.       
``` cpp
int cnt=0;
for(int i=0;i<2;i++){
    for(int j=0;j<2;j++){
        cin >> board[i][j];
        if(board[i][j]) cnt++;
    } 
}
if(cnt==4) cout << 2 << '\n';
else if(cnt==0) cout << 0 << '\n';
else cout << 1 << '\n';
```

## B. Permutation
이거는 해석을 오히려 잘해서 헷갈렸다.     
해석한 걸로 따지면 d가 2일 때가 최적이고 그냥 그걸 출력하면 된다.     
그러면 d가 의미가 있나 싶어서 말도 안되는 증명하다가 시간 다 보냈다.      
그래서 2틀하고 에라이 그냥 d가 2인걸로 하자 했더니 AC나옴..ㅡㅡ
```cpp

cout << 2 << '\n';  //d는 무조건 2가 최적
for(int i=1;i<=n;i++){
    if(visited[i]) continue;
    for(int j=i;j<=n;j*=2){
        if(visited[j]) continue;
        cout << j << ' ';
        visited[j] = true;
    }
}

```

## C. Schedule Management
솔직히 많이 배운 문제이다.     
처음에는 dp인가 하다가 아닌것같아서 다시 생각해보니      
[이중 우선순위 큐] <https://www.acmicpc.net/problem/7662>  .    
가 생각났다. 그래서 우선순위 큐 2개로 다뤄봤는데 디버깅하다가 우선순위큐가 중복을 허용하지 않는다는 걸 알았다.      
그래서 멘붕왔는데 내 풀이를 버리질 못하고 서성대다가 끝나버렸다.     
다른분들중에 나랑 같은 생각하신 분은 multiset을 이용하여 풀었더라...       
멀티셋을 활용하는걸 잘 알아둬야겠다.    
에디토리얼에는 이분탐색으로 푸는 방법이 나와있고 내가 이분탐색을 매우 못한다는 것을 깨달았다.      

```cpp

bool check(int t){
    ll fr =0, need = 0;
    for(int i=1;i<=n;i++){
        if(t>=nums[i]) fr += (t-nums[i])/2; //자기 일 끝내고 남는 시간
        else need += nums[i] -t;    // 자기 일을 못끝내서 남는 시간
    }
    return need<=fr;    //시간이 여유로우면 참을 리턴
}

int l = 0, r = 2*m; // 모든일을 2시간이 걸려서 하면이 최대고
        int res = -1;
        while (l<=r){   //이분탐색으로 제일 여유로운 시간중 최솟값을 찾는다
            int mid = (l+r)>>1;
            if(check(mid)){
                res = mid;
                r = mid-1;
            }else{
                l = mid+1;
            }
        }
        cout << res << '\n';
```


## D. Permutation Restoration
나에겐 넘 어려웠다 어떤 상황인지는 알겠는데 아이디어가 진짜 안 떠올랐다.     
그래서 10분보고 그냥 버렸던 것 같다.     
핵심은 수학적으로 처음 배열과 수정된 배열의 관계를 알아내는 것이다.     
그러면 범위가 나오고 그 범위의 시작점이 작으면서 끝점도 작은 것 부터 해결한다.      
에디토리얼을 보고도 굉장히 까다로웠던 문제였다.      
```cpp
original = vector<int> (n+1);
modify = vector<int> (n+1);
seg = vector<pii> (n+1, make_pair(-1, -1));
for(int i=1;i<=n;i++) cin >> modify[i];
for(int i=1;i<=n;i++){
    seg[i] = make_pair(i/(modify[i]+1)+1,i);   //i번째 idx의 수는 i/modift[i]+1 이상이다
}
sort(seg.begin(), seg.end());
int j =1;
set<pii> s;
for(int i=1;i<=n;i++){
    while (j<=n&&seg[j].first==i){
        int idx = seg[j++].second;
        s.insert(make_pair(modify[idx]?idx/modify[idx]:n, idx));    //idx번째 수는 first이하이다.
    }
    original[s.begin()->second] = i;
    s.erase(s.begin());
            
}
for(int i=1;i<=n;i++) cout << original[i] << ' ';
cout << '\n';
```
