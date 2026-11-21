// ===== 待辦清單 =====
// 純使用原生 JavaScript,資料會儲存在瀏覽器的 localStorage。

const STORAGE_KEY = "workshop-todos";

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const emptyState = document.getElementById("empty-state");
const remainingCount = document.getElementById("remaining-count");

let todos = loadTodos();

// 從 localStorage 讀取資料,格式不正確時改用空清單。
function loadTodos() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const parsed = saved ? JSON.parse(saved) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.warn("讀取待辦清單失敗,將以空清單開始。", error);
    return [];
  }
}

// 將目前的待辦清單寫入 localStorage。
function saveTodos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

// 產生不重複的待辦事項識別碼。
function createId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

// 根據目前資料重新繪製清單。
function render() {
  list.replaceChildren();

  todos.forEach((todo) => {
    const item = document.createElement("li");
    item.className = todo.completed ? "todo-item completed" : "todo-item";
    item.dataset.id = todo.id;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.setAttribute("aria-label", `標記「${todo.text}」為完成`);

    const text = document.createElement("span");
    text.className = "todo-text";
    text.textContent = todo.text;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "btn-delete";
    deleteButton.textContent = "✕";
    deleteButton.setAttribute("aria-label", `刪除「${todo.text}」`);

    item.append(checkbox, text, deleteButton);
    list.append(item);
  });

  emptyState.hidden = todos.length !== 0;

  const remaining = todos.filter((todo) => !todo.completed).length;
  remainingCount.textContent = `未完成:${remaining} 項`;
}

// 新增待辦事項。
function addTodo(text) {
  todos.push({
    id: createId(),
    text,
    completed: false,
  });
  saveTodos();
  render();
}

// 切換待辦事項的完成狀態。
function toggleTodo(id) {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  saveTodos();
  render();
}

// 刪除待辦事項。
function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  saveTodos();
  render();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  addTodo(text);
  input.value = "";
  input.focus();
});

list.addEventListener("change", (event) => {
  if (!event.target.matches('input[type="checkbox"]')) return;

  const item = event.target.closest(".todo-item");
  if (item) toggleTodo(item.dataset.id);
});

list.addEventListener("click", (event) => {
  const deleteButton = event.target.closest(".btn-delete");
  if (!deleteButton) return;

  const item = deleteButton.closest(".todo-item");
  if (item) deleteTodo(item.dataset.id);
});

render();
