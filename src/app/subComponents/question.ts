import { Answer } from "./answer";

export interface Question {
    id: number;
    text: string;
    title: string;
    image: string;
    position: number;
    possibleAnswers: Answer[];
}
