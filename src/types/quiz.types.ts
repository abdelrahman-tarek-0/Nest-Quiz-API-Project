interface QuizType {
    id: string;
    title: string;
    description:string;
    choices : string[];
    correctAns?: string | string[];
    createdAt:Date
}
interface QuizTypePost {
    title: string;
    description: string;
    choices : string[];
    correctAns: string | string[];
}

export {QuizType,QuizTypePost}