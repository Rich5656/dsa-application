export const nodeCreation =  `class Node {
    constructor(value) {
      this.value = value;
      this.leftChild = null;
      this.rightChild = null;
    }
  };
  
  // now lets use this to create our souce node (I chose to use a number as the 
  // value here but any type could be used depending on what
  // is being represented)
  const rootNode = new Node(5);
  
  // Nice! Now we have our root node but it has no children. Lets add the children.
  // First we will need two new Node objects to add
  // create two new node objects
  const child1 = new Node(4);
  const child2 = new Node(6);
  
  // Now that we have two Nodes to add, we can make our root refrence these as children
  rootNode.leftChild = child1;
  rootNode.rightChild = child2;   
  `

export  const bfs = `const bfs = (rootNode) => {
    // create a queue that has an initial value of the tree's root node
    const queue = [ rootNode ];
  
    // continue to itterate as long as there is a node in the queue
    while (queue.length > 0) {
      // remove the first item from the queue to get the current node
      const currentNode = queue.shift();
  
      // this is the point where you would want to conduct checks or preform some sort of operation on the data
      console.log(currentNode.value);
  
      // finally we need to add both of the current node's children to the queue if the children exist
      if (currentNode.leftChild !== null) {
        queue.push(currentNode.leftChild);
      }
      if (currentNode.rightChilde !== null) {
        queue.push(currentNode.rightChild);
      }
    }
  } 
  `
