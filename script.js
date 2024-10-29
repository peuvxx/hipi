const cardInner = document.getElementById('card-inner'); // card-inner를 선택

// 카드 클릭 시 앞뒤를 전환하는 함수
cardInner.addEventListener('click', () => {
    // 카드의 현재 회전 상태를 확인
    const isFlipped = cardInner.style.transform === 'rotateY(180deg)';

    // 카드 회전
    cardInner.style.transform = isFlipped ? 'rotateY(0deg)' : 'rotateY(180deg)';

    // 랜덤 배경색 설정
    document.body.style.backgroundColor = getRandomColor();
});

// 랜덤 색상 생성 함수
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
