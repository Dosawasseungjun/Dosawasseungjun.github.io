#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int n;
vector<int> inorder;
vector<int> postorder;

void PrintPreOrder(int inleft, int inright, int postleft, int postright){
    if(inleft>=inright||postleft>=postright) return;
    int size = inright-inleft;
    int root = postorder[postright-1];
    
    //for문으로 root를 찾으면 O(n^2)
    int leftsize = find(inorder.begin(), inorder.end(), root)-inorder.begin();

    cout << root << ' ';
    PrintPreOrder(inleft, leftsize, postleft, leftsize);
    PrintPreOrder(leftsize+1, inright, leftsize, postright-1);
}

int main(){
    cin.tie(NULL); cout.tie(NULL); ios_base::sync_with_stdio(false);

    //입력받기
    cin >> n;
    inorder = vector<int> (n);
    postorder = vector<int> (n);
    for(int i=0;i<n;i++){
        cin >> inorder[i];
    }
    for(int i=0;i<n;i++){
        cin >> postorder[i];
    }

    //preorder구하기
    PrintPreOrder(0, n, 0, n);
}