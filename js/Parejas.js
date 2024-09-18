  const cards = [
        { id: 'luffy1', imgFront: '../../becajulio2024/images/luffy1.webp', imgBack: '../../becajulio2024/images/back.jpg' },
        { id: 'luffy2', imgFront: '../../becajulio2024/images/luffy1.webp', imgBack: '../../becajulio2024/images/back.jpg' },
        { id: 'zoro1', imgFront: '../../becajulio2024/images/zoro.webp', imgBack: '../../becajulio2024/images/back.jpg' },
        { id: 'zoro2', imgFront: '../../becajulio2024/images/zoro.webp', imgBack: '../../becajulio2024/images/back.jpg' },
        { id: 'nami1', imgFront: '../../becajulio2024/images/nami.webp', imgBack: '../../becajulio2024/images/back.jpg' },
        { id: 'nami2', imgFront: '../../becajulio2024/images/nami.webp', imgBack: '../../becajulio2024/images/back.jpg' },
        { id: 'ussop1', imgFront: '../../becajulio2024/images/ussop.webp', imgBack: '../../becajulio2024/images/back.jpg' },
        { id: 'ussop2', imgFront: '../../becajulio2024/images/ussop.webp', imgBack: '../../becajulio2024/images/back.jpg' },
        { id: 'sanji1', imgFront: '../../becajulio2024/images/sanji.webp', imgBack: '../../becajulio2024/images/back.jpg' },
        { id: 'sanji2', imgFront: '../../becajulio2024/images/sanji.webp', imgBack: '../../becajulio2024/images/back.jpg' },
        { id: 'chopper1', imgFront: '../../becajulio2024/images/chopper.webp', imgBack: '../../becajulio2024/images/back.jpg' },
        { id: 'chopper2', imgFront: '../../becajulio2024/images/chopper.webp', imgBack: '../../becajulio2024/images/back.jpg' },
        { id: 'robin1', imgFront: '../../becajulio2024/images/robin.webp', imgBack: '../../becajulio2024/images/back.jpg' },
        { id: 'robin2', imgFront: '../../becajulio2024/images/robin.webp', imgBack: '../../becajulio2024/images/back.jpg' },
        { id: 'franky1', imgFront: '../../becajulio2024/images/franky.webp', imgBack: '../../becajulio2024/images/back.jpg' },
        { id: 'franky2', imgFront: '../../becajulio2024/images/franky.webp', imgBack: '../../becajulio2024/images/back.jpg' },
        { id: 'brook1', imgFront: '../../becajulio2024/images/brook.webp', imgBack: '../../becajulio2024/images/back.jpg' },
        { id: 'brook2', imgFront: '../../becajulio2024/images/brook.webp', imgBack: '../../becajulio2024/images/back.jpg' },
        { id: 'jinbe1', imgFront: '../../becajulio2024/images/jinbe.webp', imgBack: '../../becajulio2024/images/back.jpg' },
        { id: 'jinbe2', imgFront: '../../becajulio2024/images/jinbe.webp', imgBack: '../../becajulio2024/images/back.jpg' }
      ];

      let player1; 
      let player2; 
      
      let flippedCards = []; 
      let resolvedCards = []; 
      

    function turnUp(element) {
        if (flippedCards.length < 2) {
            checkFlippedAndPush(element); 
        }
        
        if (flippedCards.length === 2) {
            setTimeout(compareCards, 500); 
           

        }     
    }

    function compareCards(){
        if(flippedCards[0] === flippedCards[1]){
            console.log("Son iguales"); 
            disabledCards(); 
            addCardsToResolved(); 
        }else{
            console.log("no son iguales"); 
           
            resetCardsFlipped(); 
        }

        console.log(flippedCards);
        flippedCards = []; 
    }

    function resetCardsFlipped(){
        const cards = document.querySelectorAll('.flipped');
        cards.forEach(card => {
            if(!card.classList.contains('blocked')){
                setTimeout(() => {
                    card.classList.remove('show-back', 'flipped');
                    }, 500); 
            }
            
        });
    }

    function disabledCards(){
        let cards = document.querySelectorAll('.flipped');
        console.log(cards); 
        cards.forEach(card => {
            card.style.pointerEvents = 'none'; 
            card.classList.add('blocked'); 
        });

    }

    function addCardsToResolved(){
        resolvedCards.push(flippedCards[0]); 
        resolvedCards.push(flippedCards[1]); 
        console.log(resolvedCards); 
        flippedCards = []; 
        console.log(flippedCards); 
    }

    function checkFlippedAndPush(element){
        if (element.classList.contains('flipped')) {
            return;
       }
   
        if (!element.classList.contains('show-back')) {
            element.classList.add('show-back'); 
            element.classList.add('flipped');  
            flippedCards.push(element.id.slice(0, -1)); 
            console.log(flippedCards); 
       }
    }

      function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]]; 
        }
        return array;
      }

      function generateCardHTML(cards) {
        const cardContainer = document.getElementById('card-container');
        cardContainer.innerHTML = ''; 
        cards.forEach(card => {
          const cardHTML = `
            <div class="col-3 gap-1 card" id="${card.id}" onclick="turnUp(this)">
              <img src="${card.imgFront}" class="img-thumbnail frontside" alt="">
              <img src="${card.imgBack}" class="img-thumbnail backside" alt="">
            </div>
          `;
          cardContainer.innerHTML += cardHTML; 
        });
      }

      const shuffledCards = shuffle(cards);
      generateCardHTML(shuffledCards);

