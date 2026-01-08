class Memory {
    // [Modern JS OOP]: Private Class Fields ('#')
    // Java의 'private' 접근제어자와 똑같습니다!
    // #을 붙이면 클래스 외부에서 절대 접근할 수 없습니다 (Encapsulation).
    #memory;

    constructor(sizeInBytes) {
        // [JS Deep Dive]: Uint8Array vs Array
        // 일반 Array는 객체라 무겁고 해시맵처럼 동작하지만,
        // Uint8Array는 C언어의 배열처럼 연속된 메모리 공간을 확보합니다.
        // 이는 V8 엔진 입장에서 매우 효율적이며, 하드웨어 RAM의 동작 방식과 가장 유사합니다.
        this.#memory = new Uint8Array(sizeInBytes);
    }

    load(address) {
        // 메모리 주소(인덱스)에 있는 값을 반환합니다.
        // O(1) 접근 속도를 가집니다.
        return this.#memory[address];
    }

    store(address, value) {
        // [JS Tip]: 255를 넘는 값이 들어오면 어떻게 될까요?
        // Uint8Array는 자동으로 하위 8비트만 남기고 잘라냅니다 (Overflow wrapping).
        // 예: 256 -> 0, 257 -> 1. 이것도 하드웨어 동작과 동일합니다!
        this.#memory[address] = value;
    }
}

export default Memory;
