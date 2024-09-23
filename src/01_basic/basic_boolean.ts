// 불리언 (boolean)
let isOpen: boolean = true;
let isCompleted: boolean = false;

if (isOpen) {
  console.log("hello we are open!");
}

if (!isCompleted) {
  console.log("job not complete");
}

// && || !
let isAvailable: boolean = isOpen && !isCompleted;
