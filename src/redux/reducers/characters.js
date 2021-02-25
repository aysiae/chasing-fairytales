import Character from '../classes/character';

let initialState = {chars: [
    new Character('https://64.media.tumblr.com/307d8e28d639e2d68d767ee1f37269cc/9f34ae26dac5a721-43/s540x810/7579b59d43b5c8956a59707d64ed38ee36f9f282.jpg',
    'Ransom', 'Crimson','Salinger', 'male', null, 'October 29, 1885',
     'New York City, NY', '"29"', ['Scorpio', 'Pisces', 'Libra'], 
     'Seattle, WA', ['Fashion Designer', 'Mercenary'], 'Present Canon', 'Underworld Corp', 
     'chaotic evil', ['French','Roman', 'English'], ['French', 'English'],
      ['Laurens Salinger', 'Mirage H\'elfain'], ['Roulette Salinger', 'Riot Salinger', 'Rogue Salinger'], null, 
      false, 'eros', ['Being treated like a god'], 'bisexual', 'biromantic', 'Half Demon', 
      ['Supernatural Prowess','Immortality','Compulsion & Mind Control' , 'Shadow Step','Moonlight Invisibility', 'Conjuration & Summoning']
      ),
      new Character('https://64.media.tumblr.com/96d7d6603a916ce2a2fe79c5755275a9/bac203318af3160a-ad/s500x750/254166ace5f4a8f04da71b57f48081bba796b9af.jpg',
      'Roulette', 'Fury', 'Salinger', 'female', ['Rue'], 'January 1, 1884', 'Paris, France', '"31"',
      ['Capricorn','Taurus', 'Capricorn'], 'San Francisco, CA', ['Mercernary', 'Scholar'], 'Present Canon','Underworld Corp', 'True Evil',
      ['French','Roman','English'], ['French', 'English'], ['Laurens Salinger', 'Mirage H\'elfain'],
      ['Ransom Salinger', 'Riot Salinger', 'Rogue Salinger'], null, false, 'eros', ['Physical Touch'], 'hetersosexual',
      'aromantic', 'Half Demon', ['Supernatural Prowess','Immortality','Compulsion & Mind Control' , 'Shadow Step','Moonlight Invisibility', 'Conjuration & Summoning', 'Bend Reality', 'Stop Time'] 
      ),
      new Character('https://64.media.tumblr.com/92b4da1cb3b58b21276f8d2f9118cf35/212c25435150a83b-3b/s400x600/e1df8228c15110c204f00015ced77ceef6cf3169.jpg',
      'Riot', 'Emperor', 'Salinger', 'male', null, 'December 31, 1885', 'New York City, New York', '"28"',
      ['Capricorn','Capricorn', 'Capricorn'], 'Portland, OR', ['Mercernary', 'Interior Designer'], 'Present Canon','Underworld Corp', 'Lawful Neutral',
      ['French','Roman','English'], ['French', 'English'], ['Laurens Salinger', 'Mirage H\'elfain'],
      ['Roulette Salinger', 'Ransom Salinger', 'Rogue Salinger'], null, false, 'eros', ['Physical Touch', 'Quality Time'], 'hetersosexual',
      'heteroromantic', 'Half Demon', ['Supernatural Prowess','Immortality','Compulsion & Mind Control' , 'Shadow Step','Moonlight Invisibility', 'Conjuration & Summoning'] 
      ),
]}

export default (state=initialState, action) => {
    let {type, payload} = action;
    switch(type) {
        // do something
        default:
            return state;
    }
}