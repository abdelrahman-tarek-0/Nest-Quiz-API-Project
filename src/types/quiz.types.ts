interface QuizType {
    id: string;
    title: string;
    description:string;
    choices : string[];
    correctAns?: string | string[];
}
interface QuizTypePost {
    title: string;
    description: string;
    choices : string[];
    correctAns: string | string[];
}

export {QuizType,QuizTypePost}