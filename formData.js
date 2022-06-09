const f = document.getElementById('opros')

f.onsubmit = function getData(e) {
  e.preventDefault()
  const name = document.getElementById('name').value
  const age = document.getElementById('age').value
  const mark = document.getElementById('mark').value
  const email = document.getElementById('email').value
  const yes = document.getElementById('yes')
  let ch = yes.checked ? 'Да' : 'Нет'

  alert(
    'Ваше имя: ' +
      name +
      '\n' +
      'Ваш возраст: ' +
      age +
      '\n' +
      'Ваша оценка: ' +
      mark +
      '\n' +
      'Ваш email: ' +
      email +
      '\n' +
      'Ваш ответ: ' +
      ch
  )
}
