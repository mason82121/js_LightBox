"use strict";

$(function () {
  var mList = document.querySelector(".m-list");
  var modalBtn = document.querySelector(".modal-btn");
  var overlay = document.querySelector(".overlay");
  var modalBox = document.querySelector(".modal-box");
  var closeBtn = document.querySelector(".close-btn");
  var title = document.querySelector(".title");
  var prev = document.querySelector(".prev-btn");
  var next = document.querySelector(".next-btn");
  var li = document.querySelectorAll(".item");
  var picAll = document.querySelector(".pic-all");
  var currentNum = document.querySelector(".current-num");

  var imgPath = "images";
  var linkPath = "images/large";

  var currentIndex = 1;
  currentNum.textContent = 1;

  mList.addEventListener("click", modalHandler);
  prev.addEventListener("click", prevHandler);
  next.addEventListener("click", nextHandler);
  closeBtn.addEventListener("click", closeHandler);

  function modalHandler(e) {
    e.preventDefault();

    // 取得 window 視窗高度
    // let wdHeight = window.screen.height;

    if (e.target.nodeName == "IMG") {
      overlay.style.display = "block";
      modalBox.style.display = "flex";
      console.log("IMG");

      var num = Number(e.target.dataset.num);
      currentIndex = num;
      currentNum.textContent = num;

      var largePic = "<img src=\"" + linkPath + "/pic-" + currentIndex + ".jpg\" alt=\"\" class=\"large-pic\">";
      picAll.innerHTML = largePic;
    }
  }

  function closeHandler() {
    overlay.style.display = "none";
    modalBox.style.display = "none";
  }

  function nextHandler(e) {
    e.preventDefault();
    currentIndex++;
    currentNum.textContent = currentIndex;
    if (currentIndex > li.length) {
      currentIndex = 1;
      currentNum.textContent = currentIndex;
    }
    changeImg();
  }

  function prevHandler(e) {
    e.preventDefault();
    currentIndex--;
    currentNum.textContent = currentIndex;
    if (currentIndex < 1) {
      currentIndex = li.length;
      currentNum.textContent = currentIndex;
    }
    changeImg();
  }

  function changeImg() {
    var changePic = "<img src=\"" + linkPath + "/pic-" + currentIndex + ".jpg\" alt=\"\" class=\"large-pic\">";
    picAll.innerHTML = changePic;
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzIl0sIm5hbWVzIjpbIiQiLCJtTGlzdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1vZGFsQnRuIiwib3ZlcmxheSIsIm1vZGFsQm94IiwiY2xvc2VCdG4iLCJ0aXRsZSIsInByZXYiLCJuZXh0IiwibGkiLCJxdWVyeVNlbGVjdG9yQWxsIiwicGljQWxsIiwiY3VycmVudE51bSIsImltZ1BhdGgiLCJsaW5rUGF0aCIsImN1cnJlbnRJbmRleCIsInRleHRDb250ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vZGFsSGFuZGxlciIsInByZXZIYW5kbGVyIiwibmV4dEhhbmRsZXIiLCJjbG9zZUhhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJub2RlTmFtZSIsInN0eWxlIiwiZGlzcGxheSIsImNvbnNvbGUiLCJsb2ciLCJudW0iLCJOdW1iZXIiLCJkYXRhc2V0IiwibGFyZ2VQaWMiLCJpbm5lckhUTUwiLCJsZW5ndGgiLCJjaGFuZ2VJbWciLCJjaGFuZ2VQaWMiXSwibWFwcGluZ3MiOiI7O0FBQUFBLEVBQUUsWUFBVztBQUNYLE1BQUlDLFFBQVFDLFNBQVNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBWjtBQUNBLE1BQUlDLFdBQVdGLFNBQVNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBZjtBQUNBLE1BQUlFLFVBQVVILFNBQVNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBZDtBQUNBLE1BQUlHLFdBQVdKLFNBQVNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBZjtBQUNBLE1BQUlJLFdBQVdMLFNBQVNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBZjtBQUNBLE1BQUlLLFFBQVFOLFNBQVNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBWjtBQUNBLE1BQUlNLE9BQU9QLFNBQVNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBWDtBQUNBLE1BQUlPLE9BQU9SLFNBQVNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBWDtBQUNBLE1BQUlRLEtBQUtULFNBQVNVLGdCQUFULENBQTBCLE9BQTFCLENBQVQ7QUFDQSxNQUFJQyxTQUFTWCxTQUFTQyxhQUFULENBQXVCLFVBQXZCLENBQWI7QUFDQSxNQUFJVyxhQUFhWixTQUFTQyxhQUFULENBQXVCLGNBQXZCLENBQWpCOztBQUVBLE1BQUlZLFVBQVUsUUFBZDtBQUNBLE1BQUlDLFdBQVcsY0FBZjs7QUFFQSxNQUFJQyxlQUFlLENBQW5CO0FBQ0FILGFBQVdJLFdBQVgsR0FBeUIsQ0FBekI7O0FBRUFqQixRQUFNa0IsZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0NDLFlBQWhDO0FBQ0FYLE9BQUtVLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCRSxXQUEvQjtBQUNBWCxPQUFLUyxnQkFBTCxDQUFzQixPQUF0QixFQUErQkcsV0FBL0I7QUFDQWYsV0FBU1ksZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUNJLFlBQW5DOztBQUVBLFdBQVNILFlBQVQsQ0FBc0JJLENBQXRCLEVBQXlCO0FBQ3ZCQSxNQUFFQyxjQUFGOztBQUVBO0FBQ0E7O0FBRUEsUUFBSUQsRUFBRUUsTUFBRixDQUFTQyxRQUFULElBQXFCLEtBQXpCLEVBQWdDO0FBQzlCdEIsY0FBUXVCLEtBQVIsQ0FBY0MsT0FBZCxHQUF3QixPQUF4QjtBQUNBdkIsZUFBU3NCLEtBQVQsQ0FBZUMsT0FBZixHQUF5QixNQUF6QjtBQUNBQyxjQUFRQyxHQUFSLENBQVksS0FBWjs7QUFFQSxVQUFJQyxNQUFNQyxPQUFPVCxFQUFFRSxNQUFGLENBQVNRLE9BQVQsQ0FBaUJGLEdBQXhCLENBQVY7QUFDQWYscUJBQWVlLEdBQWY7QUFDQWxCLGlCQUFXSSxXQUFYLEdBQXlCYyxHQUF6Qjs7QUFFQSxVQUFJRywyQkFBd0JuQixRQUF4QixhQUF3Q0MsWUFBeEMseUNBQUo7QUFDQUosYUFBT3VCLFNBQVAsR0FBbUJELFFBQW5CO0FBQ0Q7QUFDRjs7QUFFRCxXQUFTWixZQUFULEdBQXdCO0FBQ3RCbEIsWUFBUXVCLEtBQVIsQ0FBY0MsT0FBZCxHQUF3QixNQUF4QjtBQUNBdkIsYUFBU3NCLEtBQVQsQ0FBZUMsT0FBZixHQUF5QixNQUF6QjtBQUNEOztBQUVELFdBQVNQLFdBQVQsQ0FBcUJFLENBQXJCLEVBQXdCO0FBQ3RCQSxNQUFFQyxjQUFGO0FBQ0FSO0FBQ0FILGVBQVdJLFdBQVgsR0FBeUJELFlBQXpCO0FBQ0EsUUFBSUEsZUFBZU4sR0FBRzBCLE1BQXRCLEVBQThCO0FBQzVCcEIscUJBQWUsQ0FBZjtBQUNBSCxpQkFBV0ksV0FBWCxHQUF5QkQsWUFBekI7QUFDRDtBQUNEcUI7QUFDRDs7QUFFRCxXQUFTakIsV0FBVCxDQUFxQkcsQ0FBckIsRUFBd0I7QUFDdEJBLE1BQUVDLGNBQUY7QUFDQVI7QUFDQUgsZUFBV0ksV0FBWCxHQUF5QkQsWUFBekI7QUFDQSxRQUFJQSxlQUFlLENBQW5CLEVBQXNCO0FBQ3BCQSxxQkFBZU4sR0FBRzBCLE1BQWxCO0FBQ0F2QixpQkFBV0ksV0FBWCxHQUF5QkQsWUFBekI7QUFDRDtBQUNEcUI7QUFDRDs7QUFFRCxXQUFTQSxTQUFULEdBQXFCO0FBQ25CLFFBQUlDLDRCQUF5QnZCLFFBQXpCLGFBQXlDQyxZQUF6Qyx5Q0FBSjtBQUNBSixXQUFPdUIsU0FBUCxHQUFtQkcsU0FBbkI7QUFDRDtBQUNGLENBM0VEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpIHtcclxuICBsZXQgbUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm0tbGlzdFwiKTtcclxuICBsZXQgbW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWJ0blwiKTtcclxuICBsZXQgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcclxuICBsZXQgbW9kYWxCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWJveFwiKTtcclxuICBsZXQgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLWJ0blwiKTtcclxuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlXCIpO1xyXG4gIGxldCBwcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmV2LWJ0blwiKTtcclxuICBsZXQgbmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV4dC1idG5cIik7XHJcbiAgbGV0IGxpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pdGVtXCIpO1xyXG4gIGxldCBwaWNBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBpYy1hbGxcIik7XHJcbiAgbGV0IGN1cnJlbnROdW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnQtbnVtXCIpO1xyXG5cclxuICBsZXQgaW1nUGF0aCA9IFwiaW1hZ2VzXCI7XHJcbiAgbGV0IGxpbmtQYXRoID0gXCJpbWFnZXMvbGFyZ2VcIjtcclxuXHJcbiAgbGV0IGN1cnJlbnRJbmRleCA9IDE7XHJcbiAgY3VycmVudE51bS50ZXh0Q29udGVudCA9IDE7XHJcblxyXG4gIG1MaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtb2RhbEhhbmRsZXIpO1xyXG4gIHByZXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByZXZIYW5kbGVyKTtcclxuICBuZXh0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXh0SGFuZGxlcik7XHJcbiAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlSGFuZGxlcik7XHJcblxyXG4gIGZ1bmN0aW9uIG1vZGFsSGFuZGxlcihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgLy8g5Y+W5b6XIHdpbmRvdyDoppbnqpfpq5jluqZcclxuICAgIC8vIGxldCB3ZEhlaWdodCA9IHdpbmRvdy5zY3JlZW4uaGVpZ2h0O1xyXG5cclxuICAgIGlmIChlLnRhcmdldC5ub2RlTmFtZSA9PSBcIklNR1wiKSB7XHJcbiAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgbW9kYWxCb3guc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIklNR1wiKTtcclxuXHJcbiAgICAgIGxldCBudW0gPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC5udW0pO1xyXG4gICAgICBjdXJyZW50SW5kZXggPSBudW07XHJcbiAgICAgIGN1cnJlbnROdW0udGV4dENvbnRlbnQgPSBudW07XHJcblxyXG4gICAgICBsZXQgbGFyZ2VQaWMgPSBgPGltZyBzcmM9XCIke2xpbmtQYXRofS9waWMtJHtjdXJyZW50SW5kZXh9LmpwZ1wiIGFsdD1cIlwiIGNsYXNzPVwibGFyZ2UtcGljXCI+YDtcclxuICAgICAgcGljQWxsLmlubmVySFRNTCA9IGxhcmdlUGljO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xvc2VIYW5kbGVyKCkge1xyXG4gICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBtb2RhbEJveC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBuZXh0SGFuZGxlcihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjdXJyZW50SW5kZXgrKztcclxuICAgIGN1cnJlbnROdW0udGV4dENvbnRlbnQgPSBjdXJyZW50SW5kZXg7XHJcbiAgICBpZiAoY3VycmVudEluZGV4ID4gbGkubGVuZ3RoKSB7XHJcbiAgICAgIGN1cnJlbnRJbmRleCA9IDE7XHJcbiAgICAgIGN1cnJlbnROdW0udGV4dENvbnRlbnQgPSBjdXJyZW50SW5kZXg7XHJcbiAgICB9XHJcbiAgICBjaGFuZ2VJbWcoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHByZXZIYW5kbGVyKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGN1cnJlbnRJbmRleC0tO1xyXG4gICAgY3VycmVudE51bS50ZXh0Q29udGVudCA9IGN1cnJlbnRJbmRleDtcclxuICAgIGlmIChjdXJyZW50SW5kZXggPCAxKSB7XHJcbiAgICAgIGN1cnJlbnRJbmRleCA9IGxpLmxlbmd0aDtcclxuICAgICAgY3VycmVudE51bS50ZXh0Q29udGVudCA9IGN1cnJlbnRJbmRleDtcclxuICAgIH1cclxuICAgIGNoYW5nZUltZygpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hhbmdlSW1nKCkge1xyXG4gICAgbGV0IGNoYW5nZVBpYyA9IGA8aW1nIHNyYz1cIiR7bGlua1BhdGh9L3BpYy0ke2N1cnJlbnRJbmRleH0uanBnXCIgYWx0PVwiXCIgY2xhc3M9XCJsYXJnZS1waWNcIj5gO1xyXG4gICAgcGljQWxsLmlubmVySFRNTCA9IGNoYW5nZVBpYztcclxuICB9XHJcbn0pO1xyXG4iXX0=