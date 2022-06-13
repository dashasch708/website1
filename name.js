const t = document.getElementById('helloTxt').textContent
      const btn = document.getElementById('nameU')
      btn.onsubmit = function getName(e) {
        e.preventDefault()
        const currentUserName = document.getElementById('nameUser').value
        document.getElementById('helloTxt').textContent = "Здравстуйте, " + currentUserName + ", добро пожаловать!"
      }