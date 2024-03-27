import { API_URL } from "./general";

export interface LeadersItem {
    id: string;
    name: string;
    grade?: number;
    position: string;
    profilePhoto: string;
    progressData: {
        points?: number;
        totalPoints?: number;
    };
    statistics?: {
        gamesPlayed: number;
        winCount?: number;
    };
    displayInLeaderboards?: boolean
}

export interface GameItem {
    id: string;
    title: string;
}

export interface LeadersPopupItem {
    name: string;
    grade?: number;
    position: string;
    totalPoints?: number;
    gamesPlayed: number;
}

export const LEADERS_GAMES_LIST: GameItem[] = [
    // {
    //     id: "1",
    //     title: "Юнга Мур и большая стройка котов-пиратов",
    // },
    // {
    //     id: "2",
    //     title: "Экология",
    // },
    // {
    //     id: "battleofminds",
    //     title: "Борьба Умов",
    // },
    // {
    //     id: "4",
    //     title: "Время Истории",
    // },
    {
        id: "arithmetic",
        title: "Арифметика",
    },
    {
        id: "arithmeticchain",
        title: "Арифметическая цепочка",
    },
    {
        id: "battleofminds",
        title: "Борьба умов",
    },
    {
        id: "timeofhistory",
        title: "Время истории",
    },
    {
        id: "grammarspaceshooter",
        title: "Граматический шутер",
    },
    {
        id: "logictrainer",
        title: "Тренажер логики",
    },
    {
        id: "attentiontrainer",
        title: "Тренажер внимания",
    },
    {
        id: "tanksquiz",
        title: "TanksQuiz",
    }
];

export const fetchLeadersDataById = async (gameId: string, userId?: string) => {
    try {
        const userIdParam = userId ? `&userId=${userId}` : '';
        console.log("Trying fetching game with id: " + gameId)
        const res = await fetch(`${API_URL}/DownloadTop10LeaderboardForDashboard?game=${gameId}${userIdParam}`);
        return await res.json()
    } catch (error) {
        console.error(error)
    }
}

export const hideUserInLeadersTable = async (userId: string) => {
    try {
        const res = fetch(
            `${API_URL}/UpdateUserLeaderboardDisplayStatus?userId=${userId}&enabled=false`
        )
        return res
    } catch (error) {
        console.error(error)
    }
}

export const DEFAULT_PROFILE_PHOTO = 'https://storage.googleapis.com/dzgamesdebug/battleofminds/badge_3.png'

export const DEFAULT_USER_ID = "7c35493ffd7316a4322fe6061a01cc4c8ebbb8b0";

export type SortType = '' | 'asc' | 'desc';
