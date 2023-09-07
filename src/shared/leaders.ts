import bgImageMedium from "../assets/gameSliderItem.png";

export interface LeadersItem {
    id: string;
    name: string;
    position: string;
    profilePhoto: string;
    progressData: {
        points: number;
    };
    statistics: {
        gamesPlayed: number;
        winCount?: number;
    };
}

export interface GameItem {
    id: string;
    title: string;
}


export const gamesList: GameItem[] = [
    {
        id: "1",
        title: "Юнга Мур и большая стройка котов-пиратов",
    },
    {
        id: "2",
        title: "Экология",
    },
    {
        id: "battleofminds",
        title: "Борьба Умов",
    },
    {
        id: "4",
        title: "Время Истории",
    },
    {
        id: "attentiontrainer",
        title: "Тренажер внимания",
    },
];

export const LEADERS_CAROUSEL_DATA = [
    { img: bgImageMedium, id: "1" },
    { img: bgImageMedium, id: "2" },
    { img: bgImageMedium, id: "battleofminds" },
    { img: bgImageMedium, id: "4" },
    { img: bgImageMedium, id: "attentiontrainer" },
];
