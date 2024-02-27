document.getElementById('drawCardBtn').addEventListener('click', drawCard);

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

    const selectedCardName = cardNames[Math.floor(Math.random() * cardNames.length)];
    const encodedCardName = encodeURI(selectedCardName);
    const imageUrl = `https://jungjongkyu.github.io/taromaster.github.io/${encodedCardName}.jpg`;
    displayCard(imageUrl);
}

function displayCard(imageUrl) {
    const resultDiv = document.getElementById('cardResult');
    resultDiv.innerHTML = `<img src="${imageUrl}" alt="타로 카드 이미지" class="w-40 h-60 mx-auto">`;
}
