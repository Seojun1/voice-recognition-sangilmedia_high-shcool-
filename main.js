alert("반을 음성인식 시작 버튼을 클릭 후 말해주세요.");

detailArea = document.querySelector('#showDetail');

if (!("webkitSpeechRecognition" in window)) { // 만약 지원이 안되는 브라우저라면
    alert("지원 안됨 (크롬으로 이동해주세요!)"); // 경고창 보내기
} else { // 만약 지원이 되는 브라우저라면
    const speech = new webkitSpeechRecognition;

    document
        .getElementById("start")
        .addEventListener("click", () => {
            speech.start();
        })

    document
        .getElementById("stop")
        .addEventListener("click", () => {
            speech.stop();
        })

    speech.addEventListener("result", (event) => {
        const {transcript} = event["results"][0][0]
        console.log(transcript);
        if (transcript == "일반" || transcript == "이반" || transcript == "삼반" || transcript == "1반" || transcript == "2반" || transcript == "3반") {
            alert("스마트소프트웨어과 학생입니다.");
        } else if (transcript == "사반" || transcript == "오반" || transcript == "4반" || transcript == "5반") {
            alert("스마트정보통신과 학생입니다.");
        } else if (transcript == "육반" || transcript == "칠반" || transcript == "6반" || transcript == "7반") {
            alert("디지털 만화영상과 학생입니다.");
        } else if (transcript == "팔반" || transcript == "구반" || transcript == "8반" || transcript == "9반") {
            alert("디지털 미디어 디자인과 학생입니다.")
        } else if (transcript == "십반" || transcript == "십일반" || transcript == "10반" || transcript == "11반") {
            alert("바이오푸드과 학생입니다.")
        } else {
            alert("발음을 주의해서 다시 한번 말씀해주세요.");
        }
    })
}

function showDetail() {
    detailArea.style.display = "block";
}