import { Card } from "../models/Card";
import { CardStack } from "../models/CardStack";
import { Factory } from "../Utils/Factory";
import { Utils } from "../Utils/Utils";

const dummyEnglishCards: Card[] =
    'Bajadasaurus is a genus of sauropod dinosaur of northern Patagonia, Argentina, from around 145 to 133 million years ago during the Early Cretaceous epoch. It was first described in 2019 based on a single specimen (elements pictured) found in 2010 that includes a largely complete skull and parts of the neck. The only species is Bajadasaurus pronuspinax. The genus is a member of Dicraeosauridae, a group of relatively small and short-necked sauropods. Bajadasaurus sported bifurcated (two-pronged), extremely elongated neural spines extending from the neck; the 2019 description of Bajadasaurus suggested that they could have served as passive defense against predators. The skull was slender and equipped with around 48 teeth that were pencil-shaped and restricted to the front of the jaws'
        .split(' ').map(word => Factory.genCard(word));
        // .map((word, i) => new Card(word, i.toString()));


const dummyHebrewCards: Card[] =
    'תיק ביצה עגבניה בארי חמוד חמוץ שיער למלכודת הרפתקאה ניבים קסם בלטה גברת חמוס גיראפה איגואנה'
        .split(' ').map(word => Factory.genCard(word));

const dummyHebrewCardStack: CardStack = Factory.genCardStack('dummy hebrew card stack');
dummyHebrewCardStack.cards = dummyHebrewCards;

const dummyEnglishStack: CardStack = Factory.genCardStack('dummy english card stack');
dummyEnglishStack.cards = dummyEnglishCards;

export const dummyStacks: CardStack[] = [dummyHebrewCardStack, dummyEnglishStack];


// export