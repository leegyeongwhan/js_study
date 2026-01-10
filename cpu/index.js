import Memory from './memory.js';
import CPU from './cpu.js';
import INSTRUCTIONS from './instructions.js';

// 1. 메모리와 CPU 생성
const memory = new Memory(256); // 256 바이트 메모리
const cpu = new CPU(memory);

// 2. 프로그램 작성 (기계어)
// R1 = 0x12
// R2 = 0x34
// ACC = R1 + R2 (0x46 예상)

let i = 0;
// MOV_LIT_R1 0x12
memory.store(i++, INSTRUCTIONS.MOV_LIT_R1);
memory.store(i++, 0x12);

// MOV_LIT_R2 0x34
memory.store(i++, INSTRUCTIONS.MOV_LIT_R2);
memory.store(i++, 0x34);

// ADD_R1_R2
memory.store(i++, INSTRUCTIONS.ADD_R1_R2);


// 3. CPU 실행
console.log("--- 실행 전 ---");
cpu.printState();

console.log("\n[Step 1] MOV R1, 0x12");
cpu.step(); // Fetch & Execute First Instruction
cpu.printState();

console.log("\n[Step 2] MOV R2, 0x34");
cpu.step(); // Fetch & Execute Second Instruction
cpu.printState();

console.log("\n[Step 3] ADD R1, R2");
cpu.step(); // Fetch & Execute Third Instruction
cpu.printState();
