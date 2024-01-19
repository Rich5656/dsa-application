export class Node {
    public value: number
    public children: [Node | null, Node | null]
    public style: string
    public leftChild: Node | null
    public rightChild: Node | null

    constructor(value: number) {
      this.value = value;
      this.style = 'standard'
      this.children = [null, null]
      this.leftChild = null;
      this.rightChild = null;
    }
};