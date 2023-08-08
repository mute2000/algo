/*假设你的学院组织了一场考试，现在有一个成绩单[60, 70, 80, 90, 100]，
该成绩单是按照学生学号来排序的。请实现一个算法：计算该成绩单最高的k个分数。*/

/*const scores = [60, 70, 80, 90, 100];
const k = 2;

function findHighestScores(scores, k) {

    scores.sort((a, b) => b - a);

    return scores.slice(0, k); 
}

console.log(findHighestScores(scores, k));*/

/*const scores = [60, 70, 80, 90, 100, 90, 80, 70, 60];
const k = 3;

function findHighestScores(scores, k) {
    const maxScores = [];

    for (let i = 0; i < k; i++) {
        let maxScoreIndex = 0;

        for (let j = 1; j < scores.length; j++) {
            if (scores[j] > scores[maxScoreIndex]) {
                maxScoreIndex = j;
            }
        }

        maxScores.push(scores[maxScoreIndex]);

        scores.splice(maxScoreIndex, 1);
    }

    return maxScores;
}

console.log(findHighestScores(scores, k));*/

const scoreList = [60, 70, 80, 90, 100, 90, 80, 70, 60];
const k = 3;

function findHighestScores(scoreList, k) {
    const newScoreList = [];
    for (let score of scoreList) {
        if (!newScoreList.includes(score)) {
            newScoreList.push(score);
        }
    }
    newScoreList.sort((a, b) => b - a);
    return newScoreList.slice(0, k);
}

console.log(findHighestScores(scoreList, k));