let queryElement = document.getElementById('queryP');
let ImageElement = document.getElementById('img_');
let answerElement_A = document.getElementById('Atn_1');
let answerElement_B = document.getElementById('Btn_2');

const askring = [
    {query: "Q1. 조별과제가 있을 때 나는?", ImageElement: "", answerElement_A: "팀장으로써 책임지고 일을 완료하는 편", answerElement_B: "그냥 다른사람의 리드를 따라가는 편"},
    {query: "Q2. 내가 더 좋아하는 것은?", ImageElement: "", answerElement_A: "새로운 사람들 조아,, 인간관계 너무 짜릿해!", answerElement_B: "이불밖은 위험해 절대 집에서 덕질해"},
    {query: "Q3. 어려운 문제에 직면했을때 나는?", ImageElement: "", answerElement_A: "능기응변하게 빠르게 해결책을 찾는다", answerElement_B: "사건을 분석하고 다양한 해결책 생각해본다"},
    {query: "Q4. 경쟁 상황에서 내가 할 행동은?", ImageElement: "", answerElement_A: "새로운 사람들 조아,, 인간관계 너무 짜릿해!", answerElement_B: "이불밖은 위험해 절대 집에서 덕질해"},
    {query: "Q5. 새로운 환경에서 나는?", ImageElement: "", answerElement_A: "융통성이 있어 적응력이 빨라 커피들고 다님", answerElement_B: "상황이 불확실하거나 낯설 때 불편함"},
    {query: "Q6. ", ImageElement: "", answerElement_A: "", answerElement_B: "이불밖은 위험해 절대 집에서 덕질해"},
    {query: "Q7. ", ImageElement: "", answerElement_A: "", answerElement_B: ""},
    {query: "Q8. 슬픔을 나누면?", ImageElement: "", answerElement_A: "반으로 돼! 힘들 때 누가 옆에 있으면 맘이 덜어지는 것 같아", answerElement_B: "슬픔은 전염성이 있어서 2개가 돼 or 슬과 픔? "},
    {query: "Q9. 나와 가까운 유형은?", ImageElement: "", answerElement_A: "잘챙겨주면서 리드하는 자상한 스타일", answerElement_B: "찡찡거리는 스타일"},
    {query: "Q10. 내 애인의 롤 포지션은?", ImageElement: "", answerElement_A: "이기적으로 할수록 겜에 도움되는 탑, 원딜", answerElement_B: "이타적으로 할수록 겜에 도움되는 정글, 미드, 서폿"},
]
