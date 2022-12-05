'use strict'
const container =document.querySelector('.container')
const body = document.querySelector('body')
const elRestartBtn = document.querySelector('.game-over')
const elVictory = document.querySelector('h1')

var gQuests, gCurrQuestIdx = 0, gNextId = 1

function initGame() {
    body.style.backgroundColor = 'blueviolet'
    elRestartBtn.style.display = 'none'
    elVictory.style.display = 'none'
    gCurrQuestIdx = 0
    gNextId = 1
    gQuests = createQuests()
    renderQuest()
}

function createQuests() {
    var quests = [
        { id: gNextId++, opts: ['Israel', 'USA'], currectOptIndex: 0 },
        { id: gNextId++, opts: ['USA', 'Canada'], currectOptIndex: 1 },
        { id: gNextId++, opts: ['Brazil', 'France'], currectOptIndex: 1 }
    ]
    return quests
}

function renderQuest() {
    container.style.display = 'block'
    const elAnswer = document.querySelector('.answer-btns')
    const elQuestion = document.querySelector('.question')
    var imageHtml = ''
    var strHtml = ''
    imageHtml += `<img src= "images/${gQuests[gCurrQuestIdx].id}.jpg">`

    const opts = gQuests[gCurrQuestIdx].opts
    for (var i = 0; i < opts.length; i++) {
        strHtml += `<button onclick="checkAnswer(this, ${i})" class="answer">${opts[i]}</button>`
    }
    elQuestion.innerHTML = imageHtml
    elAnswer.innerHTML = strHtml
}

function checkAnswer(elBtn, idxI) {
    if (gQuests[gCurrQuestIdx].currectOptIndex !== idxI) {
        container.style.display = 'none'
        elRestartBtn.style.display = 'block'
        body.style.backgroundColor = 'red'
        return
    }
    
    gCurrQuestIdx++
    body.style.backgroundColor = 'green'
    if(gCurrQuestIdx === gQuests.length) {
        container.style.display = 'none'
        elRestartBtn.style.display = 'block'
        elVictory.style.display = 'block'
        return
    }
    renderQuest()
}

function onRestartGame() {
    gQuests = createQuests()
    initGame()
}
