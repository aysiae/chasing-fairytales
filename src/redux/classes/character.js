class Character {
    constructor(img, first, middle, last, gender, nicknames, birthday, birthplace, age,
         astrology, residence, occupation, timeline, universe, moralAlign, 
         ethnicity, languages, parents, siblings, children, shipStatus, loveType, loveLang, sexuality, 
         romanticism, type, abilities) {
            this.img = img;
            this.name = {
                first,
                middle,
                last
            }
            this.gender = gender;
            this.nicknames = nicknames; //['margot','m','mar]
            this.birth = {
                birthplace,
                birthday,
                astrology
            }
            this.age = age;
            this.residence = residence;
            this.occupation = occupation;
            this.timeline = timeline;
            this.universe = universe;
            this.moralAlign = moralAlign;
            this.ethnicity = ethnicity; // ['korean', 'japanese', 'american']
            this.languages = languages; // ['english']
            this.family = {
                parents,
                siblings,
                children
            }
            this.shipStatus = shipStatus;
            this.loveType = loveType;
            this.loveLang = loveLang;
            this.sexuality = sexuality;
            this.romanticism = romanticism;
            this.supernatural = {
                type, 
                abilities 
            }
    }
}

export default Character;