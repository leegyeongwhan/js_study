const INSTRUCTIONS = {
    // Move Literal to Register 1
    // 예: MOV_LIT_R1 0x10 -> R1 레지스터에 0x10(16)을 넣어라
    MOV_LIT_R1: 0x10,

    // Move Literal to Register 2
    MOV_LIT_R2: 0x11,

    // Add Register 1 and Register 2
    // R1과 R2의 값을 더해서 'Accumulator'에 저장해라
    ADD_R1_R2: 0x20
};

// [JS Deep Dive]: 불변성(Immutability)
// const는 '변수 재할당'만 막을 뿐, 객체 내부의 값 변경은 못 막습니다.
// Java의 final처럼 객체 내용까지 얼려버리려면 Object.freeze()가 필요합니다.
Object.freeze(INSTRUCTIONS);

export default INSTRUCTIONS;
