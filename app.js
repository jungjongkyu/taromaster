document.getElementById('drawCardBtn').addEventListener('click', function() {
    drawCards(1); // 한 장 뽑기
});

document.getElementById('drawTwoCardsBtn').addEventListener('click', function() {
    drawCards(2); // 두 장 뽑기
});

function drawCards(numberOfCards) {
    clearCards(); // 카드 결과 영역을 비웁니다.
    for (let i = 0; i < numberOfCards; i++) {
        const cardName = drawCard();
        displayCard(cardName);
    }
}

function clearCards() {
    document.getElementById('cardResult').innerHTML = ''; // 카드 결과 영역을 비웁니다.
}

function drawCard() {
    const cardNames = [
        "0번 바보",
        "1번 마법사",
        "2번 여사제",
        "3번 여황제",
        "4번 황제",
        "5번 교황",
        "6번 연인",
        "7번 전차",
        "8번 힘",
        "9번 은둔자",
        "10번 수레바퀴",
        "11번 정의",
        "12번 매달린남자",
        "13번 죽음",
        "14번 절제",
        "15번 악마",
        "16번 타워",
        "17번 별",
        "18번 달",
        "19번 태양",
        "20번 심판",
        "21번 월드",
    ];
    const selectedCardIndex = Math.floor(Math.random() * cardNames.length);
    const selectedCardName = cardNames[selectedCardIndex];
    return selectedCardName; // 뽑힌 카드 이름을 반환합니다.
}

function displayCard(cardName) {
    const encodedCardName = encodeURI(cardName);
    const imageUrl = `https://jungjongkyu.github.io/taromaster/${encodedCardName}.jpg`;
    const resultDiv = document.getElementById('cardResult');
    resultDiv.innerHTML += `
        <img src="${imageUrl}" alt="${cardName}" class="tarot-card-image">
        <div class="card-name">${cardName}</div>
    `; // 새 카드를 기존 결과에 추가합니다.
}
