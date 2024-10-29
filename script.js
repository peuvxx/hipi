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
        const randomSaturation = Math.random() * 50 + 50; // 채도 50%~100%
        const randomLightness = Math.random() * 30 + 40; // 명도 40%~100%
        const randomColor = `hsl(${randomHue}, ${randomSaturation}%, ${randomLightness}%)`; 

        document.body.style.backgroundColor = randomColor;

        // 카드가 뒤집힌 상태라면 3초 후 다시 앞면으로 뒤집기
        if (!isFlipped) {
            setTimeout(() => {
                cardInner.style.transform = 'rotateY(0deg)';
            }, 2500); // 3초 후에 앞면으로 뒤집음
        }
    });
});
