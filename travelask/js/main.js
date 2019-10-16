function chatOnLoad() {
    if (localStorage.getItem('messages') == null) {
        localStorage.setItem('messages', JSON.stringify([]));
    } else {
        var chatsWindows = document.getElementsByClassName('chat__window');
        var messagesArray = JSON.parse(localStorage.getItem('messages'));
        for (var a = 0; a < messagesArray.length; a++) {
               for (let i = 0; i < chatsWindows.length; i++) {
        var messageWindow = document.createElement('div');
        messageWindow.className = 'messageWindow';
        chatsWindows[i].appendChild(messageWindow);
        var messageWindowText = document.createElement('div');
        messageWindowText.className = 'message__window__text';
        messageWindow.appendChild(messageWindowText);
        messageWindowText.innerHTML = messagesArray[a].messageText;
        var chatImage = document.createElement('img');
        if (messagesArray[a].messageAuthor == 'send__button-id-2') {
            messageWindow.classList.add('userMessageWindow');
            chatImage.src = document.getElementsByClassName('user__image')[0].getAttribute('src');
            chatImage.alt = document.getElementsByClassName('user__image')[0].getAttribute('alt');
        } else {
            chatImage.src = document.getElementsByClassName('admin__image')[0].getAttribute('src');
            chatImage.alt = document.getElementsByClassName('admin__image')[0].getAttribute('alt');
        }
        messageWindow.appendChild(chatImage);
        chatsWindows[i].scrollTop = chatsWindows[i].scrollHeight;
    }

    }
}


}

function sendMessage(e) {
    e.preventDefault();
    if(document.getElementById(this.id.toString() + "_textarea").value.replace(/^\s+|\s+$/g, '') === '') {
        return 0;
    }
    var chatsWindows = document.getElementsByClassName('chat__window');
    var messagesInfo = JSON.parse(localStorage.getItem('messages'));
    messagesInfo.push({'messageAuthor':this.id.toString(), 'messageText': document.getElementById(this.id.toString() + "_textarea").value});
    localStorage.setItem('messages', JSON.stringify(messagesInfo));
    for (let i = 0; i < chatsWindows.length; i++) {
        var messageWindow = document.createElement('div');
        messageWindow.className = 'messageWindow';
        chatsWindows[i].appendChild(messageWindow);
        var messageWindowText = document.createElement('div');
        messageWindowText.className = 'message__window__text';
        messageWindow.appendChild(messageWindowText);
        messageWindowText.innerHTML = document.getElementById(this.id.toString() + "_textarea").value;
        var chatImage = document.createElement('img');
        if (this.id == 'send__button-id-2') {
            messageWindow.classList.add('userMessageWindow');
            chatImage.src = document.getElementsByClassName('user__image')[0].getAttribute('src');
            chatImage.alt = document.getElementsByClassName('user__image')[0].getAttribute('alt');
        } else {
            chatImage.src = document.getElementsByClassName('admin__image')[0].getAttribute('src');
            chatImage.alt = document.getElementsByClassName('admin__image')[0].getAttribute('alt');
        }
        messageWindow.appendChild(chatImage);
        chatsWindows[i].scrollTop = chatsWindows[i].scrollHeight;
    }   
}


/*var reviwesArticleMargin = 8;*/
function addOnclickToArticleImages() {
  let reviwesArticleImages = document.getElementsByClassName('reviews__article-images__child');
  for (let i = 0; i < reviwesArticleImages.length; i++) {
        reviwesArticleImages[i].addEventListener('click', togglePopUp);
     }
     let carouselSwitch = document.getElementsByClassName('carousel__switch');
     for(let i = 0; i < carouselSwitch.length; i++) {
        carouselSwitch[i].addEventListener('click', slideArticles);
     }
/*     let reviwesArticles =  document.getElementsByClassName('reviews__article');
    
    let reviwesArticlesSectionWidth = (reviwesArticles[0].offsetWidth + reviwesArticleMargin)*reviwesArticles.length;
    document.getElementById('reviews__section').style.width = reviwesArticlesSectionWidth + 'px';*/
  }


function togglePopUp() {
  var popupElements = document.getElementsByClassName('popup__element');
  for(let i = 0; i < popupElements.length; i++) {
    popupElements[i].classList.toggle('semantic');
  }

 if (this.id === 'hide__popup') {
    return 0;
 }
   document.getElementById('popUpImage').src = this.children[0].getAttribute('src');
   localStorage.setItem('popup', JSON.stringify(this.id)); 

}

function switchToNextRewiewsImage() {
 let containerOfCurrentImage =  document.getElementById(JSON.parse(localStorage.getItem('popup')));
 let nextSwitch = document.getElementById('next__reviews__image');
 let previousSwitch = document.getElementById('previous__reviews__image');
 previousSwitch.classList.remove('non__active__switch');
 if (containerOfCurrentImage.nextElementSibling == null) {
   nextSwitch.classList.add('non__active__switch');
   return 0;
 }
 document.getElementById('popUpImage').src = containerOfCurrentImage.nextElementSibling.children[0].getAttribute('src');
 localStorage.setItem('popup', JSON.stringify(containerOfCurrentImage.nextElementSibling.id));    
 
}

function switchToPreviousRewiewsImage() {
let containerOfCurrentImage =  document.getElementById(JSON.parse(localStorage.getItem('popup')));
let nextSwitch = document.getElementById('next__reviews__image');
let previousSwitch = document.getElementById('previous__reviews__image');
 nextSwitch.classList.remove('non__active__switch');
 if (containerOfCurrentImage.previousElementSibling == null) {
   previousSwitch.classList.add('non__active__switch');
   return 0;
 }
 document.getElementById('popUpImage').src = containerOfCurrentImage.previousElementSibling.children[0].getAttribute('src');
 localStorage.setItem('popup', JSON.stringify(containerOfCurrentImage.previousElementSibling.id));       
}


window.addEventListener('load', chatOnLoad);
window.addEventListener('load', addOnclickToArticleImages);
document.getElementById('hide__popup').addEventListener('click', togglePopUp);
document.getElementById('send__button-id').addEventListener('click', sendMessage);
document.getElementById('next__reviews__image').addEventListener('click',switchToNextRewiewsImage);
document.getElementById('previous__reviews__image').addEventListener('click',switchToPreviousRewiewsImage);
document.getElementById('send__button-id-2').addEventListener('click', sendMessage);


