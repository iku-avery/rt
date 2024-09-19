
const loremParticles = [
    "arrr", "yasss", "matey", "ahoy", "fabulous", "avast", "queer", 
    "shiver", "me", "timbers", "yas", "booty", "werk", "swashbuckler", "iconic", 
    "scallywag", "love it", "landlubber", "yes queen", "buccaneer", "amazing", 
    "plunder", "divine", "grog", "showstopper", "captain", "proud", "corsair", 
    "glitter", "jolly", "shimmer", "rum", "fierce", "sea-dog", "sparkle", 
    "mariner", "rad", "treasure", "swoon", "cutlass", "gorge", "shipmate", 
    "lit", "pirate", "epic", "swashbuckler", "hot", "plank", "gorgeous", 
    "deck", "vibes", "buoy", "sparkly", "sail", "incredible", 
    "privateer", "unreal", "scimitar", "stellar", "rogue", "dreamy", "adventure", 
    "bold", "empowered", "magnificent", "daring", "outstanding", "high-seas", 
    "legendary", "dungeon", "fab", "sassy", "zesty", "fantastic", "cool", 
    "seafaring", "piratey", "cannon", "tavern", "skull", "crossbones", "honey"
];

const loremQuotes = [
    "I'm just a guy, standing in front of a murderous crew, asking them to love me.",
    "You have to embrace who you are, even if it's scary.",
    "It's not about fitting in, it's about being true to yourself.",
    "Sometimes the person you're looking for is right in front of you.",
    "There's nothing wrong with showing affection, even on a pirate ship.",
    "What's so wrong about being in love with someone who's just as messed up as you are?",
    "We're both awkward, but maybe that's why it works.",
    "It's okay to be scared. It means you care.",
    "You're my favorite kind of trouble.",
    "Being yourself is the bravest thing you can do.",
    "I didn't expect to find love on the high seas, but here we are.",
    "You're more than just a pirate to me. You're everything.",
    "Sometimes love is just… messy.",
    "If being a pirate means hiding who I am, then maybe I don't want to be one.",
    "There's no shame in loving who you want to love.",
    "I'm the worst pirate ever, but I'm still here for you.",
    "I'm not a murderer. I've never been a fan of murder.",
    "You're either a gentleman or a pirate. You can't be both.",
    "What kind of pirate has a library? This one.",
    "I reckon what makes Ed, is he's… complicated.",
    "Look, no offense, but the whole 'sad pirate' routine is getting a bit old.",
    "Silence is a great equalizer.",
    "I may have 'un-alived' a few people.",
    "I'm so sick of this tough pirate façade.",
    "Let's go ahead and sail into the storm. Could be fun!",
    "We're pirates. We do what we want.",
    "Captain, permission to… well, kill everyone?",
    "It's a weird vibe, but I like it.",
    "I don't even know who I am without the leather.",
    "We're going to be brave and do something incredibly stupid.",
    "Just because you're rich doesn't mean you're smart.",
    "Piracy is about more than just killing people. It's about freedom!",
    "Are we having a feelings meeting? It feels like a feelings meeting.",
    "If someone dies, that's just part of the job.",
    "I have no survival skills whatsoever. I'm a gentleman.",
    "When you're lost at sea, sometimes you just need to set a new course.",
    "We're not murderers, we're incompetent. There's a difference.",
    "That wasn't murder, that was an act of piracy.",
    "He's not dead! He's just… mostly dead.",
    "This is not the pirate life I signed up for.",
    "The sea is an unpredictable mistress. Much like myself.",
    "I'm the Kraken! Release me!",
    "There's no rulebook for this stuff.",
    "This is not how I imagined piracy at all.",
    "I find revenge to be quite soothing.",
    "I'm more of a pirate-in-theory kind of guy.",
    "Well, this has been incredibly awkward.",
    "I'm not really one for labels, just for being who I am.",
    "We all come in different shapes and forms, and that's what makes us interesting.",
    "I don't fit into a single box, and that's exactly how I like it.",
    "Sometimes the best way to understand ourselves is to stop trying to fit into someone else's idea of normal.",
    "There's no right way to be, only the way that feels true to you.",
    "My identity is fluid, and that's something I celebrate.",
    "Being myself means embracing all the parts of who I am, not just the ones that fit neatly into a category.",
    "Who I am isn't defined by others' expectations, but by my own understanding of myself.",
    "Embracing my nonbinary identity means living in a way that feels authentic to me, regardless of labels.",
    "Sometimes the best way to be yourself is to let go of trying to fit in and just be.",
    "I'm not used to this level of emotional vulnerability.",
    "I'm more than just a pirate. I'm a person who feels things deeply.",
    "Being open with your feelings is the bravest thing you can do.",
    "Showing vulnerability is a strength, not a weakness.",
    "It's hard to be vulnerable, but it's worth it when you find someone who understands.",
    "Letting my guard down doesn't make me weak; it makes me human.",
    "There's nothing wrong with admitting you need help or affection.",
    "Sometimes the best thing you can do is be honest about how you feel.",
    "We're all equals here. That's the kind of crew I want.",
    "Don't let anyone tell you what you can or cannot do. Define your own path.",
    "We're breaking away from the old ways. That's what real change looks like.",
    "I've always been a bit of a romantic, even if it didn't always fit the pirate image",
    "You make me feel like I can let down my guard and just be myself.",
    "It's okay to be vulnerable and soft. It doesn't make you any less of a pirate or a person.",
    "I didn't know I needed someone to see me for who I am, not just the fearsome pirate I pretend to be",
    "Being with you feels like a different kind of adventure. One where I don't have to be so guarded.",
    "I'm just a man who loves with all his heart, even if it's not the pirate way.",
    "You're my favorite kind of trouble.",
    "Being yourself is the bravest thing you can do.",
    "It's lonely being on the outside, but it also means you have the freedom to find where you truly belong.",
    "We're all misfits here, and that's what makes us a family.",
    "I've never quite fit the mold of what a pirate should be. Maybe that's why I've found my place with you all.",
    "Being an outsider has given me a chance to discover who I am, apart from what others expect.",
    "Being different isn't a flaw; it's a way to stand out in a world full of conformity.",
    "We're all a bit odd in our own ways. That's what makes us a good crew.",
    "I've always felt out of place, but maybe that's because I'm meant to create my own space.",
    "Being an outsider gives you the freedom to define your own path without following someone else's rules.",
    "My identity isn't a puzzle to be solved; it's a journey to be experienced.",
    "Sometimes the best way to understand yourself is to stop trying to fit into someone else's idea of normal."
];

// Function to capitalize the first letter of a string
const capitalizeFirstLetter = (str: string): string => {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
};

// Function to generate a single sentence with a quote and particles between sentences
const generateSentence = (): string => {
    const quote = loremQuotes[Math.floor(Math.random() * loremQuotes.length)];
    const particlesToAdd = Math.floor(Math.random() * 5);
    const particles = [];
    for (let i = 0; i < particlesToAdd; i++) {
        particles.push(loremParticles[Math.floor(Math.random() * loremParticles.length)]);
    }
    let combinedSentence = quote;
    for (let i = 0; i < particles.length; i++) {
        combinedSentence += ` ${capitalizeFirstLetter(particles[i])}!`;
    }
    return combinedSentence;
};

// Function to generate a paragraph with multiple sentences
const generateParagraph = (): string => {
    const paragraphLength = Math.floor(Math.random() * 4) + 2; // 2-5 sentences
    const paragraph = [];
    for (let i = 0; i < paragraphLength; i++) {
        paragraph.push(generateSentence());
    }
    return paragraph.join(" ");
};

export const generateLoremIpsum = (paragraphCount: number): string => {
    const paragraphs = [];
    for (let i = 0; i < paragraphCount; i++) {
      paragraphs.push(generateParagraph());
    }
    return paragraphs.join("\n");
  };