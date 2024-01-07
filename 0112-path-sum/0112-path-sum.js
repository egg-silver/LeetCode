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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  // 트리가 비어있는 경우를 처리
  if (root === null) {
    return false;
  }

  // 잎 노드에서, 합계가 targetSum과 일치하는지 확인
  if (root.left === null && root.right === null) {
    return root.val === targetSum;
  }

  // 왼쪽 또는 오른쪽 자식을 탐색
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
};

