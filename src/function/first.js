// 일반적인 함수
const aButton = document.getElementById("a");
function heavyJob() {
  const longArr = Array.from({ length: 10000000 }, (_, i) => i + 1);
  console.log(longArr.length);
}
aButton.addEventListener("click", heavyJob);
