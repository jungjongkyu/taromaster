document.getElementById('drawCardBtn').addEventListener('click', drawCard);

function drawCard() {
    const cards = [
        "0번 바보",
        "1번 마법사",
        // 여기에 나머지 카드 이름을 "2번 여사제", "3번 여황제" 등의 형식으로 추가하세요.
        "21번 세계"
    ];

    const selectedCardName = cards[Math.floor(Math.random() * cards.length)];
    const encodedCardName = encodeURI(selectedCardName); // 파일 이름을 URL 인코딩
    const imageUrl = `https://taromaster.github.io/${encodedCardName}.jpg`; // 인코딩된 파일 이름을 포함하는 이미지 URL
    displayCard(imageUrl);
}

function displayCard(imageUrl) {
    const resultDiv = document.getElementById('cardResult');
    resultDiv.innerHTML = `<img src="${imageUrl}" alt="타로 카드" class="w-40 h-60 mx-auto">`; // 선택된 카드를 표시
}
