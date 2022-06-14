#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

const int INF = 987654321;
const int dy[] = {1, -1, 0, 0}; //상하좌우
const int dx[] = {0,0,-1,1};
const int exdydx[4][3][2] = {{{-1,0},{0,1},{1,0}},{{-1,0},{0,-1},{1,0}}, {{0,-1},{1,0},{0,1}}, {{0,-1},{-1,0},{0,1}} };
int n, m;
vector<vector<int> > board;
vector<vector<bool> > visited;

int dfs(int y, int x, int cnt){
    if(cnt==4) return 0;
    visited[y][x] = true;
    int ret = board[y][x];
    for(int i=0;i<4;i++){
        int Y = y+dy[i], X = x+dx[i];
        if(Y>=0&&Y<n&&X>=0&&X<m){

           if(!visited[Y][X]){
            ret = max(ret, board[y][x]+dfs(Y,X,cnt+1));
            visited[Y][X] = false;
           }
        }
    }
    visited[y][x] = false;
    if(cnt!=3&&ret==board[y][x]) return -INF;
    return ret;
}

int ex(int y, int x){
    int ret = 0;
    for(int i=0;i<4;i++){
        int n1y=y+exdydx[i][0][0], n1x =x+exdydx[i][0][1] , n2y = y+exdydx[i][1][0],n2x = x+exdydx[i][1][1], n3y=y+exdydx[i][2][0], n3x = x+exdydx[i][2][1];
        if((n1y>=0&&n1y<n&&n1x>=0&&n1x<m)&&(n2y>=0&&n2y<n&&n2x>=0&&n2x<m)&&(n3y>=0&&n3y<n&&n3x>=0&&n3x<m)){
            ret = max(ret, board[y][x]+board[n1y][n1x]+board[n2y][n2x]+board[n3y][n3x]);
        }
    }
    return ret;
}

int dfsAll(){
    visited = vector<vector<bool> > (n, vector<bool> (m, false));
    int ret = 0;
    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            if(!visited[i][j]){
                ret = max(ret, dfs(i, j,0));
                ret = max(ret, ex(i, j));
            }
        }
    }
    return ret;
}
int main(){
    cin.tie(NULL); cout.tie(NULL); ios_base::sync_with_stdio(false);

    cin >> n >> m;
    board = vector<vector<int> > (n, vector<int>(m));
    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            cin >> board[i][j];
        }
    }
    cout << dfsAll();
}