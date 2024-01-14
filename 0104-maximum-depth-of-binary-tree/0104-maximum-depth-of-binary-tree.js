/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) {
    // 트리가 비어있으면 깊이는 0
    return 0;
  } else {
    // 왼쪽과 오른쪽 자식 노드의 최대 깊이를 계산
    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);

    // 더 큰 깊이에 1을 더해서 반환
    return Math.max(leftDepth, rightDepth) + 1;
  }
};
