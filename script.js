(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const cw4 = document.getElementById('cw4')
  let select = document.getElementById('select_cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
            let html = '<ol>';
            array.forEach(element => {
                html += '<li>' + element.title +
                    '<ul><li>' + element.body + '</li></ul>' +
                    '</li>';
            });

            html += '</ol>';
            answer.innerHTML = html;
      })
     
  })

  cw2.addEventListener("click", function () {
    answer.innerHTML = 'Loading...'
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
            let html = '<ol>';
            array.forEach(element => {
                html += '<li>' + element.title +
                    '<ul><li>' + element.body + '</li></ul>' +
                    '</li>';
            });

            html += '</ol>';
            answer.innerHTML = html;
      })
    }, 1234);
  })

  cw3.addEventListener("click", function () {
    let selectValue = select.value;
    fetch(`https://jsonplaceholder.typicode.com/posts/${selectValue}`)
      .then(response => response.json())
      .then(array => {
            answer.innerHTML = `<ul><li>${array['title']}<ul><li>${array['body']}</li></ul></li></ul>`;
      })
  })

  cw4.addEventListener('click', function() {

    // Hardtyping id here is a bad idea but it will do for this exercise
    const array = {
      userId: 1,
      id: 101,
      title: "Lewy sierpowy",
      body: "Prawy prosty"
    };

    answer.innerHTML = `Processing…`;

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: "POST",
      body: JSON.stringify(array)
      }).then(data => {
        answer.innerHTML = `Dodano nowy post o ID = ${array['id']}`;
      })
  });

})();
