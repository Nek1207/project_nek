let authorsList = [
    'Diabarha', 'Aeswa', 'OST Alien Shooter', 'knife loves me', 'FREE.99', 'Unicorn On Ketamine', 'Juxicl Antierr Hylna', 'Tim Ballista', 'Crystal Castles', 'CRIM3S', 'OST Half-Life: Opposing Force', 'ATC', 'six impala', 'Mr.Kitty', 'Dimrain47', 'Xtrullor', 'Panda Party', 'Tomandandy', 'АИГЕЛ', 'PACOL.', 'Hawawa', 'Kevin MacLeod', 'IC3PEAK', 'Ludwig Goransson', '1 800 PAIN', 'where swans will weep', 'dekma', 'Skrillex', 'OST Half-Life 2', 'Asr', 'Лемондэй', 'Awakesy!', 'KzX', 'Bring Me The Horizon', 'Kelly Bailey', 'Ozoi The Maid', 'OST Entropy : Zero 2', 'Cyclone', 'TR\\ER (Truss & Tessela)', 'Kanye West', 'White Ring', 'zavet', 'Wiwek', 'ДЕТИ RAVE', 'Dom and Roland', 'mr-jazzman', 'Madam Snowflake', 'Alice Glass', 'Три дня дождя', 'Darkblack XIII', 'OST Mafia: The City of Lost Heaven', 'Aphex Twin', 'Hanatarashi', 'OST DOOM', 'Kid2Will', 'Molchat Doma', 'CUPSIZE', 'Kill/Joy', 'Skryptonite', 'кухня', 'Avenuepluggg', 'Marilyn Manson', 'Yair Albeg Wein', 'Or Kribos', 'Nexus', 'Arca', 'F-777', 'Shermanology', 'GRX', 'Sewerslvt', 'Boy Harsher', 'KOMPROMAT', 'chernoburkv', 'J Rongson', 'Mefjus', 'MaelouX', 'AWOLNATION', 'OST Project Borealis', 'Trent Reznor', 'Aticuss Ross', 'T Ξ X Λ S', 'siouxxie', 'meganeko', 'Carpenter Brut', 'GHOSTEMANE', 'ShadowZN', 'Jomekka', 'DGO', 'OST East vs West', 'OST Alien Shooter 2', 'Foreign Beggars & Bare Noize', 'Raiser', 'Teddy Killerz', 'MoxiFloxi', 'Mudvayne', 'GasteL', 'Kurwastyle Project', 'Brighter Death Now', 'Friction', 'The Prodigy', 'Murriosity', 'Zomboy', 'Action Time', 'SOLOVYOVA', 'ZIBOROV', 'PHARAOH', 'Death Grips', 'Паулина Андреева', `OST Five Night at Freddy's: Sister Location`, 'КУОК', 'ailie', 'New Candys', 'Sukablyat', 'PICTUREPLANE', 'Palina', 'SADWRIST', 'm1dy', 'DrPhonics', 'CRASPORE', 'Ezekiel', 'fenix.mp3', 'OST Geometry Dash', 'C418', 'System Of A Down', '100gecs', 'Snooddood', 'The Cardigans', 'Xfobia', 'Liue', 'Shiro Sagisu', 'Кишлак', 'Knife Party', 'Sensi Affect', 'ET16', 'Gregor McMurray', 'OST World War Z', 'ANGUISH', 'EXILED', 'elfass', 'Лубенников', 'Наставшевс', 'ColdBreakz', 'SLAVA MARLOW', 'S3RL', 'dj-Nate', 'Paul Haslinger', 'Электрофорез', 'Луна', 'Егор и Опизденевшие', 'ShadowBeatz', 'Maddie Ashman', 'SUICIDE SILENCE', 'Fred again..', 'Flowdan', 'cyriak', 'Sophiaaaahjkl;8901', 'Nirvana', 'Daddy Yankey', 'Pit Bull', 'Daft Punk', 'Dion Timmer', 'ЧЗ', 'РО', 'Goblin', 'Robert Smith', 'The Cure', 'Dex Arson', 'OST Half-Life 2: Episode One', 'TroyBoi', 'The Chemical Brothers', 'Marius Masalar', 'redchinawave', 'i61', 'SYBYR', 'Elevation', 'Die Antwoord', 'Warak', 'ETERNITY ZONE', 'Loopop', `KRAK'N`, 'NIGHTkilla', 'Zbigniew Preisner', 'Royksopp', 'Robyn', 'Kunteinyr', 'Live Last', 'Eva Simons', 'Sidney Samson', 'zheani', 'Frisco', 'Hahapoison', 'Rustie', 'D Double E', 'Ndemic Creations', 'Sonny Moore', 'Aria Fredda', 'Slackk', 'DAGames', 'Meg Myers', 'DEV', 'Mareux', 'The Living Tombstone', 'MPIA3', 'Dirty Palm', 'Nat James', 'Tenobidoris', 'Waterflame', 'Matt Nash', 'Childish Gambino', 'awen', 'Relanium', 'Erik Arbores', 'By CoxX', 'Rogue', 'CheapeX', 'Tim Haywood', 'OST Zuma Deluxe', 'YunKe', 'ParagonX9', 'OST Yume Nikki', 'OST Undertale', 'Thought Bot', 'The Caretaker', 'Redslash', 'French Montana', 'Swae Lee', 'ENV', 'Dariacore', 'The Crazy Frogs', 'Solkrieg', 'REPULSIVE', 'Naughty Boy', 'Sam Smith', 'martynenko', 'Moonlight', 'Kalwi', 'Remi', 'JPB', 'Ashley Apollodor', 'JAKARTA', 'ILONA', 'HOMIE', 'Holly Dolly', 'Stonebank', 'EMERL', 'Evanescence', 'Eric Prydz', 'Eminem', 'Ecstasy club', 'Dvar', 'DJ Snake', 'Lil Jon', 'Desireless', 'Benassi Bros', 'Razihel', 'Trentino', 'FEARSTbeats', 'Speedcore Master', 'MK2', 'Aero Chord', 'Slipknot', 'PEARLY PRIDE', 'Edmofo', 'Emma Peters', 'DJ Bibberrr', 'B45H', 'Creo', 'elysian', 'Erika de Casier', 'Lieless', 'Djjaner', 'Nighthawk22', 'МУККА', 'OST Entropy : Zero', 'Spencer Bagget', 'Chris Jensen', 'OST Prospekt', 'Хаски', 'ПОШЛАЯ МОЛЛИ', 'ooes', 'MORGENSHTERN', 'Dj Luck', 'Mc Neat', 'twenty one pilots', 'emoslut666', 'Timmy Trumpet', 'Savage', 'Lady Gaga', 'Грибы', 'Katy Perry', 'LMFAO', 'Sheck Wes', 'Стас Экстаз', 'PSY', 'baby keen', 'DJ SMASH', 'Post Malone', '21 Savage', 'Пика', 'Alex Ferrari', 'Eric Prydz', 'Floyd', 'ILLIT', 'AngelicAria', 'BUSHIDO ZHO', 'Mr Scruff', 'Boulevard Depo', 'goreshit', 'BONKERS', 'Cartoon', 'Lost Sky', 'Chris Linton', 'Deftones', 'Kxllswxtch', 'Агата Кристи', 'YATASHIGANG', 'ZWE1HVNDXR', 'Alice Gas', 'N95', '17 SEVENTEEN', 'AngelicAria', 'Cephei Mc', 'Camtasia Music', 'NandinAnubis', 'Hatsune Miku', '444', 'КРОСЫ', 'Kurokotei'
];

authorsList.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

const searchInput = document.getElementById('searchInput');
const searchMenu = document.getElementById('searchMenu');

searchMenu.innerHTML = `<p>There will be the few matches.</p>`;
// searchMenu.style.display = 'none';
// if ((input.value == '') || (input.value == ' ')) {



searchInput.addEventListener('input', function() {
    const inputValue = searchInput.value.toLowerCase();
    searchMenu.innerHTML = ``;

    if (searchInput.value.length === 0) {
        searchMenu.innerHTML = `<p>There will be the few matches.</p>`;
        // console.log('none');
    }

    if (inputValue)
    {
        const filteredCountries = authorsList.filter(country => country.toLowerCase().startsWith(inputValue));
        filteredCountries.forEach(country => {
            const li = document.createElement('li');
            li.textContent = country;
            li.addEventListener('click', function() {
                searchInput.value = country;
                searchMenu.innerHTML = '';
            });
            searchMenu.appendChild(li);
        });
    }
});


if (searchInput.value.length > 1) {
        searchMenu.innerHTML = `<p>There will be the few matches.</p>`;

}



