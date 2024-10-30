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


const images = [
    'images/h1.png',
    'images/h2.png',
    'images/h3.png',
    'images/h4.png',
    'images/h5.png',
    'images/h6.png',
    'images/h7.png',
    'images/h8.png',
    'images/h9.png', 
    'images/h10.png', 
];

function createFallingImage() {
    const image = document.createElement('img');
    
    // 배열에서 랜덤한 이미지 선택
    const randomIndex = Math.floor(Math.random() * images.length);
    image.src = images[randomIndex]; // 랜덤 이미지 설정
    image.className = 'falling-image';
    
    document.body.appendChild(image); // body에 이미지 추가
    
    // 랜덤한 위치 설정
    const randomPosition = Math.random() * (window.innerWidth - 100); 
    image.style.left = randomPosition + 'px'; 

    // 애니메이션이 완료된 후 이미지 삭제
    image.addEventListener('animationend', () => {
        image.remove();
    });
}

// 무한으로 이미지 생성
setInterval(createFallingImage, 2000); // 2초마다 이미지 생성
