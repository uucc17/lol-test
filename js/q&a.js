let queryElement = document.getElementById('queryP');
let imageElement = document.getElementById('img_');
let answerElementA = document.getElementById('Atn_1');
let answerElementB = document.getElementById('Btn_2');
let currentIndex = 0;
let score = { A: 0, B: 0 };

const questions = [
    { query: "Q1. 조별과제가 있을 때 나는?", image: "../image/img01.jpeg", answerA: "팀장으로써 책임지고 일을 완료하는 편", answerB: "그냥 다른사람의 리드를 따라가는 편" },
    { query: "Q2. 나는 이런 데이트가 더 좋아!", image: "https://image.fmkorea.com/files/attach/new3/20230717/14339012/4424565074/5976485352/99b983892094b5c6d2fc3736e15da7d1.jpeg", answerA: "활동적인 밖에서 데이트가 더 좋아", answerB: "이불밖은 위험해 절대 집에서 둘이서 오붓하게!" },
    { query: "Q3. 어려운 문제에 직면했을때 나는?", image: "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/8WR6/image/TKGlIT4_xnezqDAtT-RxBQgPpmI", answerA: "능기응변하게 빠르게 해결책을 찾는다", answerB: "사건을 분석하고 다양한 해결책 생각해본다" },
    { query: "Q4. 내 애인의 롤 포지션은?", image: "https://mblogthumb-phinf.pstatic.net/MjAyMDA1MThfMTU1/MDAxNTg5Nzc1NzQxOTMx.C29Ng5cDHwKJbtRbjFKnRoiE5aeFzHb-Yf5WeZJguTUg.ooGbOgL85N7W-jMxrGo3jnNuJt7I-6y-f9CASFaU4pkg.PNG.cherry4662/SE-0a75ae71-98ff-48cc-9602-53faea1388fc.png?type=w800", answerA: "피지컬이 필요한 딜요정 원딜, 탑", answerB: "팀합류를 함으로써 도움을 주는 정글, 미드, 서폿" },
    { query: "Q5. 새로운 환경에서 나는?", image: "https://www.kukinews.com/data/kuk/image/2021/10/31/kuk202110310007.jpg", answerA: "융통성이 있어 적응력이 빨라 커피들고 다님", answerB: "상황이 불확실하거나 낯설 때 불편함" },
    { query: "Q6. 슬픔을 나누면?", image: "https://t1.daumcdn.net/cfile/tistory/222EEC3A5773BA9D18", answerA: "반으로 돼! 힘들 때 누가 옆에 있으면 맘이 덜어지는 것 같아", answerB: "슬픔은 전염성이 있어서 2개가 돼 or 슬과 픔?" },
    { query: "Q7. 나와 가까운 유형은?", image: "https://cdn.goodkyung.com/news/photo/202303/201763_164846_3038.jpg", answerA: "잘챙겨주면서 리드하는 자상한 스타일", answerB: "찡찡거리는 스타일" }
];

function displayQuestion(index) {
    if (index >= questions.length) {
        displayResult();
        return;
    }
    let currentQuestion = questions[index];
    queryElement.textContent = currentQuestion.query;
    imageElement.src = currentQuestion.image;
    answerElementA.textContent = currentQuestion.answerA;
    answerElementB.textContent = currentQuestion.answerB;
}

function handleAnswer(answer) {
    score[answer]++;
    currentIndex++;
    displayQuestion(currentIndex);
}

function displayResult() {
    let resultPage = score.A > score.B ? 'resultA.html' : 'resultB.html';
    window.location.href = resultPage;
}

answerElementA.addEventListener('click', () => handleAnswer('A'));
answerElementB.addEventListener('click', () => handleAnswer('B'));

// 첫 질문 표시
displayQuestion(currentIndex);
