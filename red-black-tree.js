import { Node } from "./binary-search-tree"
// red-black trees are dynamically balanced binary search trees, so the search, deep-search, width-search,
// and min/max-search are the same

// For simplicity, this is an implementation of a left weighted red-black tree

export {
    binary_tree_search as red_black_tree_search,
    binary_tree_search_it as red_black_tree_search_it,
    binary_tree_maximum as red_black_tree_maximum,
    binary_tree_minimum as red_black_tree_minimum,
    binary_tree_in_order as red_black_tree_in_order,
    binary_tree_level_order as red_black_tree_level_order,
} from "./binary-search-tree"

export class RBNode extends Node {
    constructor(key, color = "b") {
        super(key)
        this.color = color
    }
    static RedNode(key,) {
        return new RBNode(key, "r")
    }
    static BlackNode(key,) {
        return new RBNode(key, "b")
    }
}

function red(n) {
    return n && n.color == "r"
}
function make_red(n) {
    n.color = "r"
}
function make_black(n) {
    n.color = "b"
}

export function red_black_tree_insert(root, key) {
    root = insert(root, RBNode.RedNode(key))
    make_black(root)
    return root
}

function insert(u, x) {

    if (!u)
        return x

    if (red(u.left) && red(u.right)) {
        make_black(u.left)
        make_black(u.right)
        make_red(u)
    }

    if (x.key < u.key)
        u.left = insert(u.left, x)
    else
        u.right = insert(u.right, x)

    if (u && !red(u.left) && red(u.right)) // right red but left black
        u = rb_rotate_left(u)
    if (u && red(u.left) && red(u.left.left)) // two following reds
        u = rb_rotate_right(u)

    return u
}

function rotate_left(u) {
    let v = u.right
    u.right = v.left
    v.left = u
    return v
}

function rb_rotate_left(u) {
    let v = rotate_left(u)
    v.color = u.color
    make_red(u)
    return v
}

function rotate_right(u) {
    let v = u.left
    u.left = v.right
    v.right = u
    return v
}

function rb_rotate_right(u) {
    let v = rotate_right(u)
    v.color = u.color
    make_red(u)
    return v
}


