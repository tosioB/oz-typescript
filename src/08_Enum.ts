// 기본문법
enum 이름 {
  상수값1,
  상수값2,
  상수값3
}

// 숫자형 Enum
enum PlayerState {
  Buffering,
  Playing,
  Paused,
  Seeking
}

let currentState: PlayerState;

// currentState = PlayerState.Buffering;
currentState = PlayerState.Playing;

// currentState = "Playing"; // Error

const isPlaying = (state: PlayerState) => {
  return state === PlayerState.Playing;
};

// 플레이어 재생중?
isPlaying(currentState); // true

// 문자형 Enum
enum Direction2 {
  Left = "LEFT",
  Right = "RIGHT",
  Up = "UP",
  Down = "DOWN"
}

function move100(dir: Direction2) {
  switch (dir) {
    case Direction2.Left:
      // 왼쪽 로직
      break;
    case Direction2.Right:
      // 오른쪽 로직
      break;
    // ...
  }
}

move100(Direction2.Left);
move100(Direction2.Right);
