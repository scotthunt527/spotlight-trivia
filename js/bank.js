/* ================================================================
   QUESTION BANK  (50 questions, 5 categories)
   Loaded by js/trivia.js and js/category-quiz.js.
   No external dependencies.
================================================================ */
const BANK = [
    /* ── MOVIES ── */
    { cat:'movies', icon:'🎬', label:'Movies',
      q:'Which 2023 blockbuster starred Margot Robbie as a plastic fashion doll?',
      opts:['The Doll House','Mean Girls','Legally Blonde 3','Barbie'], ans:3 },

    { cat:'movies', icon:'🎬', label:'Movies',
      q:'Who directed "Oppenheimer" (2023)?',
      opts:['Denis Villeneuve','Steven Spielberg','Quentin Tarantino','Christopher Nolan'], ans:3 },

    { cat:'movies', icon:'🎬', label:'Movies',
      q:'Which film carries the tagline "In space, no one can hear you scream"?',
      opts:['Gravity','Interstellar','The Martian','Alien'], ans:3 },

    { cat:'movies', icon:'🎬', label:'Movies',
      q:'Who voices Woody in the Toy Story franchise?',
      opts:['Jim Carrey','Will Smith','Tom Cruise','Tom Hanks'], ans:3 },

    { cat:'movies', icon:'🎬', label:'Movies',
      q:'Which film won the Academy Award for Best Picture at the 2020 Oscars?',
      opts:['1917','Joker','Once Upon a Time in Hollywood','Parasite'], ans:3 },

    { cat:'movies', icon:'🎬', label:'Movies',
      q:'What color pill does Neo choose to learn the truth in "The Matrix"?',
      opts:['Blue','Yellow','Green','Red'], ans:3 },

    { cat:'movies', icon:'🎬', label:'Movies',
      q:'Which Disney film features the power ballad "Let It Go"?',
      opts:['Brave','Tangled','Moana','Frozen'], ans:3 },

    { cat:'movies', icon:'🎬', label:'Movies',
      q:'Who plays Tony Stark / Iron Man in the Marvel Cinematic Universe?',
      opts:['Chris Evans','Chris Hemsworth','Benedict Cumberbatch','Robert Downey Jr.'], ans:3 },

    { cat:'movies', icon:'🎬', label:'Movies',
      q:'In "Catch Me If You Can," Leonardo DiCaprio plays real-life conman Frank Abagnale Jr. Who directed it?',
      opts:['Martin Scorsese','James Cameron','David Fincher','Steven Spielberg'], ans:3 },

    { cat:'movies', icon:'🎬', label:'Movies',
      q:'Which fictional school do Harry, Ron and Hermione attend?',
      opts:['Beauxbatons','Durmstrang','Ilvermorny','Hogwarts'], ans:3 },

    { cat:'movies', icon:'🎬', label:'Movies',
      q:'Which film holds the all-time global box office record as of 2023, boosted by a 2022 re-release?',
      opts:['Avengers: Endgame','Titanic','Star Wars: The Force Awakens','Avatar'], ans:3 },

    { cat:'movies', icon:'🎬', label:'Movies',
      q:'What is the name of the fictional African nation in "Black Panther" (2018)?',
      opts:['Zamunda','Genosha','Sokovia','Wakanda'], ans:3 },

    { cat:'movies', icon:'🎬', label:'Movies',
      q:'Which actress played Katniss Everdeen across all four "Hunger Games" films?',
      opts:['Emma Watson','Shailene Woodley','Saoirse Ronan','Jennifer Lawrence'], ans:3 },

    { cat:'movies', icon:'🎬', label:'Movies',
      q:'What is the name of the legendary blue diamond necklace at the center of "Titanic" (1997)?',
      opts:['The Blue Star','The Ocean Jewel','The Neptune Diamond','The Heart of the Ocean'], ans:3 },

    { cat:'movies', icon:'🎬', label:'Movies',
      q:'Which 2022 Tom Cruise sequel, arriving 36 years after the original, became that year\'s highest-grossing film worldwide?',
      opts:['Edge of Tomorrow','Mission: Impossible – Fallout','Oblivion','Top Gun: Maverick'], ans:3 },

    { cat:'movies', icon:'🎬', label:'Movies',
      q:'Which Pixar film features the song "Remember Me" and is set during Mexico\'s Día de los Muertos?',
      opts:['The Book of Life','Encanto','Moana','Coco'], ans:3 },

    { cat:'movies', icon:'🎬', label:'Movies',
      q:'In "Forrest Gump," what does Forrest\'s mother say life is like?',
      opts:['A roller coaster','A game of cards','A long road','A box of chocolates'], ans:3 },

    { cat:'movies', icon:'🎬', label:'Movies',
      q:'Who directed "Joker" (2019), the film that earned Joaquin Phoenix the Academy Award for Best Actor?',
      opts:['David Fincher','Martin Scorsese','Darren Aronofsky','Todd Phillips'], ans:3 },

    { cat:'movies', icon:'🎬', label:'Movies',
      q:'Which 2013 space survival film starring Sandra Bullock earned Alfonso Cuarón the Academy Award for Best Director?',
      opts:['Interstellar','The Martian','Europa Report','Gravity'], ans:3 },

    { cat:'movies', icon:'🎬', label:'Movies',
      q:'What is the subtitle of the fourth "Avengers" film, released in 2019?',
      opts:['Infinity','Final Chapter','Last Stand','Endgame'], ans:3 },

    /* ── TV SHOWS ── */
    { cat:'tv', icon:'📺', label:'TV Shows',
      q:'Which Netflix series is set in the fictional Indiana town of Hawkins?',
      opts:['Dark','Mindhunter','The OA','Stranger Things'], ans:3 },

    { cat:'tv', icon:'📺', label:'TV Shows',
      q:'Who plays high-school-teacher-turned-drug-lord Walter White in "Breaking Bad"?',
      opts:['Aaron Paul','Bob Odenkirk','Dean Norris','Bryan Cranston'], ans:3 },

    { cat:'tv', icon:'📺', label:'TV Shows',
      q:'What is the name of the coffee shop where the Friends gang hangs out?',
      opts:['The Daily Grind','Café Du Monde','The Peach Pit','Central Perk'], ans:3 },

    { cat:'tv', icon:'📺', label:'TV Shows',
      q:'Which HBO drama follows the Roy family\'s battle over a global media empire?',
      opts:['Industry','Suits','Billions','Succession'], ans:3 },

    { cat:'tv', icon:'📺', label:'TV Shows',
      q:'What is the very first game contestants are forced to play in "Squid Game"?',
      opts:['Honeycomb','Marbles','Tug of War','Red Light Green Light'], ans:3 },

    { cat:'tv', icon:'📺', label:'TV Shows',
      q:'Which actress portrays Daenerys Targaryen, "Mother of Dragons," in Game of Thrones?',
      opts:['Sophie Turner','Maisie Williams','Natalie Dormer','Emilia Clarke'], ans:3 },

    { cat:'tv', icon:'📺', label:'TV Shows',
      q:'What fictional paper company is the setting of the US version of "The Office"?',
      opts:['Scott Paper Co.','Halpert & Sons','Wernham Hogg','Dunder Mifflin'], ans:3 },

    { cat:'tv', icon:'📺', label:'TV Shows',
      q:'Who plays the titular Wednesday Addams in Netflix\'s "Wednesday"?',
      opts:['Sadie Sink','Joey King','Millie Bobby Brown','Jenna Ortega'], ans:3 },

    { cat:'tv', icon:'📺', label:'TV Shows',
      q:'The famous motto "Winter is Coming" belongs to which noble house in Game of Thrones?',
      opts:['House Lannister','House Baratheon','House Targaryen','House Stark'], ans:3 },

    { cat:'tv', icon:'📺', label:'TV Shows',
      q:'Which HBO anthology series follows a different group of guests at a luxury tropical resort each season?',
      opts:['Big Little Lies','Nine Perfect Strangers','The Resort','The White Lotus'], ans:3 },

    { cat:'tv', icon:'📺', label:'TV Shows',
      q:'In which HBO crime drama does detective Jimmy McNulty investigate drug trafficking in Baltimore?',
      opts:['Oz','The Shield','Boardwalk Empire','The Wire'], ans:3 },

    { cat:'tv', icon:'📺', label:'TV Shows',
      q:'Which Netflix series is based on the true story of Anna Sorokin, a con artist who posed as a wealthy German heiress named Anna Delvey?',
      opts:['The Crown','Dirty Money','Bad Vegan','Inventing Anna'], ans:3 },

    { cat:'tv', icon:'📺', label:'TV Shows',
      q:'Which sitcom, set in Pawnee, Indiana, follows optimistic deputy parks director Leslie Knope and her colleagues?',
      opts:['Brooklyn Nine-Nine','The Good Place','Community','Parks and Recreation'], ans:3 },

    { cat:'tv', icon:'📺', label:'TV Shows',
      q:'Which anthology crime series features a new cast and story each season, with Season 1 starring Matthew McConaughey and Woody Harrelson?',
      opts:['American Horror Story','Fargo','Mindhunter','True Detective'], ans:3 },

    { cat:'tv', icon:'📺', label:'TV Shows',
      q:'Which actress plays the title character Meredith Grey in the long-running medical drama "Grey\'s Anatomy"?',
      opts:['Chandra Wilson','Sandra Oh','Katherine Heigl','Ellen Pompeo'], ans:3 },

    { cat:'tv', icon:'📺', label:'TV Shows',
      q:'Which Netflix drama, based on Piper Kerman\'s memoir, is set inside a women\'s federal prison?',
      opts:['Wentworth','Unbreakable Kimmy Schmidt','Dead to Me','Orange Is the New Black'], ans:3 },

    { cat:'tv', icon:'📺', label:'TV Shows',
      q:'In "The Big Bang Theory," Sheldon Cooper\'s signature triple knock is always followed by whose name?',
      opts:['Amy','Leonard','Howard','Penny'], ans:3 },

    { cat:'tv', icon:'📺', label:'TV Shows',
      q:'Which Disney+ Star Wars series follows the bounty hunter Boba Fett as he rules Tatooine\'s criminal underworld?',
      opts:['Obi-Wan Kenobi','Andor','Ahsoka','The Book of Boba Fett'], ans:3 },

    { cat:'tv', icon:'📺', label:'TV Shows',
      q:'Which HBO drama, based on a video game, stars Pedro Pascal as a smuggler protecting a girl immune to a deadly fungal outbreak?',
      opts:['Fallout','Westworld','Raised by Wolves','The Last of Us'], ans:3 },

    { cat:'tv', icon:'📺', label:'TV Shows',
      q:'In "Friends," what is the name of Joey Tribbiani\'s fictional soap opera alter ego on "Days of Our Lives"?',
      opts:['Dr. Joey Falcone','Dr. Ben Cooper','Dr. Mike Newman','Dr. Drake Ramoray'], ans:3 },

    /* ── MUSIC ── */
    { cat:'music', icon:'🎵', label:'Music',
      q:'Which superstar released the acclaimed dance album "Renaissance" in 2022?',
      opts:['Rihanna','Nicki Minaj','Lizzo','Beyoncé'], ans:3 },

    { cat:'music', icon:'🎵', label:'Music',
      q:'What is The Weeknd\'s real birth name?',
      opts:['Michael Thompson','Kevin Hart','Daniel Johnson','Abel Tesfaye'], ans:3 },

    { cat:'music', icon:'🎵', label:'Music',
      q:'Which legendary British rock band recorded "Bohemian Rhapsody" and "We Will Rock You"?',
      opts:['Led Zeppelin','The Rolling Stones','The Beatles','Queen'], ans:3 },

    { cat:'music', icon:'🎵', label:'Music',
      q:'In what year did Michael Jackson release his iconic "Thriller" album?',
      opts:['1979','1985','1988','1982'], ans:3 },

    { cat:'music', icon:'🎵', label:'Music',
      q:'The rapper Drake\'s legal birth name is:',
      opts:['Kendrick Duckworth','Shéyaa Joseph','Rakim Mayers','Aubrey Graham'], ans:3 },

    { cat:'music', icon:'🎵', label:'Music',
      q:'Billie Eilish won the Oscar for Best Original Song for which James Bond film?',
      opts:['Skyfall','Spectre','Casino Royale','No Time to Die'], ans:3 },

    { cat:'music', icon:'🎵', label:'Music',
      q:'Taylor Swift\'s Eras Tour became the first concert tour ever to gross more than:',
      opts:['$500 million','$2 billion','$750 million','$1 billion'], ans:3 },

    { cat:'music', icon:'🎵', label:'Music',
      q:'As of 2024, who holds the record for the most Grammy Awards won in history?',
      opts:['Taylor Swift','Jay-Z','Georg Solti','Beyoncé'], ans:3 },

    { cat:'music', icon:'🎵', label:'Music',
      q:'Which iconic artist is universally known as the "Queen of Pop"?',
      opts:['Mariah Carey','Beyoncé','Whitney Houston','Madonna'], ans:3 },

    { cat:'music', icon:'🎵', label:'Music',
      q:'The K-pop group BTS is from which country?',
      opts:['Japan','China','Thailand','South Korea'], ans:3 },

    { cat:'music', icon:'🎵', label:'Music',
      q:'Which rapper\'s 2018 album "Astroworld" is named after a defunct Houston amusement park?',
      opts:['Megan Thee Stallion','Post Malone','Cardi B','Travis Scott'], ans:3 },

    { cat:'music', icon:'🎵', label:'Music',
      q:'Olivia Rodrigo\'s debut single "drivers license," which shattered Spotify\'s weekly streaming record, was released in which year?',
      opts:['2019','2020','2022','2021'], ans:3 },

    { cat:'music', icon:'🎵', label:'Music',
      q:'Which British singer-songwriter released the record-breaking 2017 album "÷ (Divide)" featuring the global hit "Shape of You"?',
      opts:['Sam Smith','Harry Styles','Niall Horan','Ed Sheeran'], ans:3 },

    { cat:'music', icon:'🎵', label:'Music',
      q:'What is the name of Beyoncé\'s fierce stage alter ego, introduced on her 2008 album "I Am... Sasha Fierce"?',
      opts:['Queen Bey','Yoncé','Lemonade','Sasha Fierce'], ans:3 },

    { cat:'music', icon:'🎵', label:'Music',
      q:'Which rapper, born Tupac Shakur, was fatally shot in Las Vegas in September 1996?',
      opts:['The Notorious B.I.G.','Eazy-E','Jam Master Jay','2Pac'], ans:3 },

    { cat:'music', icon:'🎵', label:'Music',
      q:'Which British pop duo released both "Careless Whisper" and "Wake Me Up Before You Go-Go" in 1984?',
      opts:['Duran Duran','Culture Club','Eurythmics','Wham!'], ans:3 },

    { cat:'music', icon:'🎵', label:'Music',
      q:'Harry Styles rose to worldwide fame as a member of which boy band before pursuing his solo career?',
      opts:['The Wanted','NSYNC','Westlife','One Direction'], ans:3 },

    { cat:'music', icon:'🎵', label:'Music',
      q:'Which artist\'s song "Old Town Road" spent a record-breaking 19 weeks at number one on the Billboard Hot 100 in 2019?',
      opts:['Post Malone','Cardi B','DaBaby','Lil Nas X'], ans:3 },

    { cat:'music', icon:'🎵', label:'Music',
      q:'In which Caribbean country was rapper Nicki Minaj born?',
      opts:['Jamaica','Barbados','Haiti','Trinidad and Tobago'], ans:3 },

    { cat:'music', icon:'🎵', label:'Music',
      q:'Which pop icon holds the title of "King of Pop"?',
      opts:['Elvis Presley','Prince','David Bowie','Michael Jackson'], ans:3 },

    /* ── CELEBRITY ── */
    { cat:'celeb', icon:'⭐', label:'Celebrity',
      q:'Which celebrity couple is nicknamed "Bennifer"?',
      opts:['Ben Stiller & Jennifer Aniston','Ben Kingsley & Jennifer Garner','Benedict Cumberbatch & Jennifer Lawrence','Ben Affleck & Jennifer Lopez'], ans:3 },

    { cat:'celeb', icon:'⭐', label:'Celebrity',
      q:'Who played The Joker in Christopher Nolan\'s "The Dark Knight" (2008)?',
      opts:['Jared Leto','Jack Nicholson','Joaquin Phoenix','Heath Ledger'], ans:3 },

    { cat:'celeb', icon:'⭐', label:'Celebrity',
      q:'Kim Kardashian was previously married to which Grammy-winning rapper?',
      opts:['Jay-Z','Travis Scott','Snoop Dogg','Kanye West'], ans:3 },

    { cat:'celeb', icon:'⭐', label:'Celebrity',
      q:'Zendaya won back-to-back Emmy Awards for Outstanding Lead Actress in which HBO series?',
      opts:['Insecure','Lovecraft Country','I May Destroy You','Euphoria'], ans:3 },

    { cat:'celeb', icon:'⭐', label:'Celebrity',
      q:'Which Chris plays Thor in the Marvel Cinematic Universe?',
      opts:['Chris Evans','Chris Pratt','Chris Pine','Chris Hemsworth'], ans:3 },

    { cat:'celeb', icon:'⭐', label:'Celebrity',
      q:'What does Lady Gaga call her devoted fanbase?',
      opts:['Gaga Gang','The Haus','Born This Way Believers','Little Monsters'], ans:3 },

    { cat:'celeb', icon:'⭐', label:'Celebrity',
      q:'As of 2024, who is the most-followed individual on Instagram?',
      opts:['Taylor Swift','Kylie Jenner','Selena Gomez','Cristiano Ronaldo'], ans:3 },

    { cat:'celeb', icon:'⭐', label:'Celebrity',
      q:'Which actress plays Natasha Romanoff / Black Widow in the MCU?',
      opts:['Gal Gadot','Brie Larson','Zoe Saldana','Scarlett Johansson'], ans:3 },

    { cat:'celeb', icon:'⭐', label:'Celebrity',
      q:'Which fiery celebrity chef hosts the cooking competition show "Hell\'s Kitchen"?',
      opts:['Anthony Bourdain','Bobby Flay','Guy Fieri','Gordon Ramsay'], ans:3 },

    { cat:'celeb', icon:'⭐', label:'Celebrity',
      q:'Emma Stone won her first Academy Award for Best Actress for her role in:',
      opts:['Easy A','Birdman','The Favourite','La La Land'], ans:3 },

    { cat:'celeb', icon:'⭐', label:'Celebrity',
      q:'Which actress played Elle Woods in the 2001 comedy "Legally Blonde"?',
      opts:['Cameron Diaz','Kate Hudson','Drew Barrymore','Reese Witherspoon'], ans:3 },

    { cat:'celeb', icon:'⭐', label:'Celebrity',
      q:'Which British royal couple announced their engagement in November 2010?',
      opts:['Prince Harry & Meghan Markle','Prince Charles & Camilla Parker Bowles','Princess Eugenie & Jack Brooksbank','Prince William & Kate Middleton'], ans:3 },

    { cat:'celeb', icon:'⭐', label:'Celebrity',
      q:'Leonardo DiCaprio won his first Academy Award for Best Actor for which film?',
      opts:['Django Unchained','The Wolf of Wall Street','Inception','The Revenant'], ans:3 },

    { cat:'celeb', icon:'⭐', label:'Celebrity',
      q:'Which socialite became famous in the mid-2000s largely for being famous, helping pioneer the modern celebrity archetype?',
      opts:['Lindsay Lohan','Nicole Richie','Tara Reid','Paris Hilton'], ans:3 },

    { cat:'celeb', icon:'⭐', label:'Celebrity',
      q:'Which actress, known for "Pretty Woman" and "Erin Brockovich," is nicknamed "America\'s Sweetheart"?',
      opts:['Sandra Bullock','Meg Ryan','Reese Witherspoon','Julia Roberts'], ans:3 },

    { cat:'celeb', icon:'⭐', label:'Celebrity',
      q:'Which actor stars as the title character in the "John Wick" action franchise?',
      opts:['Tom Hardy','Jason Statham','Liam Neeson','Keanu Reeves'], ans:3 },

    { cat:'celeb', icon:'⭐', label:'Celebrity',
      q:'Dwayne "The Rock" Johnson became a global star in which industry before transitioning to acting?',
      opts:['Boxing','American football','Mixed martial arts','Professional wrestling'], ans:3 },

    { cat:'celeb', icon:'⭐', label:'Celebrity',
      q:'Which actress and entrepreneur founded the luxury wellness and lifestyle brand Goop?',
      opts:['Jennifer Aniston','Cameron Diaz','Jessica Alba','Gwyneth Paltrow'], ans:3 },

    { cat:'celeb', icon:'⭐', label:'Celebrity',
      q:'Which actress starred opposite Brad Pitt in the 2005 action-comedy "Mr. & Mrs. Smith," sparking a high-profile real-life romance?',
      opts:['Jennifer Lopez','Halle Berry','Charlize Theron','Angelina Jolie'], ans:3 },

    { cat:'celeb', icon:'⭐', label:'Celebrity',
      q:'Which beloved comedian and actor, known for "Mrs. Doubtfire" and "Good Morning, Vietnam," passed away in August 2014?',
      opts:['John Candy','Bernie Mac','Richard Pryor','Robin Williams'], ans:3 },

    /* ── POP CULTURE ── */
    { cat:'pop', icon:'🌟', label:'Pop Culture',
      q:'Which social media platform is best known for its personalized "For You Page" (FYP)?',
      opts:['Instagram','Snapchat','Twitter / X','TikTok'], ans:3 },

    { cat:'pop', icon:'🌟', label:'Pop Culture',
      q:'Who was hosting the Oscars when Will Smith walked onstage and slapped him?',
      opts:['Jimmy Fallon','Kevin Hart','Ricky Gervais','Chris Rock'], ans:3 },

    { cat:'pop', icon:'🌟', label:'Pop Culture',
      q:'What does the "E" in EGOT stand for?',
      opts:['Excellence','Elite','Entertainment','Emmy'], ans:3 },

    { cat:'pop', icon:'🌟', label:'Pop Culture',
      q:'Which long-running reality competition show launched the careers of Kelly Clarkson and Carrie Underwood?',
      opts:['Dancing with the Stars','Big Brother','The Voice','American Idol'], ans:3 },

    { cat:'pop', icon:'🌟', label:'Pop Culture',
      q:'The 2016 smash hit "Closer" was performed by which electronic duo?',
      opts:['Twenty One Pilots','Imagine Dragons','Glass Animals','The Chainsmokers'], ans:3 },

    { cat:'pop', icon:'🌟', label:'Pop Culture',
      q:'Which streaming service produces the royal drama "The Crown"?',
      opts:['HBO Max','Hulu','Amazon Prime Video','Netflix'], ans:3 },

    { cat:'pop', icon:'🌟', label:'Pop Culture',
      q:'The viral "Ice Bucket Challenge" raised millions in awareness for which disease?',
      opts:["Parkinson's","Multiple Sclerosis","Alzheimer's","ALS"], ans:3 },

    { cat:'pop', icon:'🌟', label:'Pop Culture',
      q:'Which fictional superhero team includes Captain America, Iron Man, and Thor?',
      opts:['X-Men','Guardians of the Galaxy','Justice League','The Avengers'], ans:3 },

    { cat:'pop', icon:'🌟', label:'Pop Culture',
      q:'Which battle-royale video game became a massive global phenomenon starting in 2017?',
      opts:['Apex Legends','PUBG','Call of Duty: Warzone','Fortnite'], ans:3 },

    { cat:'pop', icon:'🌟', label:'Pop Culture',
      q:'The "Barbenheimer" cultural moment in summer 2023 referred to the same-day release of Barbie and which film?',
      opts:['Mission: Impossible','Indiana Jones','Asteroid City','Oppenheimer'], ans:3 },

    { cat:'pop', icon:'🌟', label:'Pop Culture',
      q:'What does the widely used internet acronym "GOAT" stand for?',
      opts:['Got Outstanding Athletic Talent','Greatest Of Any Time','Game Of All Trades','Greatest Of All Time'], ans:3 },

    { cat:'pop', icon:'🌟', label:'Pop Culture',
      q:'Which annual music festival, held in Indio, California, is famous for its celebrity-packed crowds and desert backdrop?',
      opts:['Lollapalooza','Glastonbury','Bonnaroo','Coachella'], ans:3 },

    { cat:'pop', icon:'🌟', label:'Pop Culture',
      q:'Which social media platform, originally launched as "twttr" by Jack Dorsey in 2006, became one of the world\'s most influential?',
      opts:['Instagram','Tumblr','Snapchat','Twitter'], ans:3 },

    { cat:'pop', icon:'🌟', label:'Pop Culture',
      q:'Which Netflix true-crime docuseries about a big-cat keeper became a pandemic binge sensation when it dropped in March 2020?',
      opts:['Making a Murderer','The Staircase','Don\'t F**k with Cats','Tiger King'], ans:3 },

    { cat:'pop', icon:'🌟', label:'Pop Culture',
      q:'The 2016 "Mannequin Challenge" viral trend involved participants doing what?',
      opts:['Dumping ice water over their heads','Lip-syncing to a specific song','Dancing like store mannequins','Freezing in place while a camera panned around them'], ans:3 },

    { cat:'pop', icon:'🌟', label:'Pop Culture',
      q:'Which annual event, sometimes called the "Oscars of gaming," was founded by Geoff Keighley in 2014?',
      opts:['BAFTA Games Awards','Golden Joystick Awards','E3 Awards','The Game Awards'], ans:3 },

    { cat:'pop', icon:'🌟', label:'Pop Culture',
      q:'The acronym "YOLO" (You Only Live Once) was widely popularized by which rapper\'s 2011 song "The Motto"?',
      opts:['Kanye West','Lil Wayne','Wiz Khalifa','Drake'], ans:3 },

    { cat:'pop', icon:'🌟', label:'Pop Culture',
      q:'Which photo-sharing app, launched in October 2010 and acquired by Facebook in 2012, became the dominant platform for images?',
      opts:['Flickr','Vine','Pinterest','Instagram'], ans:3 },

    { cat:'pop', icon:'🌟', label:'Pop Culture',
      q:'The internet slang term "stan," meaning an obsessive fan, originated from a 2000 song by which rapper?',
      opts:['Jay-Z','Kanye West','Dr. Dre','Eminem'], ans:3 },

    { cat:'pop', icon:'🌟', label:'Pop Culture',
      q:'The viral phrase "OK Boomer" is used to dismiss or mock people from which generation?',
      opts:['Generation X','The Silent Generation','The Greatest Generation','Baby Boomers'], ans:3 },
];
