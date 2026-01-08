import Memory from './memory.js';
import INSTRUCTIONS from './instructions.js';

class CPU {
    // [CS Fundamentals]: Registers (레지스터)
    // CPU 내부에 있는 '초고속 저장 공간'입니다.
    // 메모리(RAM)까지 갔다 오는 건 너무 느려서, 계산에 필요한 값은 잠시 여기에 둡니다.

    #memory; // RAM과 연결된 버스

    // [CS Deep Dive]: Registers are Hardware 레지스터는 실제 하드웨어다!
    // 레지스터는 CPU 내부에 있는 'SRAM' 기반의 초고속 저장 장치입니다.
    // 일반 변수와 달리 고정된 비트 수(8bit, 16bit)를 가집니다.
    // 이를 시뮬레이션하기 위해 ArrayBuffer와 DataView를 사용합니다.
    #registers;

    constructor(memory) {
        this.#memory = memory;

        // 5바이트 크기의 레지스터 뱅크를 만듭니다.
        // IP(2바이트) + ACC(1바이트) + R1(1바이트) + R2(1바이트)
        const buffer = new ArrayBuffer(5);
        this.#registers = new DataView(buffer);
    }

    // [CS Tip]: 레지스터는 이름으로 접근하지만 실제로는 '오프셋(위치)'입니다.
    // 0번지부터 2바이트는 IP, 2번지는 ACC... 이런 식이죠.

    get ip() { return this.#registers.getUint16(0); } // 0~1 byte
    set ip(value) { this.#registers.setUint16(0, value); }

    get acc() { return this.#registers.getUint8(2); } // 2 byte
    set acc(value) { this.#registers.setUint8(2, value); }

    get r1() { return this.#registers.getUint8(3); } // 3 byte
    set r1(value) { this.#registers.setUint8(3, value); }

    get r2() { return this.#registers.getUint8(4); } // 4 byte
    set r2(value) { this.#registers.setUint8(4, value); }

    // [Debug]: 현재 CPU 상태를 보여주는 함수
    printState() {
        console.log("--- CPU State ---");
        // 이제 게터(get ip())를 통해 가져오므로 .ip, .acc 로 접근합니다.
        console.log(`IP : 0x${this.ip.toString(16).padStart(4, '0')}`);
        console.log(`ACC: 0x${this.acc.toString(16).padStart(2, '0')}`);
        console.log(`R1 : 0x${this.r1.toString(16).padStart(2, '0')}`);
        console.log(`R2 : 0x${this.r2.toString(16).padStart(2, '0')}`);
        console.log(`IR : 0x${this.ir.toString(16).padStart(2, '0')}`);
        console.log("-----------------");
    }

    // fetch, decode, execute 단계는 다음 단계에서 구현합니다.
    step() {
        // TODO: Instruction Cycle 구현
    }
}

export default CPU;
