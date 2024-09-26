/* 
상수 정의: TODO_FORM_ID, TODO_INPUT_ID, TODO_LIST_ID는 각각 Todo 폼, Todo 입력 필드, Todo 목록의 HTML 요소의 ID입니다.

Todo 타입 정의: Todo는 Todo 항목의 형태를 정의하는 타입입니다. 각 Todo 항목은 고유한 id, task (할 일 내용), completed (완료 여부)를 가지고 있습니다.

Todo 상태 배열: todos는 Todo 항목을 저장하는 배열입니다.

DOM 요소를 가져오는 함수 정의: getElementById 함수는 주어진 ID에 해당하는 HTML 요소를 가져오는 역할을 합니다.

Todo 추가 함수: addTodo 함수는 새로운 Todo 항목을 생성하고 todos 배열에 추가한 후 Todo를 렌더링합니다.

Todo 삭제 함수: deleteTodo 함수는 주어진 ID에 해당하는 Todo 항목을 todos 배열에서 제거한 후 Todo를 렌더링합니다.

Todo 상태 업데이트 함수: updateTodo 함수는 주어진 ID에 해당하는 Todo 항목의 상태를 업데이트한 후 Todo를 렌더링합니다.

Todo 렌더링 함수: renderTodos 함수는 todos 배열에 있는 각 Todo 항목을 HTML 요소로 만들어 Todo 목록에 표시합니다. 각 Todo 항목에는 할 일 내용과 완료/미완료 상태를 표시하며, 삭제 버튼과 완료/미완료 전환 버튼이 있습니다.

폼 제출 이벤트 핸들러: handleFormSubmit 함수는 Todo 폼을 제출할 때 호출되는 이벤트 핸들러입니다. 입력 필드에 입력된 내용을 새로운 Todo로 추가합니다.

DOM 로드 후 초기화: DOMContentLoaded 이벤트가 발생하면 Todo 폼의 제출 이벤트를 처리하고 Todo 목록을 렌더링합니다.

*/

// 상수 정의
const TODO_FORM_ID = "todo-form" as const;
const TODO_INPUT_ID = "todo-input" as const;
const TODO_LIST_ID = "todo-list" as const;

function getElementById(idElement: string) {
  return document.getElementById(idElement);
}

// Todo 타입 정의
type Todo = {
  id: number;
  title: string;
  isComplete: boolean;
};

// Todo 상태 배열
const todos: Todo[] = [];

// DOM 요소를 가져오는 함수 정의
// function getElementById()

// Todo 추가 함수
function addTodo(title: string) {
  const newTodo: Todo = {
    id: Number(new Date()),
    title: "",
    isComplete: false
  };

  todos.push(newTodo);
}

// Todo 삭제 함수

// Todo 상태 업데이트 함수

// Todo 렌더링 함수
function renderTodos() {
  const todoList = getElementById(TODO_LIST_ID);

  todos.forEach((todo) => {
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    const completeBtn = document.createElement("button");

    li.textContent = todo.title;

    // todoList?.appendChild(li);

    // const delBtn = document.createElement("button");
    // delBtn.textContent = "삭제";
    // delBtn.addEventListener("click", () => delTodo(todo.id));
  });
}

function handleFormSubmit(e: { preventDefault: () => void }) {
  e.preventDefault();
  const input = getElementById(TODO_INPUT_ID);
  console.log(input);
}

// DOM 로드 후 초기화
document.addEventListener("DOMContentLoaded", () => {
  renderTodos();
});
