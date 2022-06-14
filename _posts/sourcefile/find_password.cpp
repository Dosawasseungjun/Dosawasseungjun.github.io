#include <iostream>
#include <vector>
#include <algorithm>
#include <map>
#include <string>
using namespace std;

int main(){
    cin.tie(NULL); cout.tie(NULL); ios_base::sync_with_stdio(false);

    int n, m;
    cin >> n >> m;
    map<string, string> memo;
    for(int i=0;i<n;i++){
        string key, password;
        cin >> key >> password;
        memo.insert(make_pair(key, password));
    }
    for(int i=0;i<m;i++){
        string key;
        cin >> key;
        cout << memo[key] << '\n';
    }
}