import Memory from './memory.js';
import INSTRUCTIONS, { INSTRUCTION_NAME } from './instructions.js';

class CPU {
    // [CS Fundamentals]: Registers (레지스터)
    // CPU 내부에 있는 '초고속 저장 공간'입니다.
    // 인텔 x86 아키텍처(16-bit Real Mode)를 본따서 구현합니다.

    #memory;

    // [Architecture]: Intel x86 (16-bit Real Mode)
    // 16비트 레지스터를 사용하며, Little Endian 방식을 따릅니다.
    #registers;

    constructor(memory) {
        this.#memory = memory;

        // [Register Bank]
        // IP (2byte) + AX (2byte) + BX (2byte) + CX (2byte) = 총 8바이트
        const buffer = new ArrayBuffer(8);
        this.#registers = new DataView(buffer);
    }

    // [Intel x86 Registers]
    // 16비트 값(Uint16)을 읽고 씁니다.
    // 중요: x86은 'Little Endian' 방식을 사용하므로 두 번째 인자로 true를 넘겨야 합니다.

    // Instruction Pointer (명령어 포인터)
    get ip() { return this.#registers.getUint16(0, true); }
    set ip(value) { this.#registers.setUint16(0, value, true); }

    // Accumulator Register (산술 연산용)
    get ax() { return this.#registers.getUint16(2, true); }
    set ax(value) { this.#registers.setUint16(2, value, true); }

    // Base Register (주소 지정, 데이터용)
    get bx() { return this.#registers.getUint16(4, true); }
    set bx(value) { this.#registers.setUint16(4, value, true); }

    // Count Register (루프 카운터용)
    get cx() { return this.#registers.getUint16(6, true); }
    set cx(value) { this.#registers.setUint16(6, value, true); }

    printState() {
        console.log("--- CPU State (x86 Real Mode) ---");
        console.log(`IP : 0x${this.ip.toString(16).padStart(4, '0')}`);
        console.log(`AX : 0x${this.ax.toString(16).padStart(4, '0')}`);
        console.log(`BX : 0x${this.bx.toString(16).padStart(4, '0')}`);
        console.log(`CX : 0x${this.cx.toString(16).padStart(4, '0')}`);
        console.log("---------------------------------");
    }

    // ==========================================
    // [CS Core]: Instruction Cycle (Fetch-Decode-Execute)
    // ==========================================

    fetch() {
        // [1. Fetch]
        const nextInstructionAddress = this.ip;
        const instruction = this.#memory.load(nextInstructionAddress);

        // IP 증가 (1바이트 읽었으므로)
        this.ip = this.ip + 1;

        return instruction;
    }

    // [JS Tip]: 대괄호 표기법 (Bracket Notation)
    // 객체의 속성(Property)을 변수로 찾을 때 사용합니다.
    // INSTRUCTION_NAME.0x10 (X) -> 문법 오류
    // INSTRUCTION_NAME[0x10] (O) -> 'MOV_AX_IMM' 반환
    decode(opcode) {
        const instructionName = INSTRUCTION_NAME[opcode];

        if (!instructionName) {
            throw new Error(`[Decode Error] 알 수 없는 Opcode입니다: 0x${opcode.toString(16)}`);
        }

        return {
            opcode,
            name: instructionName
        };
    }

    execute(decodedInstruction) {
        const { opcode, name } = decodedInstruction;

        switch (opcode) {
            // [MOV AX, IMM]: AX 레지스터에 값을 넣는다
            case INSTRUCTIONS.MOV_AX_IMM: {
                const literal = this.fetch(); // 피연산자(Operand) 가져오기
                this.ax = literal;            // AX에 저장 (8비트 값을 16비트에 넣으면 00XX가 됨)
                console.log(`[Execute] ${name}: AX에 0x${literal.toString(16)} 저장`);
                return;
            }

            // [MOV BX, IMM]: BX 레지스터에 값을 넣는다
            case INSTRUCTIONS.MOV_BX_IMM: {
                const literal = this.fetch();
                this.bx = literal;
                console.log(`[Execute] ${name}: BX에 0x${literal.toString(16)} 저장`);
                return;
            }

            // [ADD AX, BX]: AX = AX + BX
            // x86의 ADD 명령어는 보통 첫 번째 피연산자에 결과를 덮어씁니다 (Dest = Dest + Src)
            case INSTRUCTIONS.ADD_AX_BX: {
                const valAX = this.ax;
                const valBX = this.bx;
                const result = valAX + valBX;

                this.ax = result; // 결과는 AX에 저장
                console.log(`[Execute] ${name}: AX(${valAX}) + BX(${valBX}) = AX(${result})`);
                return;
            }

            default: {
                throw new Error(`[Execute Error] 구현되지 않은 명령어입니다: ${name}`);
            }
        }
    }

    step() {
        console.log(`\n[Cycle Start] IP: 0x${this.ip.toString(16).padStart(4, '0')}`);

        const opcode = this.fetch();
        console.log(`[Fetch] Opcode: 0x${opcode.toString(16).padStart(2, '0')}`);

        const decoded = this.decode(opcode);
        console.log(`[Decode] 명령어 확인: ${decoded.name}`);

        this.execute(decoded);
    }
}

export default CPU;
