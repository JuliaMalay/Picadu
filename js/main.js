// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle')
// Создаем переменную, в которую положим меню
let menu = document.querySelector('.sidebar')
// отслеживаем клик по кнопке меню и запускаем функцию
menuToggle.addEventListener('click', function (event) {
  // отменяем стандартное поведение ссылки
  event.preventDefault()
  // вешаем класс на меню, когда кликнули по кнопке меню
  menu.classList.toggle('visible')
})

const loginElem = document.querySelector('.login')
const loginForm = document.querySelector('.login-form')
const emailInput = document.querySelector('.login-email')
const passwordInput = document.querySelector('.login-password')
const loginSignup = document.querySelector('.login-signup')

const userElem = document.querySelector('.user')
const userNameElem = document.querySelector('.user-name')

const listUsers = [
  {
    id: '01',
    email: 'pro100_-yulia@mail.ru',
    password: '0123456789',
    displayName: 'JuliaM',
  },
  {
    id: '02',
    email: 'roman-kos@mail.ru',
    password: '9876543210',
    displayName: 'RomanK',
  },
  {
    id: '03',
    email: 'robertzem@mail.ru',
    password: 'robrob',
    displayName: 'RobertZem',
  },
]

const setUsers = {
  user: null,
  logIn(email, password, handler) {
    const user = this.getUser(email)
    if (user && user.password === password) {
      this.autрorizedUser(user)
      handler()
    } else {
      alert('Пользователь с такими данными не найден')
    }
  },
  logOut() {
    console.log('LogOut')
  },
  signUp(email, password, handler) {
    if (!email.trim() || !password.trim()) {
      alert('Введите данные')
      return
    }

    if (!this.getUser(email)) {
      const user = {email, password, displayName: email}
      listUsers.push(user)
      this.autрorizedUser(user)
      handler()
    } else {
      alert('Пользователь с таким email уже зарегистрирован')
    }
  },
  getUser(email) {
    return listUsers.find((item) => item.email === email)
  },
  autрorizedUser(user) {
    this.user = user
  },
}

const toogleAuthDom = () => {
  const user = setUsers.user
  console.log('user: ', user)

  if (user) {
    loginElem.style.display = 'none'
    userElem.style.display = ''
    userNameElem.textContent = user.displayName
  } else {
    loginElem.style.display = ''
    userElem.style.display = 'none'
  }
}

loginForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const emailValue = emailInput.value
  const passwordValue = passwordInput.value

  setUsers.logIn(emailValue, passwordValue, toogleAuthDom)
  loginForm.reset()
})

loginSignup.addEventListener('click', (event) => {
  event.preventDefault()

  const emailValue = emailInput.value
  const passwordValue = passwordInput.value

  setUsers.signUp(emailValue, passwordValue, toogleAuthDom)
  loginForm.reset()
})
toogleAuthDom()
