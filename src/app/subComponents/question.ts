import { Answer } from "./answer";

export interface Question {
    text: string;
    title: string;
    image: string;
    position: number;
    possibleAnswers: Answer[];
}