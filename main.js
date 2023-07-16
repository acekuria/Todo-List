/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/initialPageLoad.js":
/*!********************************!*\
  !*** ./src/initialPageLoad.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadJS: () => (/* binding */ loadJS)
/* harmony export */ });
function loadJS() {
  
  window.addEventListener('load', () => {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    console.log(todos)

    const nameInput = document.querySelector('#name');
    const newTodoForm = document.querySelector('#new-todo-form');
  
    const username = localStorage.getItem('username') || '';
    
    nameInput.value = username;
    
    nameInput.addEventListener('change', (e) => {
      localStorage.setItem('username', e.target.value);
    });
  
    newTodoForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const todo = {
        content: e.target.elements.content.value,
        category: e.target.elements.category.value,
        done: false,
        createDate: new Date().getTime()
      };
      
      if (todo.content !== '') {
        todos.push(todo);
      }
  
      localStorage.setItem('todos', JSON.stringify(todos));
  
      e.target.reset(); //this part is important because it clears the form which we stopped when using e.preventDefault();
  
      displayTodos(todos); // todos are displayed after form is submitted
    });
  
    displayTodos(todos); //todos are displayed as soon as the page is loaded
  });
  
  function displayTodos(todos) {
    const todoList = document.querySelector('#todo-list');
  
    todoList.innerHTML = '';
  
    todos
    .filter((todo) => !todo.deleted)
    .sort((a, b) => {
      return b.createDate - a.createDate;
    })
    .forEach((todo) => {
      const todoItem = document.createElement('div'); 
      todoItem.classList.add('todo-item');
  
      const label = document.createElement('label');
      const input = document.createElement('input');
      const span = document.createElement('span');
      const content = document.createElement('div');
      const actions = document.createElement('div');
      const edit = document.createElement('button');
      const deleteButton = document.createElement('button');
  
      input.type = 'checkbox';
      input.checked = false;
      span.classList.add('bubble');
  
      if (todo.category =='personal') {
        span.classList.add('personal');
      } else {
        span.classList.add('business');
      }
  
      content.classList.add('todo-content');
      actions.classList.add('actions');
      edit.classList.add('edit');
      deleteButton.classList.add('delete');
      content.innerHTML = `<input type="text" value='${todo.content}'readonly>`;
      edit.innerHTML = 'Edit';
      deleteButton.innerHTML = 'Delete';
  
      label.appendChild(input);
      label.appendChild(span);
      actions.appendChild(edit);
      actions.appendChild(deleteButton);
  
      todoItem.appendChild(label);
      todoItem.appendChild(content);
      todoItem.appendChild(actions);
  
      todoList.append(todoItem);
  
      input.addEventListener('click', (e) => {
        todo.done = e.target.checked;
        localStorage.setItem('todos', JSON.stringify(todos));
      
        if (todo.done) {
          todoItem.classList.add('done');
        } else {
          todoItem.classList.remove('done');
        }
      });
      
      edit.addEventListener('click', (e) => {
        const input = content.querySelector('input');
        input.removeAttribute('readonly');
        input.focus();
        input.addEventListener('blur', (e) => {
          input.setAttribute('readonly', true);
          todo.content = e.target.value;
          localStorage.setItem('todos', JSON.stringify(todos));
        });
      });
      
      deleteButton.addEventListener('click', (e) => {
        todo.deleted = true;
        localStorage.setItem('todos', JSON.stringify(todos));
        displayTodos(todos);
      });
    });
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initialPageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialPageLoad */ "./src/initialPageLoad.js");


(0,_initialPageLoad__WEBPACK_IMPORTED_MODULE_0__.loadJS)()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQSwyQkFBMkI7QUFDM0IsS0FBSztBQUNMO0FBQ0EseUJBQXlCO0FBQ3pCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsYUFBYTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOzs7Ozs7O1VDekhBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOMkM7O0FBRTNDLHdEQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luaXRpYWxQYWdlTG9hZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGxvYWRKUygpIHtcbiAgXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgIGxldCB0b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpIHx8IFtdO1xuICAgIGNvbnNvbGUubG9nKHRvZG9zKVxuXG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKTtcbiAgICBjb25zdCBuZXdUb2RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctdG9kby1mb3JtJyk7XG4gIFxuICAgIGNvbnN0IHVzZXJuYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJuYW1lJykgfHwgJyc7XG4gICAgXG4gICAgbmFtZUlucHV0LnZhbHVlID0gdXNlcm5hbWU7XG4gICAgXG4gICAgbmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcm5hbWUnLCBlLnRhcmdldC52YWx1ZSk7XG4gICAgfSk7XG4gIFxuICAgIG5ld1RvZG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIFxuICAgICAgY29uc3QgdG9kbyA9IHtcbiAgICAgICAgY29udGVudDogZS50YXJnZXQuZWxlbWVudHMuY29udGVudC52YWx1ZSxcbiAgICAgICAgY2F0ZWdvcnk6IGUudGFyZ2V0LmVsZW1lbnRzLmNhdGVnb3J5LnZhbHVlLFxuICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgY3JlYXRlRGF0ZTogbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICAgIH07XG4gICAgICBcbiAgICAgIGlmICh0b2RvLmNvbnRlbnQgIT09ICcnKSB7XG4gICAgICAgIHRvZG9zLnB1c2godG9kbyk7XG4gICAgICB9XG4gIFxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcbiAgXG4gICAgICBlLnRhcmdldC5yZXNldCgpOyAvL3RoaXMgcGFydCBpcyBpbXBvcnRhbnQgYmVjYXVzZSBpdCBjbGVhcnMgdGhlIGZvcm0gd2hpY2ggd2Ugc3RvcHBlZCB3aGVuIHVzaW5nIGUucHJldmVudERlZmF1bHQoKTtcbiAgXG4gICAgICBkaXNwbGF5VG9kb3ModG9kb3MpOyAvLyB0b2RvcyBhcmUgZGlzcGxheWVkIGFmdGVyIGZvcm0gaXMgc3VibWl0dGVkXG4gICAgfSk7XG4gIFxuICAgIGRpc3BsYXlUb2Rvcyh0b2Rvcyk7IC8vdG9kb3MgYXJlIGRpc3BsYXllZCBhcyBzb29uIGFzIHRoZSBwYWdlIGlzIGxvYWRlZFxuICB9KTtcbiAgXG4gIGZ1bmN0aW9uIGRpc3BsYXlUb2Rvcyh0b2Rvcykge1xuICAgIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tbGlzdCcpO1xuICBcbiAgICB0b2RvTGlzdC5pbm5lckhUTUwgPSAnJztcbiAgXG4gICAgdG9kb3NcbiAgICAuZmlsdGVyKCh0b2RvKSA9PiAhdG9kby5kZWxldGVkKVxuICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gYi5jcmVhdGVEYXRlIC0gYS5jcmVhdGVEYXRlO1xuICAgIH0pXG4gICAgLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIGNvbnN0IHRvZG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgICAgdG9kb0l0ZW0uY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtJyk7XG4gIFxuICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnN0IGFjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBcbiAgICAgIGlucHV0LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgaW5wdXQuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdidWJibGUnKTtcbiAgXG4gICAgICBpZiAodG9kby5jYXRlZ29yeSA9PSdwZXJzb25hbCcpIHtcbiAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdwZXJzb25hbCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdidXNpbmVzcycpO1xuICAgICAgfVxuICBcbiAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgndG9kby1jb250ZW50Jyk7XG4gICAgICBhY3Rpb25zLmNsYXNzTGlzdC5hZGQoJ2FjdGlvbnMnKTtcbiAgICAgIGVkaXQuY2xhc3NMaXN0LmFkZCgnZWRpdCcpO1xuICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpO1xuICAgICAgY29udGVudC5pbm5lckhUTUwgPSBgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9JyR7dG9kby5jb250ZW50fSdyZWFkb25seT5gO1xuICAgICAgZWRpdC5pbm5lckhUTUwgPSAnRWRpdCc7XG4gICAgICBkZWxldGVCdXR0b24uaW5uZXJIVE1MID0gJ0RlbGV0ZSc7XG4gIFxuICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGVkaXQpO1xuICAgICAgYWN0aW9ucy5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICBcbiAgICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQoYWN0aW9ucyk7XG4gIFxuICAgICAgdG9kb0xpc3QuYXBwZW5kKHRvZG9JdGVtKTtcbiAgXG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHRvZG8uZG9uZSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XG4gICAgICBcbiAgICAgICAgaWYgKHRvZG8uZG9uZSkge1xuICAgICAgICAgIHRvZG9JdGVtLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0b2RvSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdkb25lJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0LnJlbW92ZUF0dHJpYnV0ZSgncmVhZG9ubHknKTtcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIChlKSA9PiB7XG4gICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdyZWFkb25seScsIHRydWUpO1xuICAgICAgICAgIHRvZG8uY29udGVudCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBcbiAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHRvZG8uZGVsZXRlZCA9IHRydWU7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XG4gICAgICAgIGRpc3BsYXlUb2Rvcyh0b2Rvcyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBsb2FkSlMgfSBmcm9tIFwiLi9pbml0aWFsUGFnZUxvYWRcIjtcblxubG9hZEpTKClcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==