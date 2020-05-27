export class NgxRecommServiceCase {
    static CASE_1 = {
        case: [
            {
                name : 'Us',
                categories : [
                  'horror',
                  'thriller',
                  'mystery',
                  'psychological horror'
                ]
            },
            {
                name : 'Ad Astra',
                categories : [
                  'adventure',
                  'fantasy',
                  'mystery',
                  'thriller',
                  'sci-fi'
                ]
            },
            {
                name: 'After',
                categories: [
                  'drama',
                  'romance'
                ]
              },
              {
                name : 'Aladdin',
                categories : [
                  'adventure',
                  'family',
                  'fantasy',
                  'musical',
                  'romance'
                ]
            },
            {
                name: 'Angel Has Fallen',
                categories: [
                  'action',
                  'thriller'
                ]
              },
              {
                name: 'Annabelle Comes Home',
                categories: [
                  'supernatural',
                  'horror'
                ]
              },
              {
                name: 'Avengers: Endgame',
                categories: [
                    'action',
                    'sci-fi',
                    'fantasy'
                ]
              },
              {
                name: 'Bacurau',
                categories: [
                  'drama',
                  'western',
                  'splatter',
                  'Fantasy',
                  'sci-fi'
                ]
              },
              {
                name: 'Captain Marvel',
                categories: [
                  'action',
                  'adventure',
                  'sci-fi'
                ]
              },
              {
                name: 'Dark Phoenix',
                categories: [
                  'action',
                  'adventure',
                  'sci-fi'
                ]
              }
        ],
        input: [
            'action'
        ],
        basedOn: 'categories',
        result: [
            {
                name: 'Angel Has Fallen',
                categories: [
                  'action',
                  'thriller'
                ]
              },
              {
                name: 'Avengers: Endgame',
                categories: [
                    'action',
                    'sci-fi',
                    'fantasy'
                ]
              },
              {
                name: 'Captain Marvel',
                categories: [
                  'action',
                  'adventure',
                  'sci-fi'
                ]
              },
              {
                name: 'Dark Phoenix',
                categories: [
                  'action',
                  'adventure',
                  'sci-fi'
                ]
              }
        ]
    };
    static CASE_2 = {
        case: [
            {
                name : 'Us',
                year : 2019,
                runtime : 116,
                categories : [
                  'horror',
                  'thriller',
                  'mystery',
                  'psychological horror'
                ],
                'release-date' : '2019-05-22',
                director : 'Jordan Peele',
                writer : [
                  'Jordan Peele'
                ],
                actors : [
                  'Lupita Nyong\'o',
                  'Madison Curry',
                  'Ashley McKoy',
                  'Winston Duke',
                  'Shahadi Wright Joseph',
                  'Evan Alex',
                  'Elisabeth Moss',
                  'Tim Heidecker',
                  'Yahya Adbul-Mateen II',
                  'Anna Diop',
                  'Cali Sheldon',
                  'Noelle Sheldon',
                  'Napiera Groves',
                  'Duke Nicholson',
                  'Kara Hayward',
                  'Nathan Harrington',
                  'Dustin Ybarra',
                  'Alan Frazier',
                  'Lon Gowan',
                  'Jordan Peele'
                ],
                storyline : 'A family\'s serene beach vacation turns to chaos when their doppelgängers appear and begin to terrorize them.'
            },
            {
                name : 'Ad Astra',
                year : 2019,
                runtime : 124,
                categories : [
                  'adventure',
                  'fantasy',
                  'mystery',
                  'thriller',
                  'sci-fi'
                ],
                'release-date' : '2019-09-29',
                director : 'James Gray',
                writer : [
                  'James Gray',
                  'Ethan Gross'
                ],
                actors : [
                  'Brad Pitt',
                  'Dede Gardner',
                  'Jeremy Kleiner',
                  'James Gray',
                  'Anthony Katagas',
                  'Rodrigo Teixeira',
                  'Arnon Milchan'
                ],
                storyline : 'Thirty years ago, Clifford McBride led a voyage into deep space, but the ship and crew were never heard from again. Now his son -- a fearless astronaut -- must embark on a daring mission to Neptune to uncover the truth about his missing father and a mysterious power surge that threatens the stability of the universe.'
            },
            {
                name: 'After',
                year: 2019,
                runtime: 105,
                categories: [
                  'drama',
                  'romance'
                ],
                'release-date': '2019-04-12',
                director: 'Jenny Gage',
                writer: [
                  'Tom Betterton',
                  'Tamara Chestna',
                  'Jenny Gage',
                  'Susan McMartin',
                  'Anna Todd'
                ],
                actors: [
                  'Josephine Langford',
                  'Hero Fiennes Tiffin',
                  'Khadijha Red Thunder',
                  'Dylan Arnold',
                  'Shane Paul McGhie',
                  'Samuel Larsen',
                  'Inanna Sarkis',
                  'Selma Blair',
                  'Pia Mia',
                  'Swen Temmel',
                  'Meadow Williams',
                  'Peter Gallagher',
                  'Jennifer Beals',
                  'Michael Hull',
                  'Sarah Jorge León',
                  'Chris Kontopidis',
                  'Rebecca Lee Robertson',
                  'ShannonMayers',
                  'ByronWigfall',
                  'JohnEvanko',
                  'Mark Axelowitz',
                  'Paul Fox'
                ],
                storyline: 'A young woman falls for a guy with a dark secret and the two embark on a rocky relationship. Based on the novel by Anna Todd.'
              },
              {
                name : 'Aladdin',
                year : 2019,
                runtime : 128,
                categories : [
                  'adventure',
                  'family',
                  'fantasy',
                  'musical',
                  'romance'
                ],
                'release-date' : '2019-05-22',
                director : 'Guy Ritchie',
                writer : [
                  'John August',
                  'Guy Ritchie'
                ],
                actors : [
                  'Will Smith',
                  'Mena Massoud',
                  'Naomi Scott',
                  'Marwan Kenzari',
                  'Navid Negahban',
                  'Nasim Pedrad',
                  'Billy Magnussen',
                  'Jordan A. Nash',
                  'Taliyah Blair',
                  'Aubrey Lin',
                  'Amir Boutrous',
                  'Numan Acar',
                  'Omari Bernard',
                  'Nathaniel Ellul',
                  'Sebastien Torkia'
                ],
                storyline : 'A kind-hearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true.'
            },
            {
                name: 'Angel Has Fallen',
                year: 2019,
                runtime: 121,
                categories: [
                  'action',
                  'thriller'
                ],
                'release-date': '2019-08-21',
                director: 'Ric Roman Waugh',
                writer: [
                  'Ric Roman Waugh',
                  'Robert Mark Kamen',
                  'Matt Cook'
                ],
                actors: [
                  'Gerard Butler',
                  'Morgan Freeman',
                  'Piper Perabo'
                ],
                storyline: 'Secret Service Agent Mike Banning is framed for the attempted assassination of the President and must evade his own agency and the FBI as he tries to uncover the real threat.'
              },
              {
                name: 'Annabelle Comes Home',
                year: 2019,
                runtime: 106,
                categories: [
                  'supernatural',
                  'horror'
                ],
                'release-date': '2019-06-26',
                director: 'Gary Dauberman',
                writer: [
                  'James Wan',
                  'Gary Dauberman'
                ],
                actors: [
                  'Mckenna Grace',
                  'Madison Iseman',
                  'Katie Sarife',
                  'Patrick Wilson',
                  'Vera Farmiga'
                ],
                storyline: 'Determined to keep Annabelle from wreaking more havoc, demonologists Ed and Lorraine Warren bring the possessed doll to the locked artifacts room in their home, placing her \'safely\' behind sacred glass and enlisting a priest\'s holy blessing. But an unholy night of horror awaits as Annabelle awakens the evil spirits in the room, who all set their sights on a new target--the Warrens\' ten-year-old daughter, Judy, and her friends.'
              },
              {
                name: 'Avengers: Endgame',
                year: 2019,
                runtime: 181,
                categories: [
                    'action',
                    'sci-fi',
                    'fantasy'
                ],
                'release-date': '2019-04-26',
                director: [
                    'Anthony Russo',
                    'Joe Russo'
                ],
                writer: [
                    'Christopher Markus',
                    'Stephen McFeely'
                ],
                actors: [
                    'Robert Downey Jr.',
                    'Chris Evans',
                    'Mark Ruffalo',
                    'Chris Hemsworth',
                    'Scarlett Johansson',
                    'Jeremy Renner',
                    'Don Cheadle',
                    'Paul Rudd',
                    'Brie Larson',
                    'Karen Gillan',
                    'Danai Gurira',
                    'Benedict Wong',
                    'Jon Favreau',
                    'Bradley Cooper',
                    'Gwyneth Paltrow',
                    'Josh Brolin'
                ],
                storyline: 'Now that Thanos has put his plan into action in \'Avengers: Infinity War\', it\'s time to find a way to undo what happened.'
              },
              {
                name: 'Bacurau',
                year: 2019,
                runtime: 132,
                categories: [
                  'drama',
                  'western',
                  'splatter',
                  'Fantasy',
                  'sci-fi'
                ],
                'release-date': '2019-05-15',
                director: 'Kleber Mendonça Filho',
                writer: [
                  'Kleber Mendonça Filho',
                  'Juliano Dornelles'
                ],
                actors: [
                  'Sônia Braga',
                  'Udo Kier',
                  'Bárbara Colen'
                ],
                storyline: 'Shortly after the death of Dona Carmelita, residents of a small town located in the Brazilian Sertão called Bacurau discover that the community is no longer on any map.'
              },
              {
                name: 'Captain Marvel',
                year: 2019,
                runtime: 125,
                categories: [
                  'action',
                  'adventure',
                  'sci-fi'
                ],
                'release-date': '2019-03-08',
                director: 'Anna Boden, Ryan Fleck',
                writer: [
                  'Anna Boden',
                  'Ryan Fleck',
                  'Geneva Robertson-Dworet'
                ],
                actors: [
                  'Brie Larson',
                  'Samuel L. Jackson',
                  'Ben Mendelsohn',
                  'Jude Law',
                  'Annette Bening',
                  'Djimon Hounsou',
                  'Lee Pace',
                  'Lashana Lynch',
                  'Gemma Chan',
                  'Clark Gregg',
                  'Rune Temte',
                  'Algenis Perez Soto',
                  'Mckenna Grace',
                  'Akira Akbar',
                  'Matthew Maher',
                  'Chuku Modu',
                  'Vik Sahay',
                  'Colin Ford',
                  'Kenneth Mitchell',
                  'Stephen A. Chang',
                  'Pete Ploszek',
                  'Matthe \'Spider\' Kimmel',
                  'Stephen \'Cajun\' Del Bagno',
                  'London Fuller',
                  'Azari Akbar',
                  'Mark Daugherty',
                  'Diana Toshiko',
                  'Barry Curtis',
                  'Emily Ozrey',
                  'Abigaille Ozrey',
                  'Marilyn Brett',
                  'Stan Lee',
                  'Robert Kazinsky',
                  'Nelson Franklin',
                  'Patrick Brennan',
                  'Patrick Gallagher',
                  'Ana Ayora',
                  'Lyonetta Flowers',
                  'Rufus Flowers',
                  'Sharon Blynn',
                  'Auden L. Ophuls',
                  'Matthew Bellows',
                  'Richard Zeringue',
                  'Duane Henry',
                  'Reggie',
                  'Gonzo',
                  'Archie',
                  'Rizzo'
                ],
                storyline: 'Set in the 1990s, Marvel Studios\' "Captain Marvel" is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe that follows the journey of Carol Danvers as she becomes one of the universe\'s most powerful heroes. While a galactic war between two alien races reaches Earth, Danvers finds herself and a small cadre of allies at the center of the maelstrom.'
              },
              {
                name: 'Dark Phoenix',
                year: 2019,
                runtime: 114,
                categories: [
                  'action',
                  'adventure',
                  'sci-fi'
                ],
                'release-date': '2019-06-05',
                director: 'Simon Kinberg',
                writer: [
                  'Simon Kinberg'
                ],
                actors: [
                  'James McAvoy',
                  'Michael Fassbender',
                  'Jennifer Lawrence',
                  'Sophie Turner',
                  'Jessica Chastain',
                  'Nicholas Hoult',
                  'Tye Sheridan',
                  'Alexandra Shipp',
                  'Evan Peters'
                ],
                storyline: 'Jean Grey begins to develop incredible powers that corrupt and turn her into a Dark Phoenix. Now the X-Men will have to decide if the life of a team member is worth more than all of humanity.'
              }
        ],
        input: [
            'action'
        ],
        basedOn: 'categories',
        result: [
            {
                name: 'Angel Has Fallen',
                year: 2019,
                runtime: 121,
                categories: [
                  'action',
                  'thriller'
                ],
                'release-date': '2019-08-21',
                director: 'Ric Roman Waugh',
                writer: [
                  'Ric Roman Waugh',
                  'Robert Mark Kamen',
                  'Matt Cook'
                ],
                actors: [
                  'Gerard Butler',
                  'Morgan Freeman',
                  'Piper Perabo'
                ],
                storyline: 'Secret Service Agent Mike Banning is framed for the attempted assassination of the President and must evade his own agency and the FBI as he tries to uncover the real threat.'
              },
              {
                name: 'Avengers: Endgame',
                year: 2019,
                runtime: 181,
                categories: [
                    'action',
                    'sci-fi',
                    'fantasy'
                ],
                'release-date': '2019-04-26',
                director: [
                    'Anthony Russo',
                    'Joe Russo'
                ],
                writer: [
                    'Christopher Markus',
                    'Stephen McFeely'
                ],
                actors: [
                    'Robert Downey Jr.',
                    'Chris Evans',
                    'Mark Ruffalo',
                    'Chris Hemsworth',
                    'Scarlett Johansson',
                    'Jeremy Renner',
                    'Don Cheadle',
                    'Paul Rudd',
                    'Brie Larson',
                    'Karen Gillan',
                    'Danai Gurira',
                    'Benedict Wong',
                    'Jon Favreau',
                    'Bradley Cooper',
                    'Gwyneth Paltrow',
                    'Josh Brolin'
                ],
                storyline: 'Now that Thanos has put his plan into action in \'Avengers: Infinity War\', it\'s time to find a way to undo what happened.'
              },
              {
                name: 'Captain Marvel',
                year: 2019,
                runtime: 125,
                categories: [
                  'action',
                  'adventure',
                  'sci-fi'
                ],
                'release-date': '2019-03-08',
                director: 'Anna Boden, Ryan Fleck',
                writer: [
                  'Anna Boden',
                  'Ryan Fleck',
                  'Geneva Robertson-Dworet'
                ],
                actors: [
                  'Brie Larson',
                  'Samuel L. Jackson',
                  'Ben Mendelsohn',
                  'Jude Law',
                  'Annette Bening',
                  'Djimon Hounsou',
                  'Lee Pace',
                  'Lashana Lynch',
                  'Gemma Chan',
                  'Clark Gregg',
                  'Rune Temte',
                  'Algenis Perez Soto',
                  'Mckenna Grace',
                  'Akira Akbar',
                  'Matthew Maher',
                  'Chuku Modu',
                  'Vik Sahay',
                  'Colin Ford',
                  'Kenneth Mitchell',
                  'Stephen A. Chang',
                  'Pete Ploszek',
                  'Matthe \'Spider\' Kimmel',
                  'Stephen \'Cajun\' Del Bagno',
                  'London Fuller',
                  'Azari Akbar',
                  'Mark Daugherty',
                  'Diana Toshiko',
                  'Barry Curtis',
                  'Emily Ozrey',
                  'Abigaille Ozrey',
                  'Marilyn Brett',
                  'Stan Lee',
                  'Robert Kazinsky',
                  'Nelson Franklin',
                  'Patrick Brennan',
                  'Patrick Gallagher',
                  'Ana Ayora',
                  'Lyonetta Flowers',
                  'Rufus Flowers',
                  'Sharon Blynn',
                  'Auden L. Ophuls',
                  'Matthew Bellows',
                  'Richard Zeringue',
                  'Duane Henry',
                  'Reggie',
                  'Gonzo',
                  'Archie',
                  'Rizzo'
                ],
                storyline: 'Set in the 1990s, Marvel Studios\' "Captain Marvel" is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe that follows the journey of Carol Danvers as she becomes one of the universe\'s most powerful heroes. While a galactic war between two alien races reaches Earth, Danvers finds herself and a small cadre of allies at the center of the maelstrom.'
              },
              {
                name: 'Dark Phoenix',
                year: 2019,
                runtime: 114,
                categories: [
                  'action',
                  'adventure',
                  'sci-fi'
                ],
                'release-date': '2019-06-05',
                director: 'Simon Kinberg',
                writer: [
                  'Simon Kinberg'
                ],
                actors: [
                  'James McAvoy',
                  'Michael Fassbender',
                  'Jennifer Lawrence',
                  'Sophie Turner',
                  'Jessica Chastain',
                  'Nicholas Hoult',
                  'Tye Sheridan',
                  'Alexandra Shipp',
                  'Evan Peters'
                ],
                storyline: 'Jean Grey begins to develop incredible powers that corrupt and turn her into a Dark Phoenix. Now the X-Men will have to decide if the life of a team member is worth more than all of humanity.'
              }
        ]
    };
}
