# CPU Emulation Project Checklist

이 프로젝트는 JavaScript 기초를 다지면서 컴퓨터 구조의 핵심인 CPU를 직접 구현해보는 것을 목표로 합니다.

## 1. 메모리 시스템 (Memory System)
- [ ] **`memory.js` 뼈대 잡기**: `createMemory` 함수 또는 클래스 생성
- [ ] **TypedArray 활용**: `ArrayBuffer`와 `DataView` 또는 `Uint8Array`를 사용하여 바이트 단위 메모리 조작 익히기
- [ ] **메서드 구현**:
    - `load(address)`: 특정 주소의 값 읽기
    - `store(address, value)`: 특정 주소에 값 쓰기

## 2. 명령어 정의 (Instruction Set)
- [ ] **`instructions.js` 정의**: CPU가 이해할 수 있는 명령어 목록 만들기
- [ ] **Opcode 매핑**: 각 명령어(MOV, ADD, SUB 등)에 고유한 숫자(Opcode) 할당
- [ ] **JavaScript 객체/Map 활용**: 명령어 이름과 Opcode를 연결하는 구조체 만들기

## 3. CPU 코어 (CPU Structure)
- [ ] **`cpu.js` 클래스 구조**: `CPU` 클래스 생성 (ES6 Class 문법 학습)
- [ ] **레지스터(Registers) 구현**:
    - `PC` (Program Counter): 다음 실행할 명령어 주소
    - `ACC` (Accumulator): 연산 결과 저장
    - 범용 레지스터 (R1, R2, ...)
- [ ] **메모리 연결**: CPU가 앞서 만든 Memory 객체를 참조하도록 설정

## 4. 인출-해석-실행 사이클 (Fetch-Decode-Execute)
- [ ] **`fetch`**: 메모리(PC 위치)에서 명령어 가져오기 & PC 증가
- [ ] **`execute`**: 가져온 명령어(Opcode)에 따라 분기 처리 (switch-case 문 또는 객체 룩업 활용)
- [ ] **명령어별 로직 구현**:
    - 데이터 이동 (Load/Store)
    - 산술 연산 (Add/Sub)
    - 제어 흐름 (Jump/Branch)

## 5. 메인 실행 및 테스트 (Main Entry)
- [ ] **`index.js` 구성**: 메모리 생성 -> CPU 생성 -> 프로그램 로드 -> 실행
- [ ] **디버깅 환경**: 레지스터와 메모리 상태를 콘솔에 예쁘게 출력하는 헬퍼 함수 작성 (`console.table` 등 활용)
- [ ] **테스트 프로그램 작성**: 간단한 덧셈 프로그램 등을 16진수 코드로 작성하여 실행해보기

## 6. 심화 (Optional)
- [ ] **스택(Stack) 구현**: PUSH, POP 명령어 및 SP(Stack Pointer) 레지스터
- [ ] **서브루틴**: CALL, RET 명령어
