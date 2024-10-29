const cardInners = document.querySelectorAll('.card-inner'); // 모든 카드 내부 요소 선택

// 카드 클릭 시 앞뒤를 전환하는 함수
cardInners.forEach((cardInner) => {
    cardInner.addEventListener('click', () => {
        // 카드의 현재 회전 상태를 확인
        const isFlipped = cardInner.style.transform === 'rotateY(180deg)';

        // 카드 회전
        cardInner.style.transform = isFlipped ? 'rotateY(0deg)' : 'rotateY(180deg)';

        // 배경 색상 변경
        const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`; // 랜덤 색상 생성
        document.body.style.backgroundColor = randomColor;
    });
});
