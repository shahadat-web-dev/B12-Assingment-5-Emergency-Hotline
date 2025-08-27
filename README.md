# JavaScript DOM & Event Handling

## 1. Difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`

- **getElementById("id")**
  - Selects a single element using its unique `id`.
  - Always returns **one element** (or `null` if not found).

- **getElementsByClassName("class")**
  - Selects all elements with a given `class`.
  - Returns an **HTMLCollection** (live list), meaning if the DOM changes, it updates automatically.

- **querySelector("selector")**
  - Uses **CSS selectors** (e.g. `#id`, `.class`, `div p`) to find the **first matching element**.
  - Returns one element or `null`.

- **querySelectorAll("selector")**
  - Returns **all elements** matching the CSS selector.
  - Returns a **NodeList** (not live, but can be looped with `forEach`).

---

## 2. How do you create and insert a new element into the DOM?
1. Use `document.createElement("tagName")` to create a new element.
2. Add text using `textContent` or `innerText`.
3. Attach it to the DOM using methods like:
   - `appendChild()` → adds inside at the end
   - `prepend()` → adds inside at the start
   - `before()` / `after()` → adds outside before/after an element
   - `replaceWith()` → replaces an element

Example:
```js
const newDiv = document.createElement("div");
newDiv.textContent = "Hello World";
document.body.appendChild(newDiv);
```

---

## 3. What is Event Bubbling and how does it work?
- **Event Bubbling** means when an event happens on an element, it first runs the event on that element, then on its parent, then on grandparent, and so on **up to the root (document)**.
- Example: If you click a button inside a `div`, the click event will first trigger on the button, then on the `div`, then on `body`, and finally on `document`.

---

## 4. What is Event Delegation in JavaScript? Why is it useful?
- **Event Delegation** is a technique where instead of adding event listeners to multiple child elements, you add **one event listener to a parent element** and handle events based on the target.
- Useful because:
  - Improves **performance** (fewer listeners).
  - Handles **dynamic elements** (newly added elements also work).

Example:
```js
document.getElementById("list").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    console.log("Clicked on", e.target.textContent);
  }
});
```

---

## 5. Difference between `preventDefault()` and `stopPropagation()`

- **preventDefault()**
  - Stops the default browser action.
  - Example: Preventing a form from submitting or preventing a link from navigating.

- **stopPropagation()**
  - Stops the event from moving further in the bubbling or capturing phase.
  - Example: If you don’t want the event to reach parent elements.

---
