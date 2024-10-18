import {
    Node, binary_tree_insert, binary_tree_search, binary_tree_level_order,
    binary_tree_maximum, binary_tree_minimum, binary_tree_search_it,
    binary_tree_balance_chang_iyengar, binary_tree_in_order
} from './binary-search-tree'

test('binary_tree_insert', () => {
    let root = new Node(15)
    root = binary_tree_insert(root, 6)
    root = binary_tree_insert(root, 18)
    root = binary_tree_insert(root, 3)
    root = binary_tree_insert(root, 7)
    root = binary_tree_insert(root, 17)
    root = binary_tree_insert(root, 20)
    expect(root.left.left.key).toBe(3)
    expect(root.left.right.key).toBe(7)
    expect(root.right.left.key).toBe(17)
    expect(root.right.right.key).toBe(20)
})

test('binary_tree_level_order', () => {
    let root = new Node(15)
    root = binary_tree_insert(root, 6)
    root = binary_tree_insert(root, 18)
    root = binary_tree_insert(root, 3)
    root = binary_tree_insert(root, 7)
    root = binary_tree_insert(root, 17)
    root = binary_tree_insert(root, 20)
    expect(binary_tree_level_order(root)).toEqual([15, 6, 18, 3, 7, 17, 20])
})

test('binary_tree_search', () => {
    let root = new Node(15)
    root = binary_tree_insert(root, 6)
    root = binary_tree_insert(root, 18)
    root = binary_tree_insert(root, 3)
    root = binary_tree_insert(root, 7)
    root = binary_tree_insert(root, 17)
    root = binary_tree_insert(root, 20)
    expect(binary_tree_search(root, 3).key).toBe(3)
    expect(binary_tree_search(root, 7).key).toBe(7)
    expect(binary_tree_search(root, 17).key).toBe(17)
    expect(binary_tree_search(root, 20).key).toBe(20)
    expect(binary_tree_search(root, 15).key).toBe(15)
    expect(binary_tree_search(root, 6).key).toBe(6)
    expect(binary_tree_search(root, 18).key).toBe(18)
    expect(binary_tree_search(root, 30)).toBe(null)
})

test('binary_tree_maximum', () => {
    let root = new Node(15)
    root = binary_tree_insert(root, 6)
    root = binary_tree_insert(root, 18)
    root = binary_tree_insert(root, 3)
    root = binary_tree_insert(root, 7)
    root = binary_tree_insert(root, 17)
    root = binary_tree_insert(root, 20)
    expect(binary_tree_maximum(root).key).toBe(20)
})

test('binary_tree_minimum', () => {
    let root = new Node(15)
    root = binary_tree_insert(root, 6)
    root = binary_tree_insert(root, 18)
    root = binary_tree_insert(root, 3)
    root = binary_tree_insert(root, 7)
    root = binary_tree_insert(root, 17)
    root = binary_tree_insert(root, 20)
    expect(binary_tree_minimum(root).key).toBe(3)
})

test('binary_tree_search_it', () => {
    let root = new Node(15)
    root = binary_tree_insert(root, 6)
    root = binary_tree_insert(root, 18)
    root = binary_tree_insert(root, 3)
    root = binary_tree_insert(root, 7)
    root = binary_tree_insert(root, 17)
    root = binary_tree_insert(root, 20)
    expect(binary_tree_search_it(root, 3).key).toBe(3)
    expect(binary_tree_search_it(root, 7).key).toBe(7)
    expect(binary_tree_search_it(root, 17).key).toBe(17)
    expect(binary_tree_search_it(root, 20).key).toBe(20)
    expect(binary_tree_search_it(root, 15).key).toBe(15)
    expect(binary_tree_search_it(root, 6).key).toBe(6)
    expect(binary_tree_search_it(root, 18).key).toBe(18)
    expect(binary_tree_search_it(root, 30)).toBe(null)
})

test('binary_tree_in_order', () => {
    let root = new Node(15)
    root = binary_tree_insert(root, 6)
    root = binary_tree_insert(root, 18)
    root = binary_tree_insert(root, 3)
    root = binary_tree_insert(root, 7)
    root = binary_tree_insert(root, 17)
    root = binary_tree_insert(root, 20)
    expect(binary_tree_in_order(root)).toEqual([3, 6, 7, 15, 17, 18, 20])
})

test('binary_tree_balance_chang_iyengar', () => {
    let root = new Node(15)
    root = binary_tree_insert(root, 6)
    root = binary_tree_insert(root, 18)
    root = binary_tree_insert(root, 3)
    root = binary_tree_insert(root, 7)
    root = binary_tree_insert(root, 17)
    root = binary_tree_insert(root, 20)
    let cmp1 = JSON.stringify(root),
        cmp2 = JSON.stringify(binary_tree_balance_chang_iyengar(root))
    expect(cmp1).toEqual(cmp2)
})

