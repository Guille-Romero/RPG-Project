// Character Selection--------
const characterSelectionScreen = {
    init: function (){

        console.log('script: loaded!');

        characterSelectionScreen.createKnight ();

        characterSelectionScreen.createBlackMage();

        characterSelectionScreen.createHunter();

        characterSelectionScreen.createWarrior();

    // Character Selection handler------------------------
        const body = document.querySelector('body');
        const characters = document.querySelectorAll('.main-class');

        console.log(characters);
        for(let character of characters){
        character.addEventListener('click', handleCharacterSelection);
        };

        function handleCharacterSelection (event) {

            //Handle current class selection------------
            let currentClassTarget = event.currentTarget;
            const hiddenCharacters = document.querySelectorAll('.character');
        
            for (let hiddenCharacter of hiddenCharacters){
                hiddenCharacter.classList.add('character-hide');
                select = currentClassTarget.querySelector('a');
                select.classList.remove('character-hide');
                };

            // Get current class type to recover class stats--
            event.currentTarget.classList.add('character-selected');
            let currentClass = currentClassTarget.querySelector('img').alt;

            // Show stats for current selection--------
            if (currentClass == 'knight'){
                statsDiv = document.createElement('div');
                statsDiv.classList.add('start-stats');
                body.appendChild(statsDiv)
                for(const stat in knight){
                    showStats = document.createElement('p');
                    showStats.textContent = stat+": "+knight[stat]+'\n';
                    statsDiv.appendChild(showStats);
                };
                    
            }
            else if (currentClass == 'black-mage'){
                statsDiv = document.createElement('div');
                statsDiv.classList.add('start-stats');
                body.appendChild(statsDiv)
                for(const stat in blackMage){
                    showStats = document.createElement('p');
                    showStats.textContent = stat+": "+blackMage[stat]+'\n';
                    statsDiv.appendChild(showStats);
                };
            }
            else if (currentClass == 'hunter'){
                statsDiv = document.createElement('div');
                statsDiv.classList.add('start-stats');
                body.appendChild(statsDiv)
                for(const stat in hunter){
                    showStats = document.createElement('p');
                    showStats.textContent = stat+": "+hunter[stat]+'\n';
                    statsDiv.appendChild(showStats);
                };
            }
            else if (currentClass == 'warrior'){
                statsDiv = document.createElement('div');
                statsDiv.classList.add('start-stats');
                body.appendChild(statsDiv)
                for(const stat in warrior){
                    showStats = document.createElement('p');
                    showStats.textContent = stat+": "+warrior[stat]+'\n';
                    statsDiv.appendChild(showStats);
                };
            }

            console.log(showStats);

            //return button --------------
            const buttonSet = document.querySelector('.start-stats');
            const createHomeButton = document.createElement('button');
            
            
            createHomeButton.classList.add('home');
            createHomeButton.textContent = 'Return';
            buttonSet.appendChild(createHomeButton);

            homeButton = document.querySelector('.home');
            homeButton.addEventListener('click', handleReturnHome);

            function handleReturnHome (){
                location = 'selection.html'
             };

            // Start button --------
            const createStartButton = document.createElement('button');

            createStartButton.classList.add('start');
            createStartButton.textContent = 'Start';
            buttonSet.appendChild(createStartButton)

            startButton = document.querySelector('.start');
            startButton.addEventListener('click', handleStart);

            function handleStart(){
                localStorage.setItem('Class', currentClass);
                location = 'start.html';
            };
        };
    }, 
    // Knight

    createKnight: function (){
        const createKnight = document.getElementById('knight');
        const linkKnight = document.createElement('a');
        linkKnight.href = '#';
        linkKnight.classList.add('knight');
        linkKnight.classList.add('character');
        linkKnight.textContent = 'Knight';
        createKnight.appendChild(linkKnight);

        const knightSelector = document.querySelector('.knight');
        const imgKnight = document.createElement('img');
        imgKnight.alt = 'knight';
        imgKnight.src = 'img/knight.jpg';
        knightSelector.appendChild(imgKnight);
    },

    // Black Mage

    createBlackMage: function(){
        const createBlackMage = document.getElementById('black-mage');
        const linkBlackMage = document.createElement('a');
        linkBlackMage.href = '#';
        linkBlackMage.classList.add('black-mage');
        linkBlackMage.classList.add('character');
        linkBlackMage.textContent = 'Black Mage';
        createBlackMage.appendChild(linkBlackMage);

        const mageSelector = document.querySelector('.black-mage');
        const imgBlackMage = document.createElement('img');
        imgBlackMage.alt = 'black-mage';
        imgBlackMage.src = 'img/black-mage.jpg';
        mageSelector.appendChild(imgBlackMage);
    },

    // Hunter

    createHunter: function(){
        const createHunter = document.getElementById('hunter');
        const linkHunter = document.createElement('a');
        linkHunter.href = '#';
        linkHunter.classList.add('hunter');
        linkHunter.classList.add('character');
        linkHunter.textContent = 'Hunter';
        createHunter.appendChild(linkHunter);

        const hunterSelector = document.querySelector('.hunter');
        const imgHunter = document.createElement('img');
        imgHunter.alt = 'hunter';
        imgHunter.src = 'img/hunter.jpg';
        hunterSelector.appendChild(imgHunter);
    },

    // Warrior

    createWarrior: function(){
        const createWarrior = document.getElementById('warrior');
        const linkWarrior = document.createElement('a');
        linkWarrior.href = '#';
        linkWarrior.classList.add('warrior');
        linkWarrior.classList.add('character');
        linkWarrior.textContent = 'Warrior';
        createWarrior.appendChild(linkWarrior);

        const warriorSelector = document.querySelector('.warrior');
        const imgWarrior = document.createElement('img');
        imgWarrior.alt = 'warrior';
        imgWarrior.src = 'img/warrior.jpg';
        warriorSelector.appendChild(imgWarrior);
    }
};

document.addEventListener('DOMContentLoaded', characterSelectionScreen.init());