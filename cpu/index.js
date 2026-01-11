import Memory from './memory.js';
import CPU from './cpu.js';
import INSTRUCTIONS from './instructions.js';

// 1. 메모리와 CPU 생성
const memory = new Memory(256); // 256 바이트 메모리
const cpu = new CPU(memory);

// 2. 프로그램 작성 (x86 Assembly)
// MOV AX, 0x1234 (현재는 8비트 값만 지원하므로 0x12)
// MOV BX, 0x5678 (현재는 0x34)
// ADD AX, BX     (AX = AX + BX)

let i = 0;
// MOV AX, 0x12
memory.store(i++, INSTRUCTIONS.MOV_AX_IMM);
memory.store(i++, 0x12);

// MOV BX, 0x34
memory.store(i++, INSTRUCTIONS.MOV_BX_IMM);
memory.store(i++, 0x34);

// ADD AX, BX
memory.store(i++, INSTRUCTIONS.ADD_AX_BX);


// 3. CPU 실행
console.log("--- 실행 전 ---");
cpu.printState();

console.log("\n[Step 1] MOV AX, 0x12");
cpu.step();
cpu.printState();

console.log("\n[Step 2] MOV BX, 0x34");
cpu.step();
cpu.printState();

console.log("\n[Step 3] ADD AX, BX");
cpu.step();
cpu.printState();
