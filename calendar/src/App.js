import CalendarTemplate from "./components/CalendarTemplate";

function App() {
  return (
    <div className="App">
      <CalendarTemplate></CalendarTemplate>
    </div>
  );
}

export default App;

// 달력 명세
// 1. 시작 날짜(오늘) 생성 => new Date()
// 연도, 월, 일, 요일 => 시작 요일 파악
// 2. 시작날짜부터 마지막날까지 출력
// 3. 날짜 변경 => 월 변경. 1번부터 다시
// 4. 공휴일 처리
// 5. 오늘 날짜 표시
