---
layout: posts
categories: ["Codeforces"]
title:  "코드포스 - 3솔의 벽 깼다!"
tags : [upsolving, 코드포스]
---

codeforce round #811(div 3), #812(div 2), CodeTon round 2 업솔빙
===============================

## Codeforces Round #811, #812, #CodeTon 개요
너무 귀찮아서 3개를 한꺼번에 포스팅한다.      
기술 블로그 쓰는 분들이 정말 대단하다.      
공부하기도 바쁜데 기록까지... 최근 라운드들은 그래도 그린퍼포나 민트퍼포가 나왔다.      
그래도 블루 퍼포는 안나오네 ㅠㅠ      
코드톤(7월 31일), 811(8월 1일), 812(8월 6일)에 쳤고, 812에 드디어 div2 3솔을 처음해봤다. ㅎㅎ      
물론 C가 그리 어렵진 않았지만 앞으로 잘할 수 있을거란 생각이 든다!!       

## CodeTon A. Two 0-1 Sequences(0:24)
꽤나 까다로웠다.     
이 문제 풀다가 탈주할까 고민했다.      
근데 조금만 관찰하니 뒤에 부분만 잘 비교해도 되겠다는 걸 알아차렸고 구현은 쉬워서 24분 걸렸다.       

```cpp
cin >> n >> m;
cin >> a >> b;
bool ok = false;
for(int i=0;i<=n-m;i++){
    if(a[i]==b[0]) ok = true;
}
for(int i=1;i<m;i++){
    if(a[i+n-m]!=b[i]) ok = false;
}
if(ok) cout << "YES\n";
else cout << "NO\n";
```

## CodeTon B. Luke is a Foodie(0:42)
코드포스에 많이 나오는 유형 같았고 최근에 공부했던 큐나 덱을 이용하면 풀 수 있을 것 같았다.      
그래서 최대값을 관리하는 덱, 최솟값을 관리하는 덱 두개를 만들어서 해결했다.      
신촌 ICPC 하길 잘했다 ㅎㅎ       
```cpp
ndq.clear();
xdq.clear();
cin >> n >> x;
piles = vector<int> (n+1);
int res = 0;
for(int i=1;i<=n;i++) cin >> piles[i];
for(int i=1;i<=n;i++){            
    while (!ndq.empty()&&ndq.back()>=piles[i]) {
        ndq.pop_back();
    }
    ndq.push_back(piles[i]);
    while (!xdq.empty()&&xdq.back()<=piles[i]) {
        xdq.pop_back();
    }
    xdq.push_back(piles[i]);            
    if(xdq.front()-ndq.front()>2*x){
        res++;
        while (ndq.size()>1) ndq.pop_front();
        while (xdq.size()>1) xdq.pop_front();
    }            
}
cout << res << '\n';
```

## CodeTon C. Virus(upsolving)
솔직히 이 문제는 풀 수 있을 줄 알았다.      
관찰을 제대로 했고 집 사이 차이가 큰 쪽부터 막아야겠다는 생각은 바로했다.      
근데 계속 구현을 못했다.ㅠㅠ      
에디토리얼 봐도 아이디어는 똑같은데 참 아쉽다.     
푸신분들을 살펴보니 전체에서 안걸린 집을 빼는 식으로 하셨다.     
난 처음에 걸린집을 직접 구하려니까 힘들었다.      
```cpp
cin >> n >> m;
for(int i=1;i<=m;i++) cin >> arr[i];
sort(arr+1, arr+1+m);
for(int i=1;i<m;i++) d[i] = arr[i+1]-arr[i]-1;
d[m] = arr[1]+n-1-arr[m];
sort(d+1, d+1+m);
int res = 0;
for(int i=m;i>0;i--){
    if(d[i]-4*(m-i)==1) res++;
    else res += max(0, d[i]-4*(m-i)-1);
}
cout << n-res << '\n';
```

## CodeTon D. Magical Array(upsolving)
 코포에 많이 나오는 스타일 같아서 공부겸 업솔빙한다.     
 작업 1 : i, j골라서 1빼고 그 전에 꺼에 1 더함(평범한 배열에 쓰임)        
 작업 2 : i, j골라서 1빼고 i 전에꺼 j+2에 1 더함(특별한 배열에 쓰임)       
c1, c2, c3배열이 주어졌을 때 특별한 배열이 뭐인지 맞추고 작업 2가 어디서 쓰였는지 맞춰라      
역추적하는 문제는 항상 어렵다....      
사고의 흐름이 조금 다른것 같아서 이다.       
근데 이 문제는 그것과는 별개로 좀 수학적인 문제라 어려웠다.       
연산을 해보면 작업 1을 하면 Ai*i가 남는다.      
작업 2를 하면 sigma(Ai*i)+1이다. 따라서 sigma(Ai*i)를 구해서 답을 낼 수 있다.      
정말 어려웠다....
 ```cpp
cin >> n >> m;
for(int i=1;i<=n;i++){
    a[i] = 0;
    for(int j=1;j<=m;j++){
        ll k; cin >> k;
        a[i] += j*k;
    }
    b[i] = {a[i], i};
}
sort(b+1, b+n+1);
cout << b[n].second << ' ' << b[n].first-b[1].first << '\n';
 ```

## 811 A. Everyone Loves to Sleep(0:23)
꽤 오래 걸린 문제 시계 문제였는데... 좀 헤맸다.. 연습좀 해야지 ㅋㅋ       


## 811 B. Remove Prefix(0:34)
코드포스에서 많이 본 듯했고 너무 쉬웠다.      
A보다 쉬웠던 것 같다.     
나는 맵으로 마지막 인덱스를 관리했고 마지막 인덱스만 출력하면 끝이다.      

## 811 C. Minimum Varied Number(1:05)
증명이 쉽지 않아서 꽤 오래걸렸다..  먼가 큰 수 부터 넣으면 수가 짧아지니까 될 것같았다.     
그래서 넣어보니까 틀렸다?? 근데 생각해보니 젤 작은 수니까 뒤집어야하는데 안뒤집었다 ㅋㅋㅋㅋ       
그래서 reverse 해주니까 바로 AC

## 803 D. Color with Occurrences(upsolving)

 ```cpp
int n, iq;
cin >> n >> iq;
for(int i=1;i<=n;i++) cin >> a[i];
int Q= 0;
for(int i=n;i>=1;i--){
    if(a[i]<=Q) res[i] = 1;
    else if(Q<iq){
        Q++;
        res[i] = 1;
    }else res[i] = 0;
}
for(int i=1;i<=n;i++) cout << res[i];
cout << '\n';
```

## 811 E. Add modulo 10(2:05)
D같은 문제는 항상 못풀었어서(코포에 많이나오는데도 못풂ㅋㅋ)      
E로 도망왔는데 더 할만해 보여서 잡았다.      
실제로도 E가 푼사람이 더 많았음 ㅋㅋ       
써보니까 규칙성이 20기점으로 계속 바뀌는 게 보였고 나는 이를 다루기 위해 
10의 자리와 일의 자리를 생각했다.     
10의 자리가 2로 나눠지면 어쩌구~ 그에 따른 일의 자리가 어쩌구~ 근데 푼 사람들 보니 그냥 %20을 했다...또르륵..ㅠㅠ      
나는 분리집합까지 다뤄서 분리했는데 그냥 %20해서 케이스워크 하면 끝...       


## 812 A. Traveling Salesman Problem(0:06)
처음에 초기화를 0, 0으로 해주는 거빼고 딱히 주의 할 것도 없는 문제.       


## 812 B. Optimal Reduction(0:28)
문제를 조금 관찰해보니 쭉 증가하거나 쭉 감소, 그리고 증가하다가 감소하는 경우 가능하다.     
근데 나는 감소하다가 증가하는 것도 했다가 2번 틀렸다.      
조금 더 신중하고 정확했어야했는데 성급했다.          
이거 사실 10분컷했으면 많이 올랐을텐데 아쉽다.      

## 812 C. Minimum Varied Number(1:11)
드디어 3솔을 해내서 너무 기쁘다 ㅠㅠ       
근데 생각보다 쉽긴했다.(30분만에 풀었음 ㅋㅋ B랑 비슷..)       
증명은 제대로 못했지만 이 문제도 811의 C와 비슷하게 큰것부터 처리하면 될 것같다는 관찰이 있었다.      
실제로 예제를 보면 큰 제곱수가 뒤에 쭉있다.      
큰 제곱수부터 처리하기 위해 스택을 이용했다~       
```cpp
vector<bool> used(n, false);
int biga = 0;
stack<int> s; s.push(0);
while (biga*biga<n){
    biga++;
    s.push(biga);
}
vector<int> ans; bool ok = true;
for(int i=n-1;i>=0;i--){
    if(s.empty()){
        ok = false;
        break;
    }
    int usenum = s.top()*s.top()-i;
    while (usenum>=n||(!s.empty()&&usenum>0&&used[usenum])) {
        s.pop();
        usenum = s.top()*s.top()-i;
    }
    if(usenum<0){
        ok =false;
        break;
    }
    used[usenum] = true;
    ans.push_back(usenum);
}
if(ok){
    for(int i=ans.size()-1;i>=0;i--){
        cout << ans[i] << ' ';
    }
    cout << '\n';
}else cout << -1 << '\n';
```

## 812 D. Tournament Coundown(upsolving)
인터랙티브는 아직도 뭐하라는지 잘 모르겠다..       
문제는 이해했지만 뭔가 막막해서 계속해맸다.      
이런건 대체로 이분탐색인데...하다가 그냥 포기했다~ ㅋㅋ       
답을 보니 꽤 어려웠다... 일단 4명씩 보면서 판단한다.      
1. 1번 3번이 비겼으면 그 둘은 우승자가 아니다.      
2. 1번이 3번보다 더 이겼으면 2번과 3번은 우승자가 아니다.      
3. 1번보다 3번이 더 이겼으면 1번과 4번은 우승자가 아니다.   
    
라는 관찰이 필요하다. 그리고 여까진 충분히 초딩도 생각할만하다(근데 난못함 ㅋㅋ)       
그리고 이를 위해서 그냥 4개씩 모아서 ask하면 된다.       
그리고 승자들끼리 또 해준다. 그러면 4명에서 1명으로 후보가 계속 줄어들어서 금방한다.       
근데 인터랙티브 문제의 어러움은 디버깅이 어렵다는 것이다.      
디버깅을 어떻게 해야하는지 모르겠다~     