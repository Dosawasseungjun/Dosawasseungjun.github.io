#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

//사람 수가 100이하니깐 floyd써보자
const int INF = 987654321;
int n, m;
vector<vector<int> > adj;

void floyd(){
    adj = vector<vector<int> > (n+1, vector<int> (n+1, INF));
    for(int i=1;i<=n;i++) adj[i][i] = 0;
    
    for(int k=1;k<=n;k++){
        
        for(int i=1;i<=n;i++){
            for(int j=1;j<=n;j++){
                adj[i][j] = min(adj[i][j], adj[i][k]+adj[k][j]);
            }
        }
    }
}
int main(){
    cin.tie(NULL); cout.tie(NULL); ios_base::sync_with_stdio(false);

    cin >> n >> m;
    floyd();
    int kebin = INF;
    int inssa = 0;
    for(int i=1;i<=n;i++){
        int temp = 0;
        for(int j=1;j<=n;j++){
            temp += adj[i][j];
        }
        if(temp<kebin){
            kebin = temp;
            inssa = i;
        }
    }
    cout << inssa;
}