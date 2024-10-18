export class Node {
    constructor(key, left = null, right = null) {
        this.key = key;
        this.left = left;
        this.right = right;
    }
}

export function binary_tree_in_order(root, keys = []) {
    if (root.left)
        binary_tree_in_order(root.left, keys)
    keys.push(root.key)
    if (root.right)
        binary_tree_in_order(root.right, keys)
    return keys
}

export function binary_tree_level_order(root) {
    let queue = [root]
    let keys = []
    while (queue.length) {
        let x = queue.shift()
        keys.push(x.key)
        if (x.left)
            queue.push(x.left)
        if (x.right)
            queue.push(x.right)
    }
    return keys
}

export function binary_tree_search(root, key) {
    if (root == null || root.key == key)
        return root
    if (key < root.key)
        return binary_tree_search(root.left, key)
    else
        return binary_tree_search(root.right, key)
}

export function binary_tree_search_it(root, key) {
    let x = root
    while (x != null && x.key != key) {
        if (key < x.key)
            x = x.left
        else
            x = x.right
    }
    return x
}


export function binary_tree_insert(root, key) {
    let x = root // x is the iterator
        , parent = null // parent is the old x

    while (x) {
        if (key == x.key)
            throw "double key"

        parent = x
        if (key < x.key)
            x = x.left
        else
            x = x.right
    }
    if (!parent)// tree is empty
        return new Node(key)

    if (key < parent.key)
        parent.left = new Node(key)
    else
        parent.right = new Node(key)

    return root
}

export function binary_tree_minimum(root) {
    return !root.left ? root : binary_tree_minimum(root.left)
}

export function binary_tree_maximum(root) {
    return !root.right ? root : binary_tree_maximum(root.right)
}

export function binary_tree_balance_chang_iyengar(root) {
    let keys = binary_tree_in_order(root)
    return chang_iyengar(keys, 0, keys.length - 1)
}

function chang_iyengar(keys, l, r) {
    if (l > r)
        return null
    let m = Math.floor((l + r) / 2)
    let root = new Node(keys[m])
    root.left = chang_iyengar(keys, l, m - 1)
    root.right = chang_iyengar(keys, m + 1, r)
    return root
}

