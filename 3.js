/*假设你们学校是这样的组织架构(树状结构，且有指向父节点的指针)，当学生合作时，需
要最近一级的上级批准。例如，同班同学(A1和A2)合作，需要班主任A批准；不同班级的学生(A1和
B1)合作，需要院⻓1批准；同理，不同院的学生，需要校⻓批准。请实现一个算法：当两个学生想
要合作时，找到对应的批准人*/

class Node {
    constructor(name, parent) {
        this.name = name;
        this.parent = parent;
    }
}

const principal = new Node('校长');
const dean1 = new Node('院长1', principal);
const dean2 = new Node('院长2', principal);
const teacherA = new Node('班主任A', dean1);
const teacherB = new Node('班主任B', dean1);
const teacherC = new Node('班主任C', dean2);
const teacherD = new Node('班主任D', dean2);
const studentA1 = new Node('学生A1', teacherA);
const studentA2 = new Node('学生A2', teacherA);
const studentA3 = new Node('学生A3', teacherA);
const studentB1 = new Node('学生B1', teacherB);
const studentB2 = new Node('学生B2', teacherB);
const studentB3 = new Node('学生B3', teacherB);
const studentC1 = new Node('学生C1', teacherC);
const studentC2 = new Node('学生C2', teacherC);
const studentC3 = new Node('学生C3', teacherC);
const studentD1 = new Node('学生D1', teacherD);
const studentD2 = new Node('学生D2', teacherD);
const studentD3 = new Node('学生D3', teacherD);


function findApprover(studentA1, studentC2) {
    const visited = new Set();

    let currentNode = studentA1;
    while (currentNode) {
        visited.add(currentNode);
        currentNode = currentNode.parent;
    }

    currentNode = studentC2;
    while (currentNode) {
        if (visited.has(currentNode)) {
            return currentNode;
        }
        currentNode = currentNode.parent;
    }

    return null;
}

console.log(findApprover(studentA1, studentC2).name);