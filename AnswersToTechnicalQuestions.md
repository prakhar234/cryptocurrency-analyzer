### `How long did you soend on the assignment? What would you add to your solution if you had more time?`

I spent around 10 hours on this application including the unit test cases and deployement to heroku app. If I had more time and the api requests were not costly I would not have requested the cryptocurrency data in one go but I would have requested for the data as the user types in the search field. Once he has entered 3 characters atleast I would have made the api request showing a nice loader and would have added pagination as well to avoid scroll.

### `what was the most useful feature that was added to the latest version of your language of choice? Please include a snippet of code that shows how you have used it?`

Latest version of react is 17.01. JSX transformation is one of the cool feature introduced in this version. With this new update, you don't have to import react on every component for JSX to work and get compiled which is a cool feature. It may also result in improved bundle size depending how have you used it. It will also reduce the number of concepts you need to learn to use React in future. \

Code Snippet: \
import styles from "./CardList.module.css";\
import Card from "../Card/Card";\
import { CryptoCurrency } from "../../Services/CryptoCurrency/CryptoCurrency.model";\

interface CardListProps { \
 cardList: CryptoCurrency[]; \
} \

const CardList: React.FC<CardListProps> = ({cardList}) => { \
 const list = cardList.map(card => { \
 return <Card key={card.id} title={card.name} prices={card.prices} code={card.symbol} /> \
 }) \
 return ( \

 <div data-testid="card-list" className={styles.CardList}> \
 {list} \
 </div> \
 ) \
}; \

export default CardList; \

### `How would you track down a performance issue in production? Have you ever had to do this?`

There are different scenarios on tracking down the production issues. If it is a simple alignment issue, you can easily debug it by looking in to the component where the issue is coming up. if some functionality is breaking because of the data(network failure, false data, null data), you can inspect in chrome using the pretty print. if this does not solve your problem you can review the logs in the server which might tell you alot about the place or the scenario which is breaking the application and then you can try to replicate the same in your local. \

Replay user's action on your local to find out the issue- first thing to do. \
Avoid pointing your local to production\
if possible send logs from browser to server in case of an exception.\
Log XHR network failures, javascirpt errors, user actions with timestamp. You can use google analytics as well to track down where a failure happened
Prettify minified assets and debug using browser console

No I never had to do this. \

### `What was the latest technical book you have read or tech conference you have been to? What did you learn?`

I did not read any book but i have read the blogs provided by different frameworks(eg. React) documentations. I learnt the latest changes they have gone through.

### `What do you think about the technical assessment?`

It is a good technical assessment. Initially i thought that by just using frontend solution, I will be able to complete it but unfortunately I could not and had to write node backend as well for api's to succeed. Overall its a very good assessment to assess both front end, back end and overall thinkinng about the approach for the solution.

### `Please describe about yourself using JSON`

{
"name": " Prakhar Shukla",
"place": "Amsterdam",
"dateOfBirth": "17-09-1989",
"powers": {
"isAwesome": true,
"isQuickLearner": true,
"isDynamic": true,
"bringsValueToTeam": true,
"mustToHaveInTeam": true,
"isHappy": true,
"isTrustWorthy": true,
"isCreative": true
},
"experienceInYears": 8,
"experienceInSports": "lifeTime"
}
