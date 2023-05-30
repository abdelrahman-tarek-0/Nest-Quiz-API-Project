interface QuizType {
    id: string;
    quiz: string;
    type: 'single' | 'multi';
    answers : string[];
    correctAns?: string | string[];
}


export {QuizType}