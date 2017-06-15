class DisjointSet<t>{
    node: t;
    childList: DisjointSet<t>[] = [];
    parent: DisjointSet<t> | null = null;

    addChild(child: DisjointSet<t>) {
        this.childList.push(child);
        child.parent = this;
    }

    constructor(node: t, parent: DisjointSet<t> | null = null) {
        this.node = node;
        this.parent = parent;
    }

    uniton(tree: DisjointSet<t>): boolean {
        if (this.same(tree)) {
            return false;
        }
        this.getTop().addChild(tree.getTop());
        return true;
    }
    getTop(): DisjointSet<t> {
        if (this.parent) {
            const top = this.parent.getTop();
            this.parent = top;
            return top;
        }
        return this;
    }
    same(tree: DisjointSet<t>): boolean {
        return this.getTop() == tree.getTop();
    }
}

type Edge = {
    node1: string,
    node2: string,
    range: number
}

const edgevector = [
    [0, 2, 0, 3],
    [2, 0, 1, 0],
    [0, 1, 0, 0],
    [3, 0, 0, 0],
];
const edgeList: Edge[] = [
    { node1: "0", node2: "1", range: 4, },
    { node1: "0", node2: "2", range: 5, },
    { node1: "0", node2: "4", range: 5, },
    { node1: "1", node2: "2", range: 2, },
    { node1: "1", node2: "3", range: 3, },
    { node1: "2", node2: "3", range: 2, },
];
const outputedgelist: Edge[] = [
    { node1: "0", node2: "1", range: 1, },
    { node1: "0", node2: "4", range: 1, },
    { node1: "1", node2: "2", range: 2, },
    { node1: "2", node2: "3", range: 2, },
];

class MinimumSpaningList {
    tree: Edge[] = [];
    constructor() {
        const nodeSet = {
            "0": new DisjointSet("0"),
            "1": new DisjointSet("1"),
            "2": new DisjointSet("2"),
            "3": new DisjointSet("3"),
            "4": new DisjointSet("4"),
        };
        let sortedEdgeList = edgeList.slice().sort((a, b) => a.range - b.range);
        for (let edge of sortedEdgeList) {
            if (!nodeSet[edge.node1].same(nodeSet[edge.node2])) {
                this.tree.push(edge);
                nodeSet[edge.node1].uniton(nodeSet[edge.node2]);
                console.log(nodeSet);
            }
        }
    }
}
console.table(new MinimumSpaningList().tree);
