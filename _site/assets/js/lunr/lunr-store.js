var store = [{
        "title": "정렬1",
        "excerpt":"매우매우 많은 정렬이 있지만 그중 가장 안 어려운 3가지를 공부해보았다. 버블정렬 / 선택정렬 / 삽입정렬 모두 시간복잡도는 O(n^2)이다. 단순히 생각하면 for문을 두번 쓰기 때문이다. # Swap 구현하기 1 2 3 4 5 6 7 void swap(int *ptr1, int *ptr2) { int temp; temp = *ptr1; *ptr1 = *ptr2; *ptr2 =...","categories": ["Problem Solving","Algorithm"],
        "tags": [],
        "url": "/posts/Sorting1/",
        "teaser": null
      },{
        "title": "Stack",
        "excerpt":"스택 구현하기 ========== 자료구조의 기본이라고 하면 스택 과 큐가 있다 백준 10828번에서 마주친 스택 #include 헤더 파일을 쓰느 방법도 있지만 문제가 문제인지라 직접 구현을 해보기로했다. # Class로 나의 스택 구현하기 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20...","categories": ["Problem Solving","Algorithm"],
        "tags": [],
        "url": "/posts/stack/",
        "teaser": null
      },{
        "title": "누적 합",
        "excerpt":"백준 10986 나머지합 문제풀이 굉장히 오랜만에 블로그로 돌아왔다. 폐관수련 중이였다. 백준티어도 골드2정도로 올렸고 여러가지 자료구조들과 알고리즘들을 익혔다. 이제 본격적으로 포스팅도 해가며 공부를 할 계획이다. 이제 백준 플레티넘과 코드포스 블루를 향해 달려보도록 하겠다. 이후에 고수가 된다면 공부방법도 포스팅해봐야지 그 시작으로 누적합관련 문제.. 백준 10986 나머지 합을 풀어보도록 하자 10986 나머지 합....","categories": ["Problem Solving","Algorithm"],
        "tags": [],
        "url": "/posts/%EB%88%84%EC%A0%81%ED%95%A9(%EB%B0%B1%EC%A4%80-10986-%EB%82%98%EB%A8%B8%EC%A7%80-%ED%95%A9)/",
        "teaser": null
      },{
        "title": "이분탐색",
        "excerpt":"백준 12015 가장 긴 증가하는 부분 수열2 문제풀이 12015 가장 긴 증가하는 부분 수열2. DP의 대표적인 문제인 LIS의 시간 복잡도를 줄여보자 문제상황 파악하기. 이 문제는 가장 긴 증가하는 부분 수열1 보다 N이 1000배 정도 늘어났다. 따라서 같은 방법으로 풀면 TLE(Time Limit Exceeded)를 받게 된다. 그러면 시간 복잡도를 O(NlogN)까지 줄여서 풀어야한다....","categories": ["Problem Solving","Algorithm"],
        "tags": [],
        "url": "/posts/%EC%9D%B4%EB%B6%84%ED%83%90%EC%83%89(%EB%B0%B1%EC%A4%80-12015-%EA%B0%80%EC%9E%A5-%EA%B8%B4-%EC%A6%9D%EA%B0%80%ED%95%98%EB%8A%94-%EB%B6%80%EB%B6%84-%EC%88%98%EC%97%B42)/",
        "teaser": null
      },{
        "title": "기하",
        "excerpt":"백준 2166 다각형의 면적 문제풀이 [2166 다각형의 면적] https://www.acmicpc.net/problem/2166 . 신발끈 공식을 이용하여 다각형의 면적을 구해보자 문제상황 파악하기. 점들로 구성된 다각형의 넓이를 구하는 문제로 신발끈 공식을 이용하여 구할 수 있다. 점의 최대 좌표는 100000이고 그렇다면 면적을 구할 때 int형을 사용하면 overflow가 나온다. 따라서 면적 구하는 과정에서 long long형을 사용하고 마지막에...","categories": ["Problem Solving","Algorithm"],
        "tags": [],
        "url": "/posts/%EB%8B%A4%EA%B0%81%ED%98%95%EC%9D%98-%EB%A9%B4%EC%A0%81(%EB%B0%B1%EC%A4%80-2166-%EB%8B%A4%EA%B0%81%ED%98%95%EC%9D%98-%EB%A9%B4%EC%A0%81-)/",
        "teaser": null
      },{
        "title": "BFS",
        "excerpt":"백준 2206 벽 부수고 이동하기 문제풀이 [2206 벽 부수고 이동하기] https://www.acmicpc.net/problem/2206 . BFS로 최단거리를 탐색한다. 문제상황 파악하기. 전형적인 그래프 탐색 문제처럼 보인다. 최단거리를 구해야하므로 DFS가 아닌 * BFS(너비우선 탐색) 으로 풀어야한다. 문제는 벽을 한번만 부술수 있다는 것, 그리고 마지막까지 못갈 수도 있다는 점을 파악하고 문제를 풀어보자! BFS가 뭐길래? 최단거리 문제이기에...","categories": ["Problem Solving","Algorithm"],
        "tags": [],
        "url": "/posts/BFS-%EC%B5%9C%EB%8B%A8%EA%B1%B0%EB%A6%AC(%EB%B0%B1%EC%A4%80-2206-%EB%B2%BD-%EB%B6%80%EC%88%98%EA%B3%A0-%EC%9D%B4%EB%8F%99%ED%95%98%EA%B8%B0)/",
        "teaser": null
      },{
        "title": "Disjoint Set",
        "excerpt":"백준 4803 트리 [4803 트리] https://www.acmicpc.net/problem/4803 . 상호 배타적 집합(disjoint set)을 이용하여 트리인지 아닌지 판단한다. 문제상황 파악하기. 정점을 잇는 간선이 주어진다 . 이 그래프는 서로 떨어져있는 그래프일 수도 있고 사이클이 있을 수도 있다. 즉 떨어져 있는 그래프 하나 하나가 트리인지 아닌지 확인하고 그 개수를 세는 것이다! 트리의 특징으로는 정점이 V면...","categories": ["Problem Solving","Algorithm"],
        "tags": ["Disjoint Set"],
        "url": "/posts/DisjointSet/",
        "teaser": null
      },{
        "title": "Prim Algorithm optimazation",
        "excerpt":"백준 4386 별자리 만들기 문제풀이 [4386 별자리 만들기] https://www.acmicpc.net/problem/4386 . 간선을 추려서 MST(minimum spanning tree)를 만든다. 문제상황 파악하기. 정점들의 위치가 주어지고 이동은 어디든 할 수 있다 . 이동 할때 그 거리는 점과 점사이의 거리이다. 모든 별이 연결은 되어 있어야한다. 즉 후보 간선들을 만들고 모든 점을 포함하는 MST를 만들고 그 가중치들을...","categories": ["Problem Solving","Algorithm"],
        "tags": ["MST","Prim"],
        "url": "/posts/MST&Prim_Algorithm/",
        "teaser": null
      },{
        "title": "KMP의 Partial Match Table",
        "excerpt":"백준 1305 광고 문제풀이 [1305 광고] https://www.acmicpc.net/problem/1305 . KMP알고리즘 base의 failure function을 이용해서 문제의 답을 구한다. 문제상황 파악하기. 광고 문구가 될 수 있는 것중 가장 짧은 광고문구를 찾는 문제이다 . 광고가 될수 있는 문구 1글자, 2글자, 3글자… 씩 늘려가며 이 문구가 광고가 될 수 있나 검사할 수도 있지만 이는 O(N^2)의...","categories": ["Problem Solving","Algorithm"],
        "tags": ["KMP","크누스모리스"],
        "url": "/posts/KMP/",
        "teaser": null
      },{
        "title": "코드포스 폭망 기념",
        "excerpt":"코드포스 폭망기념 upsolving Codeforces Round #800 Editorial 개요. 코드포스를 시작하고 그래도 계속 그린 퍼포먼스는 나오길래 답만 보고 넘겼었다. 그런데 이번 코포에서 정말 단 한문제도 못풀었다… 그래서 분노의 업솔빙을 해보려고 한다. ㅠㅠ 백준 플레가 코포 뉴비에서 헤매고 있다니 정말 분하고 부끄럽다. 업솔빙을 계기로 강해져보자 A. Creep 나를 눈물나게 한 문제이다. 접두사가...","categories": ["Competitive Programming","codeforce"],
        "tags": ["upsolving","코드포스"],
        "url": "/posts/Codeforces-800/",
        "teaser": null
      },{
        "title": "Segment Tree",
        "excerpt":"백준 11505 구간 곱 구하기 문제풀이 [11505 구간 곱 구하기] https://www.acmicpc.net/problem/11505 . segment tree를 이용하여 빠르게 구간 곱을 변경하고 출력한다. 문제상황 파악하기. [2042 구간 합 구하기] https://www.acmicpc.net/problem/2042 . 위 문제와 똑같지만 구간합이 구간 곱으로 변했다. 합과 거의 비슷하지만 주의해야할 부분이 몇개 있다. 먼저 구간 곱을 모두 구해 놓고 한다고 하면...","categories": ["Problem Solving","Algorithm"],
        "tags": ["Segment Tree","세그먼트트리"],
        "url": "/posts/Segment-Tree/",
        "teaser": null
      },{
        "title": "코드포스 - 3솔의 벽",
        "excerpt":"3솔의 벽이 너무 높다.. Codeforces Round #801, #802 div2 개요. 벌써 코포를 시작한지 한달 정도가 넘어간다. div2만 들어서면 2솔밖에 못한다.. 3솔의 벽이 너무 높다. 아이디어도 못떠올리는 경우가 대다수이다. “dp 같긴한데…, greedy같긴한데..”생각만하고 못풀 때도 많다. 문제점 잡기가 어렵다. 3솔의 벽을 깨보기 위해 이번에는 C, D만 업솔빙 해보려고 한다. 801 C. Zero...","categories": ["Competitive Programming","codeforce"],
        "tags": ["upsolving","코드포스"],
        "url": "/posts/Codeforces-801,-802/",
        "teaser": null
      },{
        "title": "Segment Tree - 구간갱신",
        "excerpt":"lazy propagation없이 구간 갱신하기 [16975 수열과 쿼리 21] https://www.acmicpc.net/problem/16975 . lazy propagation없이 segment tree를 이용하여 구간 갱신을 하고 점 쿼리를 해결한다. 문제상황 파악하기. 문제는 구간에다가 k를 더한다. 우리가 알고있는 segment tree로는 구간의 크기만큼 시간이 걸릴 것이다. 그렇다면 구간이 크다면 그냥 선형 배열 수정하듯이 O(n)의 시간 복잡도를 가질 것이다. (세그트리의 의미가...","categories": ["Problem Solving","Algorithm"],
        "tags": ["Segment Tree","세그먼트트리"],
        "url": "/posts/Segment-Tree2/",
        "teaser": null
      },{
        "title": "Merge Sort",
        "excerpt":"merge sort를 이용하여 inversion 개수세기 [1517 버블 소트] https://www.acmicpc.net/problem/1517 . inversion의 개수를 센다. 문제상황 파악하기. 버블소트는 arr[i]&gt;arr[i+1]이면 swap하면서 진행하는 정렬 방법이다. 그리고 이는 당연하게도 O(n^2)이 걸린다. 그리고 당연하게도 그대로 구현하면 시간초과다 그러면 실버급이겠지. O(NlogN)까지는 허용 될 것이므로 다른 방법을 찾아야한다. inversion? i &lt; j 일 때 arr[i] &gt; arr[i+1] 일때...","categories": ["Problem Solving","Algorithm"],
        "tags": ["Merge Sort"],
        "url": "/posts/MergeSort/",
        "teaser": null
      },{
        "title": "Trie",
        "excerpt":"Trie 자료구조 이해하기 [5670 휴대폰 자판] https://www.acmicpc.net/problem/5670 . 트라이 자료구조를 이용한다. 문제상황 파악하기. 휴대폰의 자동완성 기능을 사용했을 때 버튼 누르는 횟수를 계산하는 문제이다. 트라이 자료구조를 이용하여 버튼을 누를 때마다 카운트를 해주면 된다. Trie가 뭐길래? 트라이 자료구조는 원래 있던 문자면 따라가다가 달라지면 방향을 틀어 새로운 길을 만드는 트리구조이다. 생각하기는 편한 자료구조인데...","categories": ["Problem Solving","Algorithm"],
        "tags": ["Trie"],
        "url": "/posts/Trie/",
        "teaser": null
      },{
        "title": "Topological Sort",
        "excerpt":"백준 3665번 최종 순위 문제풀이 [3665 최종 순위] https://www.acmicpc.net/problem/3665 . 그래프를 모델링하고 BFS 위상 정렬을 한다. 문제상황 파악하기. 작년순위가 모두 주어지고 그 다음에는 올해 등수가 바뀐 팀이 주어진다. 이 때 올해 순위를 확정하여야한다. 1등 부터 자식으로 방향이 있는 그래프를 모델링하고, 전후 관계가 있으므로 위상정렬한다. Topological Sort(위상 정렬)가 뭐길래? 예를 들면...","categories": ["Problem Solving","Algorithm"],
        "tags": ["DFS","위상정렬"],
        "url": "/posts/Topological-Sort/",
        "teaser": null
      },{
        "title": "Tree DP",
        "excerpt":"백준 1949번 우수 마을 문제풀이 [1949 우수 마을] https://www.acmicpc.net/problem/1949 . 트리에서 dp를 수행한다. 문제상황 파악하기. 정점의 합이 최대여야한다. 고르는 정점들이 인접하면 안된다. 안 고른 정점 옆에는 최소한 한 개는 고른 정점이 있어야한다. 이것도 3번이 낚시인데 사실 그리디 하게 생각해보면 무조건 고르는게 이득이다. 왜냐면 주민 수는 항상 양수 이기 때문이다. Tree에서...","categories": ["Problem Solving","Algorithm"],
        "tags": ["Tree","Dynamic Programming"],
        "url": "/posts/Tree-DP/",
        "teaser": null
      },{
        "title": "코드포스 - 나는 바보다",
        "excerpt":"에듀 라운드 131 업솔빙 Educational Codeforces Round 131 개요 이쯤 되면 컨디션 문제도 아닌것같다. 내가 그린은 어케 갔었는지도 의문이다.ㅋㅋㅋㅋㅋ 코포는 시간이 생명인데 영어에서 자꾸 절어서 시간이 오래걸리고 여전히 3솔을 못한다.ㅠㅠ 이제부턴 진짜 버추얼이라도 돌아봐야겠다. A. Grass Field 너무 쉬웠는데 한번 틀렸다. 영어를 잘못 이해했다. 자신을 포함해서 총 3개의 칸이 지워지는건데...","categories": ["Competitive Programming","codeforce"],
        "tags": ["upsolving","코드포스"],
        "url": "/posts/Codeforces-131Edu/",
        "teaser": null
      },{
        "title": "코드포스 - 익숙해지는 중",
        "excerpt":"codeforce round #805(div 3), #806(div 4) 업솔빙 Codeforces Round #805, #806 개요 +97점, -10점 했다. 그래도 긍정적인 부분은 이제 코포 유형이 뭔지 감이 잡히고 있다. 코포는 코포로 공부하는게 맞는것같다. 그래도 버추얼은 귀찮아서 안하지만 ㅋㅋㅋ div 4는 다 풀어야하는데 정말 슬프다.. 빨리 더 수련을 해야겠다. div 3, div 4 둘다 4솔했고...","categories": ["Competitive Programming","codeforce"],
        "tags": ["upsolving","코드포스"],
        "url": "/posts/Codeforces-805-806/",
        "teaser": null
      },{
        "title": "Divide & Conquer",
        "excerpt":"백준 18253번 최단경로와 쿼리 문제풀이 [18253 최단경로와 쿼리] https://www.acmicpc.net/problem/18253 . 쿼리를 한번에 계산하는 테크닉을 배워보자. 처음으로 풀게된 다이아 문제이고 참 좋은 문제라는 생각이 들어서 포스팅한다. 문제상황 파악하기. 문제상황은 간단하다 일단 Naive하게 짠다고 하면 각 쿼리마다 다익스트라를 하는 방법이고 이는 당연히 시간초과다. 그래도 다익스트라를 이용하여 최단거리를 구할 수 있다는 것을 생각할...","categories": ["Problem Solving","Algorithm"],
        "tags": ["DnC","분할정복"],
        "url": "/posts/Divide&Conquer/",
        "teaser": null
      },{
        "title": "코드포스 - 또 3솔의 벽",
        "excerpt":"codeforce round #807(div 2) 업솔빙 Codeforces Round #807 개요 하… 진짜 미칠 것 같다 이번엔 A, B를 20분 만에 풀어서 2시간동안 한 문제만 풀어도 3솔의 벽을 깨는 건데… 그걸 못했다. 2시간동안 C,D하나 풀기를…ㅠㅠ 이쯤 되면 이번 방학 목표를 코드포스 3솔로 바꿔야 할 것 같다.(원래 블루였음ㅋㅋ) 내 생각보다 블루, 퍼플이 엄청...","categories": ["Competitive Programming","codeforce"],
        "tags": ["upsolving","코드포스"],
        "url": "/posts/Codeforces-807/",
        "teaser": null
      },{
        "title": "Segment Tree 응용",
        "excerpt":"백준 10167번 금광 문제풀이 [10167 금광] https://www.acmicpc.net/problem/10167 . 세그먼트트리 대표 다이아 금광을 풀어보자! 연속합과 쿼리 위 문제를 풀고 나니 금광도 풀 수 있다고 해서 호다닥 달려왔다. 근데 뭐가 풀 수 있다는 건지 짱짱 어려웠다. 좌표압축도 같은 값 처리 어떡하지? 이러다가 이상하게 짜고 세그트리를 어떻게 해야하지 하면서 얼탔다. 이 문제가 워낙...","categories": ["Problem Solving","Algorithm"],
        "tags": ["DnC","분할정복","세그먼트트리"],
        "url": "/posts/Segment-Tree3/",
        "teaser": null
      },{
        "title": "코드포스 - 업솔빙 몰아서 함",
        "excerpt":"codeforce round #808(div 2), #803(div 2, virtual) 업솔빙 Codeforces Round #808, #803 개요 일단 지금 808 보고 난 직후 이고 역시나 2솔ㅠㅠ c, d만 몰아서 업솔빙 해볼 것이다. 이번 808은 너무 힘들었다. A가 잟안 풀려서 B를 해야하나 A를 해야하나 고민도 많이 됐고, 낼 때마다 WA를 받아서 내 멘탈도 Wa르르였다. 다행이...","categories": ["Competitive Programming","codeforce"],
        "tags": ["upsolving","코드포스"],
        "url": "/posts/Codeforces-808/",
        "teaser": null
      },{
        "title": "코드포스 - 3솔의 벽 깼다!",
        "excerpt":"codeforce round #811(div 3), #812(div 2), CodeTon round 2 업솔빙 Codeforces Round #811, #812, #CodeTon 개요 너무 귀찮아서 3개를 한꺼번에 포스팅한다. 기술 블로그 쓰는 분들이 정말 대단하다. 공부하기도 바쁜데 기록까지… 최근 라운드들은 그래도 그린퍼포나 민트퍼포가 나왔다. 그래도 블루 퍼포는 안나오네 ㅠㅠ 코드톤(7월 31일), 811(8월 1일), 812(8월 6일)에 쳤고, 812에 드디어...","categories": ["Competitive Programming","codeforce"],
        "tags": ["upsolving","코드포스"],
        "url": "/posts/Codeforces-811,-812,codeTon/",
        "teaser": null
      },{
        "title": "게임 리뷰 - 페르소나 5 더 로열",
        "excerpt":"ps5 게임 : 페르소나 5 더 로열 리뷰 개요 알고리즘 공부를 시작한지 6개월이 되어가고 블로그에도 글이 한 30개 정도 쌓였다.(굳굳) 해보고 싶은건 내 블로그도 꾸며보고 싶고, 앱도 개발해보고 싶고, 게임도 개발 해보고 싶고, 알고리즘도 많이많이 풀고 싶었지만…. 실상은 알고리즘 한 문제에 끙끙대다가 한문제 풀고나면 에이 힘들다하고 플스나 붙잡았던게 대다수다. 그러다보니...","categories": ["Other Things","gameReview"],
        "tags": ["페르소나5","게임리뷰"],
        "url": "/posts/Persona-5/",
        "teaser": null
      },{
        "title": "Hashing",
        "excerpt":"백준 21162번 뒤집기 K 문제풀이 [21162 뒤집기 K] https://www.acmicpc.net/problem/21162 . 해시를 이용해 접두어가 같은 부분을 빠르게 찾아내자! 신촌 ICPC 알고리즘 캠프를 이번 방학에 신청했다. 강사님이 필수과제로 내준 문제이고 솔직히 풀이를 안들었으면 못풀었을 것같다. jhnah917님이 만드신 문제이고 풀이도 거의 비슷하게 따라 풀었다. 좋은 문제같아서 배운 내용을 정리할겸 포스팅해보려고 한다. 문제상황 파악하기....","categories": ["Problem Solving","Algorithm"],
        "tags": ["Hashing","해시"],
        "url": "/posts/Hash/",
        "teaser": null
      },{
        "title": "2-SAT",
        "excerpt":"백준 16367번 TV Show Game 문제풀이 [16367 TV Show Game] https://www.acmicpc.net/problem/16367 . 문제를 2-SAT문제로 변환해서 풀자! 2-SAT를 이용해서 여러 논리 관계들이 모순이 있는 지 없는지 알 수 있다. 문제상황 파악하기. 참가자들이 각각 3개의 추측을 낼 수 있고, 그 중 2개가 맞아야한다. 모든 사람들이 2개 이상 맞을 수 없다면 -1, 그럴...","categories": ["Problem Solving","Algorithm"],
        "tags": ["2-SAT","SCC","그래프"],
        "url": "/posts/2-SAT/",
        "teaser": null
      },{
        "title": "LCA",
        "excerpt":"백준 3176번 도로 네트워크 문제풀이 [3176 도로 네트워크] https://www.acmicpc.net/problem/3176 . LCA를 구하고 그 때 Sparse table을 이용해보자! 구간 최대, 최소를 구할 때 놀랍게도 전처리를 해두면 O(1)에 구할 수 있는 방법이 있다. 그것이 바로 sparse table이고 최대, 최소는 겹치는 구간이 있어도 상관없기 때문에 겹치는 구간 2개를 이용하는 것이다. 문제상황 파악하기. 도시와...","categories": ["Problem Solving","Algorithm"],
        "tags": ["LCA","그래프"],
        "url": "/posts/LCA/",
        "teaser": null
      },{
        "title": "SCC",
        "excerpt":"백준 4196번 도미노 문제풀이 [4196 도미노] https://www.acmicpc.net/problem/4196 . SCC를 이용하여 서로 영향을 미치지 않는 것의 개수를 구해보자! SCC를 배우니까 플레 문제들이 쓱삭 풀린다. SCC구하는 알고리즘으로는 타잔 알고리즘, 코사라주 알고리즘이 대표적인데 나는 아직 코사라주밖에 다루지 못한다. 공부할라면 하는데 귀찮쓰.. ㅋㅋㅋㅋ 코사라주 알고리즘은 SCC구하고 위상정렬 순으로 되어있어서 개꿀이다. 문제상황 파악하기. 매우 직관적인...","categories": ["Problem Solving","Algorithm"],
        "tags": ["SCC","그래프"],
        "url": "/posts/SCC/",
        "teaser": null
      },{
        "title": "Greedy",
        "excerpt":"백준 18186번 라면사기(large) 문제풀이 [18186 라면사기(large)] https://www.acmicpc.net/problem/18186 . 그리디하게 문제를 해결해보자! 사람들이 많이 푼 다이아 문제 중 하나라서 언젠가 꼭 풀어봐야지 했던 문제다. 좀 보면 그리디라는 건 쉽게 알아차릴 수 있다. 근데 다른사람들도 많이 그랬던데 단순히 3개를 사는 걸 먼저하면 틀린다. 그리디를 어떻게 해야할지가 꽤 까다로운 문제였다. 문제상황 파악하기. 위에서...","categories": ["Problem Solving","Algorithm"],
        "tags": ["Greedy","그리디"],
        "url": "/posts/Greedy/",
        "teaser": null
      },{
        "title": "Segment Tree+KMP",
        "excerpt":"백준 3308번 Matching 문제풀이 [3308 Matching] https://www.acmicpc.net/problem/3308 . 문자열에서 패턴을 찾을 때 KMP를 이용하는데 세그트리와 접목한 문제를 풀어보자! 내 블로그에 포스팅할때도 KMP랑 Segment tree를 비슷한 시기에 올린 것 같은데 그 둘을 접목한 문제가 있다는 것을 배웠다. ICPC신촌 캠프할 때 접한 20298 파인애플피자로 이런 유형을 알게 되었다. 이걸 풀어내니 23576 Stock...","categories": ["Problem Solving","Algorithm"],
        "tags": ["세그먼트트리","KMP","문자열"],
        "url": "/posts/Segtree+KMP/",
        "teaser": null
      },{
        "title": "게임 리뷰 - 용과같이 극 1",
        "excerpt":"ps5 게임 : 용과같이 극 1 리뷰 개요 이번에 PS5 plus 스폐셜 혜택으로 용과같이 극1, 제로, 2가 풀렸다. 용과 같이 7으로 입문을 했었던 사람이라서 키류 카즈마의 이야기를 보고 싶었다. 그래서 바로 다운 받아서 순식간에 엔딩을 봤다. 극 1 -&gt; 제로 - &gt; 극 2 순으로 하는것이 게임성이 진화하는 느낌이고, 스포가...","categories": ["Other Things","gameReview"],
        "tags": ["용과같이","게임리뷰"],
        "url": "/posts/%EC%9A%A9%EA%B3%BC%EA%B0%99%EC%9D%B4-%EA%B7%B91/",
        "teaser": null
      },{
        "title": "ETT + Segment Tree",
        "excerpt":"백준 14288번 회사문화4 문제풀이 [14288 회사 문화 4] https://www.acmicpc.net/problem/14288 . 오일러 투어 테크닉으로 트리를 배열처럼 만들고 세그먼트 트리를 이용하여 쿼리를 처리한다. 오일러 투어 테크닉을 배우면 대부분 세그먼트 트리랑 연계가 된다. 오일러 투어 테크닉은 트리를 배열 처럼 일직선으로 잘 펴는 테크닉이고 여기서 세그먼트 트리와 연계하기 쉽기 때문이다. 회사 문화 4는 14268...","categories": ["Problem Solving","Algorithm"],
        "tags": ["세그먼트트리","ETT","오일러투어테크닉"],
        "url": "/posts/ETT/",
        "teaser": null
      },{
        "title": "Sum Over Subsets",
        "excerpt":"백준 18719번 Binomal 문제풀이 [18719 Binomal] https://www.acmicpc.net/problem/18719 . SOS DP를 이용하여 부분집합의 합을 빠르게 구해보자. 다이아 문제를 탐색하던 중 5개월 전에 풀다가 ‘당연하게도’ 실패한 Binomal문제가 눈에 들어왔고 열심히 다시 풀어봤는데 안됐다 ㅠㅠ 블로그를 탐색해보니 SOS dp를 이용하는 것이라고 하여 이를 찾아봤다. 그랬더니 binomal문제가 아름답게 보였다 ㄷㄷ 이렇게 깔끔하게 홀수임을 판별하다니...","categories": ["Problem Solving","Algorithm"],
        "tags": ["sos dp","DP","부분집합의 합"],
        "url": "/posts/SOS/",
        "teaser": null
      },{
        "title": "앳코더 - 첫  앳코더",
        "excerpt":"AtCoder Beginner Contest 270 업솔빙 AtCoder Beginner Contest 270 개요 앳코더는 처음 리뷰 및 업솔빙을 한다. 문제가 깔끔하고 UI도 코포보다 더 좋은것 같다.ㅋㅋ 근데 첫 앳코더라 그런지 망치긴했다. 아니 사실 망친건지 아닌지 기준도 잘모르긴한다. 첫 앳코더 결과는 3솔이였다.(3/8) 사실 이전에 참가신청 하고 안한적이 있는데 코포는 참가신청하고 안하면 점수가 안떨어지는데 이건...","categories": ["Competitive Programming","Atcoder"],
        "tags": ["upsolving","앳코더"],
        "url": "/posts/AtCoder-Beginner-Contest-270/",
        "teaser": null
      },{
        "title": "코드포스 - 실력이 안늘어 ㅠㅠ",
        "excerpt":"codeforce round #823(div 2), #824(div 2) 업솔빙 Codeforces Round #823, #824 개요 최근 두 달간 코드포스 포스팅을 안올렸다. 그래도 꽤 열심히 참여했는데 822 때 한번 4솔하고 나머지는 또 2솔 수준이다. ㅠㅠ 살면서 머리가 나쁘다는 생각은 해본적이 없는데 이 쯤 되니 머리가 안따라주는 것 같다.(머리가 늙은건가) 내가 열심히만 하면 다 이겨라는...","categories": ["Competitive Programming","codeforce"],
        "tags": ["upsolving","코드포스"],
        "url": "/posts/Codeforces-823,-824/",
        "teaser": null
      },{
        "title": "코드포스 - 점수가 계속 하락 중",
        "excerpt":"codeforce round #828(div 3), EDU #137(div 2) 업솔빙 codeforce round #828(div 3), EDU #137(div 2) 업솔빙 으음.. 요즘 계속 점수가 떨어지고 있다. 이러다가 뉴비까지 간다면 정말 부끄러워서 죽고싶을 것 같다. 실력이 늘고 있다는 생각도 잘 안들고, 점수는 오히려 낙하하니 멘탈이 많이 안좋아졌다. 그래서 구글에 코드포스 잘하는 법 같은걸 쳐서 좀...","categories": ["Competitive Programming","codeforce"],
        "tags": ["upsolving","코드포스"],
        "url": "/posts/Codeforces-828,-EDU-137/",
        "teaser": null
      },{
        "title": "Prefix Sum 문제",
        "excerpt":"백준 23877번 Convoluted Intervals 문제풀이 [23877 Convoluted Intervals] https://www.acmicpc.net/problem/23877 . 누적합과 조합론 지식을 이용하여 문제를 푼다. 2학년 중간고사가 끝나서 다시 알고리즘 문제를 잡기 시작했다. 근데 뭔가…벌써 기말 대비를 해야할 것 같은 기분이 든다.ㅋㅋ 요즘은 USACO문제를 풀고 있는데…오..문제가 좋은 문제가 많은 듯하다. 코트포스 연습하기에도 좋은 문제들이다. 이 문제는 내가 꽤 고생했어서...","categories": ["Problem Solving","Algorithm"],
        "tags": ["PrefixSum","누적합"],
        "url": "/posts/Prefix-Sum/",
        "teaser": null
      },{
        "title": "게임 리뷰 - 용과같이 제로",
        "excerpt":"ps5 게임 : 용과같이 제로 리뷰 개요 저번에 1을 하고 제로를 했는데 제로가 너무 재밌어서 2까지 고속으로 달렸다. 시험기간인데도 게임을 2개나 엔딩을 봤다니…ㅠㅠ 반성도 조금 해야할듯하다. 2는 아주 조금의 챕터가 남아서 따로 포스팅을 할꺼고 오늘은 용과 같이 제로 후기를 써보겠다. 용과같이 제로 개발 및 유통 용과 같이 스튜디오 Sega 장르...","categories": ["Other Things","gameReview"],
        "tags": ["용과같이","게임리뷰"],
        "url": "/posts/%EC%9A%A9%EA%B3%BC%EA%B0%99%EC%9D%B4-%EC%A0%9C%EB%A1%9C,-%EA%B7%B92/",
        "teaser": null
      },{
        "title": "코드포스 - 블루 좀 가자",
        "excerpt":"Codeforces#846, TypeDB Foreces 2023, Codeforces#848 업솔빙 Codeforces#846, TypeDB Foreces 2023, Codeforces#848 업솔빙 정말 오랜만이다. 업솔빙을 하는 것이 저번 포스팅이 마지막이었으니 10월이다… 그 동안 코드포스를 안한 것도 아니다. 백준 스트릭도 꾸준히 유지했다. 이것의 패인은 2가지다. 첫번쨰는 알바다. 편의점 알바를 시작했는데 이것이 야간알바다 그래서 코포를 놓칠때가 많았다. 두번째는 연애다. 요즘 내가 너무...","categories": ["Competitive Programming","codeforce"],
        "tags": ["upsolving","코드포스"],
        "url": "/posts/Codeforces-846,-TypeDB-Foreces-2023/",
        "teaser": null
      },{
        "title": "SUAPC 연습",
        "excerpt":"2월 11일 문제풀이 💡 목적 : **SUAPC 연습** 💡 문제집 : **SUAPC 2022 Winter** 2023 겨울 SUPAC 나가려고 연습했떤 문제 해설을 적어보았따. 이제는 노션을 이용하여 markdown을 만드려고 하기 때문에 형태가 조금은 변할 수 있다. 노션에서 markdown언어로 변환하는 프로그램을 만들면 좋겠다고 생각했는데 그냥 노션 그자체에 있을 줄은 몰랐다…. 어쨋든 그래서 2023...","categories": ["Problem Solving","Algorithm"],
        "tags": ["대회","알고리즘"],
        "url": "/posts/%EC%98%88%EC%A0%84%EC%97%90-%ED%96%88%EB%8D%98-%EC%97%B0%EC%8A%B5/",
        "teaser": null
      },{
        "title": "코드포스 - 새로 시작",
        "excerpt":"Codeforce round 868 (Div.2) 개요 이제 노션에 있는 내용을 마크다운으로 변환하여 올리기 때문에 수식 등을 더 잘 쓸 수 있을 것 같다. 코드포스를 잘하고 싶지만 항상 그렇게 잘하진 않는 것 같다(그냥 내 실력이 많이 딸린다). 실력이 부족한 만큼 앞으로는 업솔빙은 무조건 5문제를 할 것이다. 6월에는 알바를 그만두고 코드포스에 집중 할...","categories": ["Competitive Programming","codeforce"],
        "tags": ["upsolving","코드포스"],
        "url": "/posts/Codeforceround-868(Div2)/",
        "teaser": null
      },{
        "title": "게임 리뷰 - It takes two",
        "excerpt":"2023-05-02-It takes two 개요 최근엔 몸이 바빠져서 그런지 게임을 많이 못했다. 바빠진 이유는 역시 학교를 가면서, 알바도 하면서, 연애도 하기 때문일 것이다. 그래도 게임만 하던 작년보단 더 생산적인 것 같기도하다. It takes two는 내가 스토리가 예쁜 게임을 좋아하다보니 수민이와 꼭 같이 하고 싶은 게임이였다. 그래서 같이하자고 했는데 흔쾌히 같이 재밌게...","categories": ["Other Things","gameReview"],
        "tags": ["잇텟투","It takes two","게임리뷰"],
        "url": "/posts/It-takes-two-%EA%B2%8C%EC%9E%84%EB%A6%AC%EB%B7%B0/",
        "teaser": null
      },{
        "title": "행렬 거듭제곱",
        "excerpt":"행렬 거듭 제곱 💡 DP 점화식이 선형 방정식인 경우 $ a_n = \\sum_{k=1}^{m}{c_k*a_{n-k}} $ 위와 같은 형태의 점화식일 때 $O(m^3log(n))$ 에 n번째 항을 구할 수 있다. 분할정복을 이용한 행렬 거듭제곱 $O(log(n))$ 예를 들어 피보나치 수를 생각해보자 \\[\\begin{bmatrix} F_2 \\\\ F_1 \\end{bmatrix} = \\begin{bmatrix} 1 &amp; 1 \\\\ 1 &amp; 0...","categories": ["Problem Solving","Algorithm"],
        "tags": ["행렬거듭제곱","matrix"],
        "url": "/posts/%ED%96%89%EB%A0%AC%EA%B1%B0%EB%93%AD%EC%A0%9C%EA%B3%B1/",
        "teaser": null
      },{
        "title": "Heavy-Light decomposition",
        "excerpt":"HLD(Heavy Light Decomposition) 💡 트리에서 임의의 두 정점을 잇는 경로에 대한 쿼리가 궁금할 때. 구현과정 구현과정은 jinhan님의 블로그 를 참고하여 구현했다. 가중치가 있는 그래프라면 adj에 가중치 없는 그래프를 만들고, cost[정점]에 해당 정점으로 갈 때 드는 비용을 저장한다. 그리고 input[i] = {u, v}이런 식으로 정점에 번호를 붙여준다.(세그트리로 다루기 위함) dfs1을 돌면서...","categories": ["Problem Solving","Algorithm"],
        "tags": ["heavy-light분할","트리"],
        "url": "/posts/HLD/",
        "teaser": null
      },{
        "title": "코드포스 - 연습중1",
        "excerpt":"2023-05-13-Edu Codeforce round 148 (Div.2) 개요 에듀라운드가 어려운건지…. 에듀라운드는 블루퍼포 이상을 맞아본적이 없는 것 같다. 솔직히 그렇게 큰 차이는 없는데 왜 그러는지는 도저히 모르겠다. 이번 셋은 C까지 매우쉽고 D부터는 좀 어려웠다.. D는 감은 잡았는데 뭔가 구현이 막막해서 못풀었다. (이런 문제 좋아보이는데 많이 풀어보고 싶다. ) A. New Palindrome (0:09) 팰린드롬이다....","categories": ["Competitive Programming","codeforce"],
        "tags": ["upsolving","코드포스"],
        "url": "/posts/Edu-Codeforce-round-148-(Div-2)/",
        "teaser": null
      },{
        "title": "코드포스 - 연습중2",
        "excerpt":"2023-05-25-Edu Codeforce round 149 (Div.2) 개요 디비전 2는 솔직히 4문제는 풀어야 본전이다. 나도 옛날엔 인정하지 않았지만 A == 브론즈, B== 실버하위, C == 실버 상위, D == 골드 수준의 문제들이 출제 되기 때문이다. (물론 편차가 있긴하지만) 예전에는 내가 C, D를 자주 못풀었기 때문에 D가 무슨 골드냐 플레는 되겠지..했는데 솔직히 풀이를...","categories": ["Competitive Programming","codeforce"],
        "tags": ["upsolving","코드포스"],
        "url": "/posts/Edu-Codeforce-round-149-(Div-2)/",
        "teaser": null
      },{
        "title": "ICPC sinchon 2023 여름 캠프 후기",
        "excerpt":"여름캠프 및 SUAPC 후기 개요 뭔가 엄청나게 오랜만의 포스팅이다. 이 글의 주인공은 이번 방학동안 참여한 알고리즘 캠프이다. 나는 지난 3학기동안 꾸준히 신촌엽합의 캠프를 들었고 suapc는 2학기동안 참여했다. 하지만 후기를 쓰는 것은 처음이다. 항상 이 캠프가 끝나면 학기가 시작되니 귀찮음을 이겨내지 못했던 것이다. 이번엔 꽤나 만족할만한 결과를 거두기도 했고 월공강이라 여유도...","categories": ["Competitive Programming","Contest"],
        "tags": ["대회후기","후기"],
        "url": "/posts/ICPCsinchonSummer/",
        "teaser": null
      },{
        "title": "블루 달았다!",
        "excerpt":"코드포스 블루 달성 후기 드디어 달성!! 1년 가까이 코드포스를 한 것 같다. 중간에 코드포스를 쉰 적도 있었지만 백준을 풀면서도 꼭 블루로 올리고 싶다고 생각을 했었다. 내가 올린 과정과 방법, 그리고 앞으로 어떻게 공부하는 것이 좋은지 글로 남기려고 한다. 내가 고생한 만큼까지 고생하지 않도록 내 글을 읽는 누군가가 도움이 되었으면 한다....","categories": ["Competitive Programming","Contest"],
        "tags": ["대회후기","후기","Codeforces","blue","코드포스"],
        "url": "/posts/Codeforces_Blue/",
        "teaser": null
      },{
        "title": "rust 문법 공부",
        "excerpt":"rust 공부시작! 개요 C, C++, python을 할줄 알지만 뭔가 다른 사람들과의 차별점을 두고 싶어서 하나만 더 배워보고 싶었다. rust는 백준 사이트에서 보면 굉장히 빠르다. 또한 보안에도 좋다고 들었다. 그런것도 있지만 희소성도 있는 것 같아서 공부를 해보려고 한다. 여기서는 출력, 입력, 자료형 등 기본적인 문법을 정리해보겠다. 공부할 때, tour of rust...","categories": ["Computer Science","rust"],
        "tags": ["programming language","rust"],
        "url": "/posts/1.-rust-%EA%B8%B0%EB%B3%B8-%EB%AC%B8%EB%B2%95/",
        "teaser": null
      },{
        "title": "코드포스 - 다시 맘 잡기",
        "excerpt":"코드포스 다시 열심히! 블로그도 열심히! 개요 본케도 블루에 올려놨지만 맨날 민트로 다시 떨어진다. 항상 잘보면 1700언저리 못보면 1500 정도 나와서 딱 민트 상위 블루 하위가 지금 나의 퍼포먼스라고 생각하면 될 듯하다. 하지만 나는 더 잘하고 싶다. 지금까지 귀찮아서 버추얼과 업솔빙을 소홀히 했는데 지금이라도 열심히 해보려한다. 목표는 정규라운드를 포함하여 일주일에 꼭...","categories": ["Competitive Programming","codeforce"],
        "tags": ["upsolving","코드포스"],
        "url": "/posts/Codeforces-Round-936(Div.2)/",
        "teaser": null
      },{
        "title": "D&C Optimization",
        "excerpt":"분할정복을 이용한 다이나믹 프로그래밍 최적화 목적과 조건 목적 $O(KN^2)$ 의 알고리즘을 $O(KNlogN)$으로 시간복잡도를 줄이기 위함 조건 1. DP 점화식 $dp[i][j] = min_{k&lt;i}(dp[i-1][k] + C[k][j])$ 2. C의 조건 $C[i][j]$ 는 Monge array이거나 최적해의 단조성이 있어야한다. Monge array $C[a][b] + C[b][d] \\leq C[a][d] + C[b][c]$ 인 배열이라는 뜻이다. $C[i][j]$ 를 $i, j$...","categories": ["Problem Solving","Algorithm"],
        "tags": ["dnc","분할정복을 이용한 최적화"],
        "url": "/posts/%EB%B6%84%ED%95%A0%EC%A0%95%EB%B3%B5%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EC%B5%9C%EC%A0%81%ED%99%94(Divide-&-Conquer-Optimization)/",
        "teaser": null
      },{
        "title": "염소줄서기 문제 풀이",
        "excerpt":"2060 염소줄서기 풀이 및 코드 개요 오랜만에 다이아 문제 풀이를 써보려고 한다. 이 문제는 내가 옛날에 북마크 해뒀던 문젠데 북마크에서 거의 1년간 썩어가고 있어서 속상해서 선택했다. 문제 이해가 어렵지 않아서 선택한 것도 있다. 다이아 문제를 하루에 하나씩 풀면 엄청난 도움이 되겠지만 블로그 풀이를 안보면 하루에 하나는 무슨 일주일에 하나도 힘들것이다....","categories": ["Problem Solving","Algorithm"],
        "tags": ["2060","염소줄서기","백준","이분탐색"],
        "url": "/posts/2060-%EC%97%BC%EC%86%8C%EC%A4%84%EC%84%9C%EA%B8%B0-%ED%92%80%EC%9D%B4/",
        "teaser": null
      },{
        "title": "docker 이해해보기",
        "excerpt":"docker를 이해해보자 프로젝트를 제대로 배포해보지 않은 입장에서 docker는 뭔가 개념자체가 잘 와닿지 않았다. 그래서 직접 정리를 하며 docker, k8s, jenkins에 대해 각각 한페이지짜리 정리를 해보려한다. 개요 일단 내가 어떤 Web Service를 개발했는데, 이것이 누군가의 환경에서는 동작하지 않을 수가 있다. 이는 여러 이유가 있겠지만, 한마디로 dependencies가 달라서라고 할 수 있다. 매우...","categories": ["Computer Science"],
        "tags": ["docker"],
        "url": "/posts/docker-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0/",
        "teaser": null
      },{
        "title": "문자열 - 아호 코라식(Aho-Corasick)",
        "excerpt":"아호 코라식(Aho-Corasick)에 대해 알아보자. 개요 문자열 알고리즘은 어렵다. 트라이 부터 조금 어려워지다가 KMP의 failure function, 접미사 배열 등이 나오면서 대가리가 깨진다. 하나씩 차근차근 정리를 해보려고 한다. 지금 클래스 8을 풀다가 문자열 집합 판결이라는 문제에서 막혔는데 태그를 까보니 아호 코라식이 써 있었다. 이 문제를 계기로 아호 코라식을 정리해 보겠다. 언제 쓰지?...","categories": ["Problem Solving","Algorithm"],
        "tags": ["아호 코라식","문자열"],
        "url": "/posts/aho-corasick/",
        "teaser": null
      },{
        "title": "근황 토크 및 앞으로의 블로그 운영계획",
        "excerpt":"블로그를 다시 시작해볼게요 개요 음.. 엄청나게 오랜만에 글을 쓴다. 블로그에 열심히 쓴 양질의 글만 올리려다보니 귀찮아지고 그 귀찮음은 결국 블로그 유기로 이어졌다… 일단 새로운 마음으로 블로그를 다시 시작하기 위해 theme을 바꿨다. (예쁜 것 같아 맘에 든다 - Chirpy theme이다.) 이제는 내 일상이든, 백준 브론즈문제든 겪었던 사소한 버그를 마구잡이로 기록해볼까한다. 사실...","categories": ["Other Things","Just Chatting"],
        "tags": ["잡담"],
        "url": "/posts/%EA%B7%BC%ED%99%A9-%EB%B0%8F-%EA%B3%84%ED%9A%8D/",
        "teaser": null
      },{
        "title": "2026-02-22 문제풀이",
        "excerpt":"35293 멘헤라 풀이 먼저 4.5를 두번 더하면 9도가 되니까 4.5를 사용하는건 한 번 또는 0번이다. 그리고 소수점에 5나 0 이외의 수가 있다면 만들 수 없다. 이제 모든 수를 다 만들 수 있다고 생각하고 문제를 보면 최단거리 bfs문제와 비슷해진다. 9, 7, -2를 가지고 그래프 탐색을 진행하면 된다. 그러니까 대충 9의 배수인...","categories": ["Problem Solving","BOJ"],
        "tags": ["백준","그래프"],
        "url": "/posts/%EB%AC%B8%EC%A0%9C%EC%9D%BC%EA%B8%B0/",
        "teaser": null
      },{
        "title": "Categories",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/categories/",
        "teaser": null
      },{
        "title": "Tags",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/tags/",
        "teaser": null
      },{
        "title": "Archives",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/archives/",
        "teaser": null
      },{
        "title": "나에 대해서",
        "excerpt":"안녕하세요  알고리즘을 좋아하는 개발자 한승준입니다.     github : 깃허브주소   instagram : 인스타그램   글에 오타가 있거나 내용상 문제가 있으면 알려주시면 감사하겠습니다.  이 블로그는 공부 목적으로 만들어졌습니다.  ","categories": [],
        "tags": [],
        "url": "/about/",
        "teaser": null
      }]
