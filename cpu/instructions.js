const INSTRUCTIONS = {
    // [x86 Instruction]: MOV AX, Immediate
    // AX 레지스터에 즉시값(Immediate Value)을 넣습니다.
    // 예: MOV AX, 0x10
    MOV_AX_IMM: 0x10,

    // [x86 Instruction]: MOV BX, Immediate
    // BX 레지스터에 즉시값을 넣습니다.
    MOV_BX_IMM: 0x11,

    // [x86 Instruction]: ADD AX, BX
    // AX = AX + BX
    // 결과를 Destination(AX)에 저장하는 것이 x86 표준입니다.
    ADD_AX_BX: 0x20
};

// [Decoded Info]: 디코드 단계에서 명칭을 확인하기 위한 맵
export const INSTRUCTION_NAME = {
    [INSTRUCTIONS.MOV_AX_IMM]: 'MOV_AX_IMM',
    [INSTRUCTIONS.MOV_BX_IMM]: 'MOV_BX_IMM',
    [INSTRUCTIONS.ADD_AX_BX]: 'ADD_AX_BX'
};

// [JS Deep Dive]: 불변성(Immutability)
// const는 '변수 재할당'만 막을 뿐, 객체 내부의 값 변경은 못 막습니다.
// Java의 final처럼 객체 내용까지 얼려버리려면 Object.freeze()가 필요합니다.
Object.freeze(INSTRUCTIONS);

export default INSTRUCTIONS;
