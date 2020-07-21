import React from 'react';
import './Copy.css';

class Copy extends React.Component{
  handleCopy = () => {
    alert("Why dont you come up with your own bunch of nonsense");
  }
  render(){
    return (
      <div className="Copy" onCopy={this.handleCopy}>
        <p>Cat ipsum dolor sit amet, use lap as chair eat a plant, kill a hand human is in bath tub, emergency! drowning! meooowww! with tail in the air. Cat meoooow i iz master of hoomaan, not hoomaan master of i, oooh damn dat dog check cat door for ambush 10 times before coming in for why use post when this sofa is here you are a captive audience while sitting on the toilet, pet me kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats. Meow meow mama gimme attention gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i don't want it anymore meow bye for meowing non stop for food yet chase laser or trip owner up in kitchen i want food ask for petting, so hey! you there, with the hands. Check cat door for ambush 10 times before coming in. Dream about hunting birds purr while eating so crusty butthole, so cat dog hate mouse eat string barf pillow no baths hate everything yet rub face on everything, and attack feet. Destroy house in 5 seconds brown cats with pink ears and wake up human for food at 4am in the middle of the night i crawl onto your chest and purr gently to help you sleep yet munch, munch, chomp, chomp yet toilet paper attack claws fluff everywhere meow miao french ciao litterbox. I show my fluffy belly but it's a trap! if you pet it i will tear up your hand play with twist ties, for stare at wall turn and meow stare at wall some more meow again continue staring and tweeting a baseball for meeeeouw. Lick butt.</p>
      </div>
    )
  }
}

export default Copy;
