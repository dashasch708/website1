const f = document.getElementById('opros')

f.onsubmit = async function getData(e) {
  e.preventDefault()
  const url = 'http://localhost:3000/test'
  let formData = {
    name: document.getElementById('name').value,
    age: document.getElementById('age').value,
    mark: document.getElementById('mark').value,
    email: document.getElementById('email').value,
    yes: document.getElementById('yes').checked
      ? (ch = 'Да')
      : (сh = 'Нет'),
  }

  // alert(
  //   'Ваше имя: ' +
  //     name +
  //     '\n' +
  //     'Ваш возраст: ' +
  //     age +
  //     '\n' +
  //     'Ваша оценка: ' +
  //     mark +
  //     '\n' +
  //     'Ваш email: ' +
  //     email +
  //     '\n' +
  //     'Ваш ответ: ' +
  //     ch
  // )

  let response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })

  let result = await response.json()
  alert(JSON.stringify(result))
}
