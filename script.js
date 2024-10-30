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
        const randomSaturation = Math.random() * 70 + 50; // 채도 50%~100%
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
    'images/h1.png', // 실제 이미지 파일 경로로 변경
    'images/h2.png', // 실제 이미지 파일 경로로 변경
    'images/h3.png', // 실제 이미지 파일 경로로 변경
    'images/h4.png', // 실제 이미지 파일 경로로 변경
    'images/h5.png', // 실제 이미지 파일 경로로 변경
    'images/h6.png', // 실제 이미지 파일 경로로 변경
    'images/h7.png', // 실제 이미지 파일 경로로 변경
    'images/h8.png', // 실제 이미지 파일 경로로 변경
    'images/h9.png', 
    'images/h10.png', 
   // 'images/h11.png', 
   // 'images/h12.png', 
   // 'images/h13.png', 
   // 'images/h14.png', 
   // 'images/h15.png', 
   // 'images/h16.png', 
   // 'images/h17.png', 
   // 'images/h18.png', 
   // 'images/h19.png', 
  
];

function createFallingImage() {
    const image = document.createElement('img');
    
    // 배열에서 랜덤한 이미지 선택
    const randomIndex = Math.floor(Math.random() * images.length);
    image.src = images[randomIndex]; // 랜덤 이미지 설정
    
    image.className = 'falling-image';
    document.body.appendChild(image); // body에 이미지 추가

    // 랜덤한 위치 생성
    const randomPosition = Math.random() * (window.innerWidth - 100); // 이미지의 너비를 고려하여 위치 설정
    image.style.left = randomPosition + 'px'; // x축 랜덤 위치

    // 애니메이션이 끝난 후 5초 후에 사라지도록 설정
    setTimeout(() => {
        image.remove(); // 5초 후에 DOM에서 삭제
    }, 3000); // 애니메이션 시간과 동일하게 설정
}

// 무한으로 이미지 생성
setInterval(createFallingImage, 2000); // 2초마다 이미지 생성
