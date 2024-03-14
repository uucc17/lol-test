// 참여자 수 초기화
let participantCount = 0;

// 참여자 수 업데이트 함수
function updateParticipantCount() {
    const countElement = document.getElementById('personP');
    countElement.textContent = participantCount + " 명이 참여했습니다.";
}

// 참여 버튼 이벤트 리스너
document.querySelector('.startBtn').addEventListener('click', function() {
    participantCount++;
    updateParticipantCount();
});

// 초기 참여자 수 업데이트
updateParticipantCount();