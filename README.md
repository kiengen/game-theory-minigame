# game-theory-minigame
## Background
Sophomore year of high school, my CS class did a fun object-oriented programming project where we each made prisoner's dilemma style "bots" that would compete against one another in an iterative tournament to see which student could devise the best strategy. It was inspired by [this](https://www.lesswrong.com/s/GcZCMu7ZYHpJCh5bx) "DarwinGame" tournament hosted on the community forum LessWrong.

The idea was, the game would start with 100 instances of each DarwinBot. Each DarwinBot would be pitted against another DarwinBot (possibly a member of its own class) and a "round" would start. Each round, both bots would play for some number of turns between 50 and 100, and each turn both bot would submit a number 0 through 5. If the sum of both numbers was less than or equal to five, the number submitted by both bots would be added to its score. If it was over, neither would get any points for that turn. At the end of the round, the collective points earned by each instance of a DarwinBot class would be totalled, and that number -- as a percentage of the total points earned by any bots -- would represent how many instances of that type of bot should be created in the next round.

Accordingly, self-cooperation is equally as important as being able to work with (or take advantage of) other bots.

## What is this?
Fast-forward to senior year of high school. For English class, I had to make a Google Site featuring some core memories from each year of high school. For Sophomore Year, I chose to talk about that project. To supplement that page on my website, I made an HTML applet that explained the idea of the DarwinGame, and then allowed users to make their own bots using block code.

Since it was going to be embedded in Google Sites, it had to be written completely in HTML. That HTML file can be found [in this repository](old.html). But, I decided I wanted to make a more polished version of this old code. And that is how this website began!

## Acknowledgements
I drew a lot of inspiration from a similar web app called [The Evolution of Trust](https://ncase.me/trust/) by Nicky Case.
