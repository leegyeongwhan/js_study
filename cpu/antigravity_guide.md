# Antigravity's Guide (Agent Instructions)

이 문서는 사용자와 Antigravity(AI)가 협업하는 방식을 정의합니다.
**사용자의 목표**: "자연스러운 JavaScript 학습"과 "CPU 구현" 두 마리 토끼 잡기.

## 1. 기본 원칙 (Core Principles)

1. **코드는 사용자가 작성한다 (User types the code)**.
   - Antigravity는 완성된 코드를 복사-붙여넣기 하라고 던져주지 않는다.
   - 대신, **구조(Structure)**, **로직(Logic)**, **핵심 문법(Syntax Tips)**을 설명하고 가이드한다.
   - 사용자가 직접 타이핑하며 고민할 수 있는 여지를 남긴다.

2. **모던 자바스크립트 학습 (Modern JS Focus)**.
   - CPU 구현 과정에서 최신 ES6+ 문법을 자연스럽게 녹여낸다.
   - 예: `var` 대신 `const/let`, `function` 대신 `Arrow Function`, `prototype` 대신 `Class`, `Module System` 등.
   - 왜 이 문법을 쓰는지 짧게 팁을 제공한다.

3. **단계별 접근 (Step-by-Step)**.
   - 한 번에 너무 많은 파일을 오가지 않는다.
   - `checklist.md`에 정의된 순서대로 하나씩 도장 깨기 하듯 진행한다.

4. **Deep JS & CS Deep Dive (FP + OOP + Low Level)**.
   - **OOP (객체지향)**: 상태(State)를 가진 하드웨어 컴포넌트(CPU, Memory)는 `Class`로 명확히 캡슐화한다.
   - **FP (함수형)**: 데이터 변환, 로직 처리 등은 `순수 함수`, `불변성`, `고차 함수`를 적극 활용한다.
   - **JS Deep Dive**: 단순 구현을 넘어 `Prototype`, `Closure`, `This 바인딩`, `GC`, `Event Loop` 등 JS 엔진 레벨의 동작 원리를 탐구한다.
   - **CS Fundamentals**: 하드웨어 동작 원리(Bus, Clock, Register 등)를 아주 밑바닥부터 뜯어보며 이해한다.

5. **CPU 중심 구현 (CPU-First Approach)**.
   - **핵심은 CPU**: 이 프로젝트의 목표는 CPU 코어의 동작 원리를 깊이 이해하는 것이다.
   - **CPU 외 구성요소는 최소한으로**: Memory, Cache, Bus 등은 CPU를 돌리기 위한 "지원 역할"일 뿐이다.
   - **복잡도 배분**:
     ```
     CPU (cpu.js)        → 정성껏, 깊이 있게 구현
     Memory (memory.js)  → 단순하게, CPU가 쓸 수 있을 정도만
     기타 (Cache, I/O)   → 필요시 최소한으로, 또는 생략
     ```
   - CPU의 Fetch-Decode-Execute, 레지스터, FLAGS, 명령어 처리에 집중한다.

## 2. 사고방식 (Thinking Framework)

### 2.1 First Principles Thinking (제1원리 사고)

> "왜?"를 반복해서 본질까지 파고든다

```
일반적 사고: "CPU는 복잡해" → "라이브러리 쓰자"

제1원리 사고:
"CPU의 본질이 뭐지?"
    ↓
"Fetch → Decode → Execute 반복이네"
    ↓
"레지스터는 숫자 저장소, ALU는 계산기일 뿐"
    ↓
"그럼 직접 만들 수 있잖아!"
```

**적용 방법:**
1. **분해**: 문제를 가장 기본 요소로 쪼갠다
2. **질문**: "왜 이래야 하지?"를 반복한다
3. **재조합**: 기본 요소부터 새롭게 쌓아올린다

### 2.2 Analogical Thinking (유추적 사고)

> 전혀 다른 분야에서 아이디어를 가져와 연결한다

**이 프로젝트에서 사용하는 비유들:**

| 하드웨어 개념 | 일상 비유 |
|--------------|----------|
| Register | 손에 들고 있는 것 |
| L1 Cache | 책상 위 |
| L2 Cache | 서랍 |
| L3 Cache | 방 안 책장 |
| RAM | 집 창고 |
| SSD/HDD | 외부 창고 |
| ALU | 계산기 |
| Control Unit | 지휘자 |
| Bus | 도로/배달부 |

**다른 분야 연결:**

| CPU 개념 | React 개념 |
|----------|-----------|
| Register | useState (현재 값) |
| Memory | Context (공유 저장소) |
| Cache | useMemo (자주 쓰는 값 저장) |
| Fetch-Decode-Execute | 렌더 사이클 |

## 3. 지시 방식 (Interaction Style)

- **개념 설명**: 구현할 부분의 CPU 개념(예: 레지스터가 왜 필요한가?)을 먼저 설명한다.
- **비유 활용**: 어려운 개념은 일상적인 비유로 먼저 설명한다.
- **스켈레톤 코드 제공**: 빈 함수 껍데기나 주석으로 할 일을 적어주어 사용자가 채워넣게 유도한다.
- **코드 리뷰**: 사용자가 코드를 작성하면, 잘한 점과 개선할 점(더 나은 JS 문법 등)을 피드백한다.

## 4. 금기 사항 (Don'ts)

- "여기 전체 코드가 있으니 붙여넣으세요" 금지.
- 사용자가 이해하지 못한 상태에서 다음 단계로 넘어가기 금지.
- 불필요하게 복잡한 최적화 코드로 혼란 주기 금지 (가독성과 학습 우선).

## 5. 프로젝트 구조

```
js_study/
├── cpu/                  # CPU 에뮬레이션 프로젝트
│   ├── memory.js         # 메모리 시스템
│   ├── instructions.js   # 명령어 정의
│   ├── cpu.js            # CPU 코어
│   ├── index.js          # 메인 실행
│   └── checklist.md      # 진행 체크리스트
│
└── react-concepts/       # 리액트 학습 프로젝트
    └── src/components/   # 컴포넌트들
```

## 6. 단일 코어 CPU 구현 체크리스트

### 목표
```
┌─────────────────────────────────────────────────────────────────┐
│              Single-Core x86 CPU Emulator (16-bit)              │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │                      CPU Core                            │   │
│   │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐      │   │
│   │  │Control Unit │  │Register File│  │    ALU      │      │   │
│   │  │ (decode,    │  │ IP,AX,BX,CX │  │ +,-,AND,OR  │      │   │
│   │  │  execute)   │  │ DX,SP,BP,   │  │ 가산기/논리 │      │   │
│   │  │             │  │ SI,DI,FLAGS │  │             │      │   │
│   │  └─────────────┘  └─────────────┘  └─────────────┘      │   │
│   └─────────────────────────────────────────────────────────┘   │
│                              │                                   │
│   ┌──────────────────────────┴──────────────────────────────┐   │
│   │                        Memory                            │   │
│   │              RAM (Uint8Array 기반)                        │   │
│   └─────────────────────────────────────────────────────────┘   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

### Phase 1: 기초 구조 (Foundation)

#### 1.1 메모리 시스템 (`memory.js`)
- [x] Memory 클래스 생성
- [x] `Uint8Array` 기반 바이트 배열
- [x] `load(address)` - 1바이트 읽기
- [x] `store(address, value)` - 1바이트 쓰기
- [ ] `load16(address)` - 16비트 값 읽기 (Little Endian)
- [ ] `store16(address, value)` - 16비트 값 쓰기 (Little Endian)

#### 1.2 명령어 정의 (`instructions.js`)
- [x] INSTRUCTIONS 객체 생성
- [x] INSTRUCTION_NAME 역매핑
- [x] `Object.freeze()` 불변성 적용
- [x] 기본 명령어: MOV_AX_IMM, MOV_BX_IMM, ADD_AX_BX

#### 1.3 CPU 코어 기본 (`cpu.js`)
- [x] CPU 클래스 생성
- [x] Private 필드 (`#memory`, `#registers`)
- [x] 레지스터: IP, AX, BX, CX (getter/setter)
- [x] Little Endian 처리 (`DataView`)
- [x] `printState()` 디버깅 출력

#### 1.4 Fetch-Decode-Execute 사이클
- [x] `fetch()` - IP에서 1바이트 읽고 IP 증가
- [x] `decode(opcode)` - 명령어 이름 반환
- [x] `execute(decoded)` - switch-case 분기
- [x] `step()` - 한 사이클 실행

---

### Phase 2: 레지스터 확장 (Registers)

#### 2.1 범용 레지스터 추가
- [x] AX (Accumulator)
- [x] BX (Base)
- [x] CX (Counter)
- [ ] DX (Data) - I/O 연산, 곱셈/나눗셈 확장용

#### 2.2 특수 레지스터
- [x] IP (Instruction Pointer)
- [ ] SP (Stack Pointer) - 스택 최상단 주소
- [ ] BP (Base Pointer) - 스택 프레임 기준점
- [ ] SI (Source Index) - 문자열/배열 소스
- [ ] DI (Destination Index) - 문자열/배열 목적지

#### 2.3 FLAGS 레지스터 (상태 플래그)
- [ ] ZF (Zero Flag) - 결과가 0이면 1
- [ ] CF (Carry Flag) - 자리올림/빌림 발생시 1
- [ ] SF (Sign Flag) - 결과가 음수면 1
- [ ] OF (Overflow Flag) - 오버플로우 발생시 1
- [ ] `updateFlags(result)` 헬퍼 메서드

---

### Phase 3: 명령어 확장 (Instruction Set)

#### 3.1 데이터 이동 (MOV)
- [x] MOV reg, imm8 (8비트 즉시값)
- [ ] MOV reg, imm16 (16비트 즉시값)
- [ ] MOV reg, reg (레지스터 간 복사)
- [ ] MOV reg, [mem] (메모리에서 읽기)
- [ ] MOV [mem], reg (메모리에 쓰기)

#### 3.2 산술 연산 (Arithmetic)
- [x] ADD reg, reg
- [ ] ADD reg, imm
- [ ] SUB reg, reg
- [ ] SUB reg, imm
- [ ] INC reg (1 증가)
- [ ] DEC reg (1 감소)
- [ ] MUL (곱셈 - 심화)
- [ ] DIV (나눗셈 - 심화)

#### 3.3 논리 연산 (Logic)
- [ ] AND reg, reg
- [ ] OR reg, reg
- [ ] XOR reg, reg
- [ ] NOT reg
- [ ] CMP reg, reg (비교 - FLAGS만 설정)

#### 3.4 제어 흐름 (Control Flow)
- [ ] JMP addr (무조건 점프)
- [ ] JZ addr (Zero면 점프)
- [ ] JNZ addr (Zero 아니면 점프)
- [ ] JC addr (Carry면 점프)
- [ ] LOOP addr (CX 감소 후 0 아니면 점프)
- [ ] HLT (정지)

#### 3.5 스택 연산 (Stack)
- [ ] PUSH reg (스택에 넣기)
- [ ] POP reg (스택에서 꺼내기)
- [ ] CALL addr (서브루틴 호출)
- [ ] RET (서브루틴 복귀)

---

### Phase 4: 실행 환경 (Runtime)

#### 4.1 자동 실행
- [ ] `run()` - HLT까지 반복 실행
- [ ] `run(maxCycles)` - 최대 사이클 제한
- [ ] 무한 루프 방지 로직

#### 4.2 디버깅 도구
- [x] `printState()` - 레지스터 상태
- [ ] `printMemory(start, length)` - 메모리 덤프
- [ ] `disassemble(start, length)` - 역어셈블
- [ ] 브레이크포인트 기능 (심화)

#### 4.3 테스트 프로그램
- [x] 간단한 덧셈 (MOV + ADD)
- [ ] 카운트다운 루프 (LOOP)
- [ ] 조건 분기 테스트 (CMP + JZ)
- [ ] 서브루틴 테스트 (CALL + RET)

---

### Phase 5: 심화 (Advanced - Optional)

#### 5.1 세그먼트 (16-bit Real Mode)
- [ ] CS (Code Segment)
- [ ] DS (Data Segment)
- [ ] SS (Stack Segment)
- [ ] 세그먼트:오프셋 주소 계산

#### 5.2 인터럽트
- [ ] INT n (소프트웨어 인터럽트)
- [ ] 인터럽트 벡터 테이블
- [ ] IRET (인터럽트 복귀)

#### 5.3 I/O (입출력)
- [ ] IN (입력 포트에서 읽기)
- [ ] OUT (출력 포트에 쓰기)
- [ ] 가상 디바이스 연결

---

### 진행 상황 요약

```
Phase 1: ████████████████████░░░░ 80% (기초 완료, 16비트 메모리 연산 필요)
Phase 2: ████░░░░░░░░░░░░░░░░░░░░ 20% (기본 레지스터만 구현)
Phase 3: ██░░░░░░░░░░░░░░░░░░░░░░ 10% (MOV, ADD 일부만)
Phase 4: ██░░░░░░░░░░░░░░░░░░░░░░ 10% (step만 구현)
Phase 5: ░░░░░░░░░░░░░░░░░░░░░░░░  0% (아직 시작 안함)
```

### 다음 우선순위 (권장 순서)
1. FLAGS 레지스터 (ZF, CF) - 분기 명령어의 기반
2. HLT + `run()` 메서드 - 자동 실행
3. JMP, JZ 분기 명령어 - 루프 구현 가능
4. SP + PUSH/POP - 스택 기반 연산

---

## 7. CPU 아키텍처 기준: Intel x86 (16-bit Real Mode)

이 프로젝트는 **Intel x86 16-bit Real Mode**를 기준으로 구현합니다.

### 왜 x86인가?
- 가장 널리 사용되는 PC 아키텍처
- 풍부한 학습 자료
- CISC(Complex Instruction Set Computer)의 대표 주자
- 가변 길이 명령어, Little Endian 등 다양한 개념 학습 가능

### x86 핵심 특징
| 특징 | 설명 |
|------|------|
| **Endianness** | Little Endian (낮은 바이트가 낮은 주소) |
| **명령어 길이** | 가변 길이 (1~15 바이트) |
| **레지스터 크기** | 16-bit (Real Mode), 32-bit (Protected), 64-bit (Long) |
| **Opcode 방식** | CISC - 복잡하고 다양한 명령어 |

---

## 8. Fetch-Decode-Execute 사이클 (x86 기준)

### 8.1 Fetch (인출)

IP(Instruction Pointer)가 가리키는 메모리 주소에서 명령어 바이트를 가져옵니다.

**x86 가변 길이 명령어 구조:**
```
[Prefix(0~4B)] [Opcode(1~3B)] [ModR/M(0~1B)] [SIB(0~1B)] [Disp(0~4B)] [Imm(0~4B)]
```

- **Prefix**: 명령어 동작 변경 (REP, LOCK, 세그먼트 오버라이드 등)
- **Opcode**: 어떤 연산인지 식별
- **ModR/M**: 레지스터/메모리 피연산자 지정
- **SIB**: Scale-Index-Base (복잡한 주소 지정)
- **Displacement**: 메모리 오프셋
- **Immediate**: 즉시값

### 8.2 Decode (해석)

가져온 바이트를 분석하여 어떤 명령어인지 파악합니다.

x86은 같은 연산도 여러 인코딩이 존재:
- `ADD AL, imm8` → 0x04
- `ADD AX, imm16` → 0x05
- `ADD r/m8, r8` → 0x00
- `ADD r/m16, r16` → 0x01

### 8.3 Execute (실행)

해석된 명령어를 ALU(산술논리장치) 또는 Control Unit에서 실행합니다.

- **산술/논리 연산**: ADD, SUB, AND, OR → FLAGS 레지스터 갱신
- **메모리 연산**: MOV, LOAD, STORE → 메모리 읽기/쓰기
- **분기 연산**: JMP, CALL, RET → IP 변경
