const pictureshot = [
    {
        id:1,
        image:"/images/articles/top.jpg",
        name: '12 dead in California bar shooting',
        content: "Follow Friday’s updates here: ‘It can’t be any worse.’ Thousand Oaks grieves after massacre as questions remain about gunman.HOUSAND OAKS, Calif. — A gunman firing seemingly at random killed a dozen people inside a crowded country-music bar here late Wednesday, authorities said, a toll that included a sheriff’s deputy who had raced inside to confront the attacker. Authorities said the gunman — identified as Ian David Long, a 28-year-old Marine veteran who was cleared by a mental-health specialist after an encounter with police earlier this year — was found dead inside after apparently killing himself. Ventura County Sheriff Geoff Dean said Thursday morning that investigators have not been able to determine a motive. The bloodshed spread throughout the Borderline Bar and Grill, a popular nightspot in Thousand Oaks, Calif., a city near Los Angeles. When the gunfire began, people were line dancing during the venue’s “College Country Night,” witnesses said. That detail evoked the massacre of 58 people at a country-music festival in Las Vegas a little more than a year earlier — a connection deepened when some of those who escaped Borderline said they had also survived that massacre. Police said Long, wearing a black sweater and wielding a 45-caliber Glock handgun with an extended magazine, approached the bar and shot a security guard standing outside. He then headed in and shot other employees before turning his fire on patrons, Dean said. “It’s a horrific scene in there,” Dean, who is set to retire Friday night, told reporters. “There’s blood everywhere.”"
    },

    {
        id:2,
        image:"/images/articles/center.jpg",
        name: '69-year-old Dutchman starts legal bid to become 20 years younger',
        content: '"(CNN)Lying about your age on dating websites is usually considered a bit of a faux pas. Now a 69-year-old Dutchman wants the courts to make him officially 20 years younger, likening the change to identifying as transgender. Emile Ratelband has launched a legal bid to change his age by 20 years in order to improve his chances with women on dating applications like Tinder and help with job prospects, according to reports in Dutch media. "You can change your name. You can change your gender. Why not your age? Nowhere are you so discriminated against as with your age," Dutch paper De Telegraaf quoted Ratelband as saying. On Monday, he asked a court in his hometown of Arnhem, in the east of the country, for his date of birth to be changed from March 11, 1949 to March 11, 1969. He told the court that he "suffers" as a 69-year-old and has been feeling "20, 25 years younger" than his official age, according to Dutch newspaper Algemeen Dagblad.' 
    },

    {
        id:3,
        image:"/images/articles/foot.jpg",
        name: "Brazilian Grand Prix: Reliving Lewis Hamilton's first world title 10 years on",
    },
]

export const getArticlesMap = (array) => {
    return array.reduce((map,article)=>({
        ...map,
        [article.id]:article,
    }),{})
}  


export default pictureshot