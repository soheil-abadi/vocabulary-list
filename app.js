document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('vocabularyForm')
  const wordInput = document.getElementById('wordInput')
  const clearbtn = document.getElementById('clearButton')
  const texdes = document.getElementById('texdes')
  const ul = document.querySelector('.ul')
  document.addEventListener('keyup', e => {
    if (e.keyCode == 40) {
      texdes.focus()
    }
  })
  loadVocabulary()
  wordInput.focus()
  // submit your des and vocab then it will creat your your li then send data to local storage
  submit()
  function submit() {
    const word = wordInput.value.trim()
    const description = form.description.value.trim()
    if (description !== '' && word !== '') {
      let listItem = document.createElement('li')
      listItem.innerHTML = `
        ${word}
        <p>${description}</p>

      `
      ul.appendChild(listItem)
      saveVocabulary(word, description)
      form.reset()
      wordInput.focus()
    }
  }
  form.addEventListener('submit', event => {
    event.preventDefault()
    submit()
  })
  texdes.addEventListener('keyup', e => {
    console.log(e)
    if (e.keyCode == 13) {
      submit()
    }
  })
  // recive your data and save it in local storage
  function saveVocabulary(word, description) {
    if (description !== '' && word !== '') {
      const existingVocabulary =
        JSON.parse(localStorage.getItem('vocabulary')) || []
      const existingSave = JSON.parse(localStorage.getItem('save')) || []
      existingVocabulary.push({ word, description })
      existingSave.push({ word, description })
      localStorage.setItem('vocabulary', JSON.stringify(existingVocabulary))
      localStorage.setItem('save', JSON.stringify(existingSave))
    }
  }
  // load existing vocab from local storage
  function loadVocabulary() {
    const existingVocabulary =
      JSON.parse(localStorage.getItem('vocabulary')) || []
    existingVocabulary.forEach(entry => {
      if (entry.word && entry.description) {
        let listItem = document.createElement('li')
        listItem.innerHTML = `
          ${entry.word}
          <p>${entry.description}</p>
        `
        ul.appendChild(listItem)
      }
    })
  }
  // clean all your list
  clearbtn.addEventListener('click', () => {
    localStorage.removeItem('vocabulary')
    ul.innerHTML = ''
  })
})
