# One Question A Day
-------------------------------------------------------
# [Click to view the app](https://unit2summer.herokuapp.com/)
-------------------------------------------------------
# Motivation: 
  I am a tarot reader/life reader/, and I have psychic abilities. Tarot cards is the first tool I learned to use, and I think it's a great starting point for people who are interested in reading or spirituality in general. 

  There are so many tarot card decks on the market today. Generally, a spiritual teacher would design a deck of card with a theme, and he/she would hire an visual artist to render the cards. A deck can have 44, 52, or 90 cards, for example; that is totally up to the designer.

  The Rider-Waite Tarot Deck is the most classical deck, since it encompasses all elements that a reading needs to take into consideration, and its usage is very versatile. For example, 


-------------------------------------------------------
# Decription: 
- In this App, the user will think about a question, either a binary question or an open-ended question, or a general concern, and type it in in the text box. 
- After the user clicks shuffles, he/she will get three cards along with the name of the card, the number of the card, and the type of Arcana. 
- Then, the user will think about what messages the three cards may be trying to convey, or how he/she feels after seeing the three cards, and write comments in the comments section, and click "Save".
- In the "My Past Readings" section, the user can go in, click on his past readings, and edit or delete the reading. 

-------------------------------------------------------

# Technologies Used: 
- JS, HTML, CSS, MongoDB, Express, Node

-------------------------------------------------------
 # Screenshots:

![Home Page](./screenshots/dark-mode.png)
![GetANewReading](./screenshots/light-mode.png)
![PastReadingIndex](./screenshots/win-message.png)
![PastReadingEdit](./screenshots/win-message.png)
-------------------------------------------------------
# Directory Structure:

- HTML:
  - Create 2 headers for the game's name and displayed messages
  - Create a container to display a timer and a dark/light mode button
  - Create a gameboard with 20 images and assign back-side/front-side to them
  - Create a restart button

- JS:
  - Define variables/state
    - firstCard = the first card that a player clicks on
    - secondCard = the second card that a player clicks on
    - delay = a time lapse when a card flips back 
    - win = if the player wins the game
    - countMatch = counts how many matches the plays have already
  - Define Cached Element References
    - restartBtn = the restart button
    - lightDarkBtn = the light/dark mode switch
    - message = a message that displays if the player wins or loses
    - cards = the images/cards on the game board
  - Define Event Listeners
    - click to flip the card
    - click to restart the game
    - click to switch between light/dark mode
  - Define Functions
    - Create a function to flip the card
      - determine if it's the first or second card
      - counts the number of matches if there is a match
      - the cards flip back to their original state if it's not a match
      - restart all the functions when a restart button is clicked
      - determine the win condition
    - Create a function for the light/dark mode

- CSS
  - Should clip over the cards
  - Format the buttons and headers

-------------------------------------------------------
# Future Improvements:
- A page with all 78 cards with descriptions and interpretations.
- Have a function that will allow inverted cards to show, as meanings of inverted cards are different. 
  
