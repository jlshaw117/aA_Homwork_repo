window.setTimeout(function () {
  alert('HAMMER TIME!');
}, 5000);

function hammerTime (time) {
  window.setTimeout( () => {
    alert(`${time} is hammer time!`);
  });
}
