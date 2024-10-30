const cardInners = document.querySelectorAll('.card-inner'); // 모든 카드 내부 요소 선택

// 카드 클릭 시 앞뒤를 전환하는 함수
cardInners.forEach((cardInner) => {
    cardInner.addEventListener('click', () => {
        // 카드의 현재 회전 상태를 확인
        const isFlipped = cardInner.style.transform === 'rotateY(180deg)';

        // 카드 회전
        cardInner.style.transform = isFlipped ? 'rotateY(0deg)' : 'rotateY(180deg)';

        // 배경 색상 변경
        const randomHue = Math.random() * 360; // 랜덤 색상 생성
        const randomSaturation = Math.random() * 60 + 800; // 채도 50%~100%
        const randomLightness = Math.random() * 30 + 40; // 명도 40%~100%
        const randomColor = `hsl(${randomHue}, ${randomSaturation}%, ${randomLightness}%)`; 

        document.body.style.backgroundColor = randomColor;

        // 카드가 뒤집힌 상태라면 3초 후 다시 앞면으로 뒤집기
        if (!isFlipped) {
            setTimeout(() => {
                cardInner.style.transform = 'rotateY(0deg)';
            }, 1000); // 3초 후에 앞면으로 뒤집음
        }
    });
});

const colors = [
    'hsl(314,99%,72%)',     // 빨간색
    'hsl(120, 100%, 50%)',   // 초록색
    'hsl(240, 100%, 50%)'    // 파란색
];

let currentIndex = 0; // 현재 색상 인덱스

function changeBackgroundColor() {
    document.body.style.backgroundColor = colors[currentIndex]; // 현재 색상 설정
    currentIndex = (currentIndex + 1) % colors.length; // 인덱스 증가 및 반복
}

// 3초마다 배경색 변경
setInterval(changeBackgroundColor, 3000);

// 페이지 로드 시 첫 색상 설정
changeBackgroundColor();
