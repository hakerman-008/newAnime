const express = require('express');
const app = express();
const port = 3001;


const animeData = {
  shonen: [
    { anime: "onepiece", videoLink: " http://tinyurl.com/28hsjzz4" },
    { anime: "hunterXhunter", videoLink: "http://tinyurl.com/2aaub8du" },
    { anime: "Fullmetal Alchemist: Brotherhood", videoLink: "http://tinyurl.com/25hywsl8" },
    { anime: "Naruto", videoLink: "http://tinyurl.com/2xtn266e" },
    { anime: "My Hero Academia", videoLink: "http://tinyurl.com/25a7ooy9" },
    { anime: "Attack on Titan", videoLink: "http://tinyurl.com/2869zpb3" },
    { anime: "Demon Slayer: Kimetsu no Yaiba", videoLink: "http://tinyurl.com/29rp3wpn" },
    { anime: "Dragon Ball Z", videoLink: "http://tinyurl.com/28295b3a" },
    { anime: "Bleach", videoLink: " http://tinyurl.com/2dawqxm9" },
    { anime: "Yu Yu Hakusho", videoLink: "http://tinyurl.com/26qzc9y8" },
    { anime: "Fairy Tail", videoLink: "http://tinyurl.com/2cda9cyn" },
    { anime: "black clover", videoLink: "http://tinyurl.com/29qyshzd" },
    { anime: "Haikyuu!!", videoLink: "http://tinyurl.com/2d7tawwl" },
    { anime: "Sword Art Online", videoLink: "http://tinyurl.com/23eg7r2b" },
    { anime: "The Seven Deadly Sins", videoLink: "http://tinyurl.com/2cmdoxzn" },
    { anime: "Gintama", videoLink: "http://tinyurl.com/22t7ltz6" },
    { anime: "Magi: The Labyrinth of Magic", videoLink: "http://tinyurl.com/28j4fdun" },
    { anime: "Blue Exorcist (Ao no Exorcist)", videoLink: " http://tinyurl.com/22qd5axo" },
    { anime: "Noragami", videoLink: "http://tinyurl.com/2883da6w" },
    { anime: "Death Note", videoLink: "http://tinyurl.com/27l2bw8v" },
    { anime: "Mob Psycho 100", videoLink: "http://tinyurl.com/239keyan" },
    { anime: "One-Punch Man", videoLink: "http://tinyurl.com/2a8yvxvv" },
    { anime: "Fire Force (En’en no Shouboutai)", videoLink: "" },
    { anime: "Dr. Stone", videoLink: "http://tinyurl.com/2aky3sxz" },
    { anime: "Food Wars!: Shokugeki no Soma", videoLink: "http://tinyurl.com/239vl7sd" },
    { anime: "Toriko", videoLink: "http://tinyurl.com/29qmdffc" },
    { anime: "D.Gray-man", videoLink: "http://tinyurl.com/2cu7gc3x" },
    { anime: "Beelzebub", videoLink: "http://tinyurl.com/23ezu8qd" },
    { anime: "Assassination Classroom (Ansatsu Kyoushitsu)", videoLink: "" },
    { anime: "The Promised Neverland", videoLink: "http://tinyurl.com/2xjtbptv" },
    { anime: "Radiant", videoLink: "http://tinyurl.com/2ys2blxh" },
    { anime: "World Trigger", videoLink: "http://tinyurl.com/2bhtb88s" },
    { anime: "Kuroko’s Basketball (Kuroko no Basket)", videoLink: "http://tinyurl.com/23745zdu" },
    { anime: "Prince of Tennis (Tennis no Ouji-sama)", videoLink: "http://tinyurl.com/295oawn9" },
    { anime: "Eyeshield 21", videoLink: "http://tinyurl.com/26ca3jeg" },
    { anime: "Hajime no Ippo", videoLink: "http://tinyurl.com/29mch9bw" },
    { anime: "Katekyo Hitman Reborn!", videoLink: "http://tinyurl.com/2csbapk6" },
    { anime: "Magi: The Kingdom of Magic", videoLink: "http://tinyurl.com/2ycwggzh" },
    { anime: "Boruto: Naruto Next Generations", videoLink: "http://tinyurl.com/28os7yln" },
    { anime: "Tokyo Ghoul", videoLink: "" },
    { anime: "Parasyte: The Maxim (Kiseijuu: Sei no Kakuritsu)", videoLink: "http://tinyurl.com/2b3x7vyr" },
    { anime: "JoJo's Bizarre Adventure", videoLink: "http://tinyurl.com/26ghyz6g" },
    { anime: "Black Bullet", videoLink: "http://tinyurl.com/2xzgzawz" },
    { anime: "Akame ga Kill!", videoLink: "http://tinyurl.com/27fsqrqf" },


  ],
  isekai: [
    { anime: "Re:Zero - Starting Life in Another World", videoLink: "http://tinyurl.com/2ahvq8os" },
    { anime: "No Game No Life", videoLink: "http://tinyurl.com/27m6slm6" },
    { anime: "Log Horizon", videoLink: "http://tinyurl.com/2666mpmp" },
    { anime: "Overlord", videoLink: "http://tinyurl.com/234l3qe9" },
    { anime: "The Rising of the Shield Hero", videoLink: "http://tinyurl.com/25sjaukx" },
    { anime: "That Time I Got Reincarnated as a Slime", videoLink: "http://tinyurl.com/2yhjskyq" },
    { anime: "Konosuba: God’s Blessing on This Wonderful World!", videoLink: "http://tinyurl.com/267so3vd" },
    { anime: "The Devil Is a Part-Timer!", videoLink: " http://tinyurl.com/25aqzzzh" },
    { anime: "Grimgar, Ashes and Illusions", videoLink: "http://tinyurl.com/2ydql874" },
    { anime: "Drifters", videoLink: "http://tinyurl.com/26u392xu" },
    { anime: "In Another World with My Smartphone", videoLink: "http://tinyurl.com/259r28o5" },
    { anime: "The Saga of Tanya the Evil", videoLink: "http://tinyurl.com/24sql2la" },
    { anime: "Wise Man’s Grandchild", videoLink: "http://tinyurl.com/22hnyy4x" },
    { anime: "Cautious Hero: The Hero Is Overpowered but Overly Cautious", videoLink: "http://tinyurl.com/225t3f5l" },
    { anime: "Restaurant to Another World", videoLink: " http://tinyurl.com/2bq3eeeu" },
    { anime: "Ascendance of a Bookworm", videoLink: "http://tinyurl.com/2ybc8pe9" },
    { anime: "Demon Lord, Retry!", videoLink: "http://tinyurl.com/2b77a3wa" },
    { anime: "The 8th Son? Are You Kidding Me?", videoLink: "http://tinyurl.com/2cer5wqs" },
    { anime: "Knight’s & Magic", videoLink: "http://tinyurl.com/24vcusep" },
    { anime: "Escaflowne", videoLink: "http://tinyurl.com/2dxfbnc6" },
    { anime: "Magic Knight Rayearth", videoLink: "http://tinyurl.com/23ax6l62" },
    { anime: "Gate", videoLink: "http://tinyurl.com/257e2ceq" },
    { anime: "Arifureta: From Commonplace to World’s Strongest", videoLink: "http://tinyurl.com/286bzayq" },
    { anime: "Bofuri: I Don’t Want to Get Hurt, So I’ll Max Out My Defense", videoLink: "http://tinyurl.com/22pedyqv" },
    { anime: "The Misfit of Demon King Academy", videoLink: "http://tinyurl.com/28d54t6p" },
    { anime: "Skeleton Knight in Another World", videoLink: " http://tinyurl.com/22vsupxs" },
    { anime: "The Devil Is a Part-Timer!", videoLink: " http://tinyurl.com/23x2965n" },
    { anime: "I’m the Villainess, So I’m Taming the Final Boss", videoLink: "http://tinyurl.com/2a7geevk" },
    { anime: "The Twelve Kingdoms", videoLink: "http://tinyurl.com/2c57uapn" },
    { anime: "Now and Then, Here and There", videoLink: "http://tinyurl.com/22fhbpmk" },
    { anime: "Vision of Escaflowne", videoLink: "http://tinyurl.com/2ya9khbc" },
    { anime: "Grimgar, Ashes and Illusions", videoLink: "http://tinyurl.com/2bsc4hog" },
    { anime: "Log Horizon", videoLink: "http://tinyurl.com/29tdeyth" },

  ],
  seinen: [
    { anime: "Master Keaton", videoLink: "http://tinyurl.com/25mcjqry" },
    { anime: "Ajin: Demi-Human", videoLink: "http://tinyurl.com/2ybc4mxu" },
    { anime: "After the Rain", videoLink: "http://tinyurl.com/23wlr53l" },
    { anime: "ACCA: 13-Territory Inspection Dept.", videoLink: " http://tinyurl.com/2au6yq43" },
    { anime: "Utawarerumono", videoLink: "http://tinyurl.com/2xnype7a" },
    { anime: "Akagi", videoLink: "http://tinyurl.com/2yqa2gfa" },
    { anime: "Shadows House", videoLink: "http://tinyurl.com/27sq7fja" },
    { anime: "Gangsta", videoLink: "http://tinyurl.com/28fov6vt" },
    { anime: "Golden Kamuy", videoLink: "http://tinyurl.com/2497nyt7" },
    { anime: "Black Lagoon", videoLink: "http://tinyurl.com/226a46rp" },
    { anime: "Paranoia Agent", videoLink: " http://tinyurl.com/2yrw3rnv" },
    { anime: "Rainbow: Nisha Rokubou no Shichinin", videoLink: "http://tinyurl.com/22rphdxs" },
    { anime: "Texhnolyze", videoLink: "http://tinyurl.com/24vptvny" },
    { anime: "Kaiji: Ultimate Survivor", videoLink: "http://tinyurl.com/2ak33co8" },
    { anime: "Welcome to the NHK!", videoLink: "http://tinyurl.com/23c5qkdy" },
    { anime: "Ping Pong the Animation", videoLink: "http://tinyurl.com/2dlzj7u4" },
    { anime: "Planetes", videoLink: "http://tinyurl.com/243ctcum" },
    { anime: "Monster", videoLink: "http://tinyurl.com/2czhbjnc" },
    { anime: "Vinland Saga", videoLink: "http://tinyurl.com/27w9zd6r" },
    { anime: "Ghost in the Shell: Stand Alone Complex", videoLink: "http://tinyurl.com/27pzkmd7" },
    { anime: "Tokyo Ghoul", videoLink: "http://tinyurl.com/28958uxk" },
    { anime: "Berserk", videoLink: "http://tinyurl.com/2ylkd4mv" },
    { anime: "Psycho-Pass", videoLink: "http://tinyurl.com/222bwhwg" },
    { anime: "Death Parade", videoLink: "http://tinyurl.com/2bbdrh4t" },
    { anime: "March Comes in Like a Lion", videoLink: "http://tinyurl.com/27t6hvvn" },
    { anime: "Ergo Proxy", videoLink: "http://tinyurl.com/27tralku" },
    { anime: "Black Bullet", videoLink: "http://tinyurl.com/26x8okh5" },
    { anime: "Hellsing Ultimate", videoLink: "http://tinyurl.com/27g5fh8c" },
    { anime: "Grave of the Fireflies", videoLink: "http://tinyurl.com/297baozy" },
    { anime: "Rainbow: Nisha Rokubou no Shichinin", videoLink: "http://tinyurl.com/25kyfulk" },
    { anime: "91 Days", videoLink: "http://tinyurl.com/2do2x6bo" },
    { anime: "Inuyashiki", videoLink: "http://tinyurl.com/27o9jqha" },
    { anime: "Baccano!", videoLink: "http://tinyurl.com/26xhtea4" },
    { anime: "Jormungand", videoLink: "http://tinyurl.com/23mz5vfz" },
    { anime: "Perfect Blue", videoLink: "http://tinyurl.com/28cp93k3" },
    { anime: "Paprika", videoLink: "http://tinyurl.com/28he43mc" },
    { anime: "Terror in Resonance", videoLink: "http://tinyurl.com/2b7b67kz" },
    { anime: "Gantz", videoLink: "http://tinyurl.com/28tdmmwz" },
    { anime: "Claymore", videoLink: " http://tinyurl.com/2az92x63" },
    { anime: "Witch Hunter Robin", videoLink: "http://tinyurl.com/2cvkqf53" },
    { anime: "Kino’s Journey", videoLink: "http://tinyurl.com/26zh9kvb" },
    { anime: "Speed Grapher", videoLink: "http://tinyurl.com/24cx7uxr" },
    { anime: "Golgo 13", videoLink: "http://tinyurl.com/22kch4af" },
    { anime: "Black Jack", videoLink: "http://tinyurl.com/2d6cyrg5" },
    { anime: "Kaiji: Ultimate Survivor", videoLink: "http://tinyurl.com/2ak33co8" },
  

  ]
};


const sentRecommendations = {
  shonen: [],
  isekai: [],
  seinen: []
};


app.get('/anime', (req, res) => {
  const { genre } = req.query;

  if (!genre || !animeData[genre]) {
    return res.status(400).json({ error: 'Invalid or missing genre' });
  }


  const unsentRecommendations = animeData[genre].filter(
    anime => !sentRecommendations[genre].includes(anime)
  );

  if (unsentRecommendations.length === 0) {

    sentRecommendations[genre] = [];
  }


  const recommendation = unsentRecommendations[Math.floor(Math.random() * unsentRecommendations.length)];


  sentRecommendations[genre].push(recommendation);

  res.json(recommendation);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
