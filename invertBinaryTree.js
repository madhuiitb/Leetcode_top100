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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    //const array = [];
    const invertBTree = (root)=>{
        if(root===null){
            return;
        }
        invertBTree(root.left)
        invertBTree(root.right)
        let temp;
        temp = root.left;
        root.left = root.right;
        root.right = temp;
      //  array.push(root.val);
    }
    invertBTree(root);
    return root;
};
