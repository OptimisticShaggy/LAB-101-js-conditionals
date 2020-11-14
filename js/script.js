const gameBtn = document.getElementById('gameStart')

gameBtn.addEventListener('click', function () {
  const userResults = document.getElementById('userResults')
  const falseAnswer = '<em>[Correct Answer Not Given]</em>'

  let userAge = window.prompt('Could you please tell me your age?').trim()
  userAge = parseInt(userAge)
  if (userAge === null || userAge === undefined || isNaN(userAge)) {
    userAge = falseAnswer
  }

  let userFeeling = window.prompt('Are you feeling [Good] or [Bad] at this current point in life?').trim().toLowerCase
  if (userFeeling === 'good') {
    userFeeling = 'I\'m glad to hear that things are going good!'
  } else if (userFeeling === 'bad') {
    userFeeling = 'I\'m sorry to hear that things are not going so good!'
  } else {
    userFeeling = falseAnswer
  }

  let compGame = window.confirm('Are you ready to play a game?')
  if (compGame === true) {
    compGame = window.prompt('Please pick a number between 0.1-1.').trim()
    parseInt(compGame)
    const ranNumber = Math.random()
    if (compGame === undefined || compGame == null || isNaN(compGame)) {
      compGame = falseAnswer
    } else if (compGame > ranNumber) {
      compGame = 'you beat the computer!'
    } else if (compGame < ranNumber) {
      compGame = 'you lost to the computer!'
    } else {
      compGame = 'tie!'
    }
  } else {
    compGame = falseAnswer
  }

  let websiteInput
  if (userAge === falseAnswer && userFeeling === falseAnswer && compGame === falseAnswer) {
    websiteInput = '<p><strong>You chose not to play the game, goodbye!</strong></p>'
  } else {
    websiteInput = '<hr><p class="font-weight-bold">Results:</p><p>You are ' + userAge + ' years old. Congratulations on making it this far in life! Especially with how you feel, ' + userFeeling + ' Let\'s see how you did against the computer if you did play, ' + compGame + '</p>'
  }

  userResults.innerHTML = websiteInput
})
