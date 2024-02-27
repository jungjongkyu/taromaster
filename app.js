document.getElementById('drawCardBtn').addEventListener('click', drawCard);

function drawCard() {
    // 카드 이름을 배열로 저장합니다. 
    // 실제 사용할 이미지 파일 이름으로 배열을 완성해 주세요.
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

    // 랜덤한 카드를 선택합니다.
    const selectedCardName = cardNames[Math.floor(Math.random() * cardNames.length)];
    // 선택된 카드 이름을 URL 인코딩합니다.
    const encodedCardName = encodeURI(selectedCardName);
    // 이미지 URL을 생성합니다. GitHub Pages 주소를 정확하게 입력해 주세요.
    const imageUrl = `https://jungjongkyu.github.io/taromaster.github.io/${encodedCardName}.jpg`;
    // 이미지를 표시합니다.
    displayCard(imageUrl);
}

function displayCard(imageUrl) {
    // 이미지를 웹 페이지에 표시합니다.
    const resultDiv = document.getElementById('cardResult');
    resultDiv.innerHTML = `<img src="${imageUrl}" alt="타로 카드" class="w-40 h-60 mx-auto">`;
}
