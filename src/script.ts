class DisjointSet<T>{
    node: T;
    childList: DisjointSet<T>[] = [];
    parent: DisjointSet<T> | null;

    addChild(child:DisjointSet<T>){
        this.childList.push(child);
        child.parent = this;
    }

    constructor(node:T, parent:DisjointSet<T>|null = null){
        this.node = node;
        this.parent = parent;
    }

    uniton(tree: DisjointSet<T>) {
        this.getTop().addChild(tree.getTop());
    }
    getTop(): DisjointSet<T> {
        if (this.parent) {
            return this.parent.getTop();
        }
        return this;
    }
    same(tree: DisjointSet<T>): boolean {
        return this.getTop() == tree.getTop();
    }
}

const edgeVector = [
    [0, 2, 0, 3],
    [2, 0, 1, 0],
    [0, 1, 0, 0],
    [3, 0, 0, 0],
];
const edgeList = [
    {node1: 1, node2: 2, range: 1, tree: DisjointSet},
    {node1: 1, node2: 2, range: 1, tree: DisjointSet},
    {node1: 1, node2: 5, range: 1, tree: DisjointSet},
    {node1: 2, node2: 3, range: 2, tree: DisjointSet},
    {node1: 3, node2: 4, range: 2, tree: DisjointSet},
];

class MinimumSpaningTree{
    constructor(){
        let sortedEdgeList = edgeList.slice().sort((a, b)=>e.sort);
        for(let edge of sortedEdgeList){
            let set = new DisjointSet(edge);
        }
    }
}