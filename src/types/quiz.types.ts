interface QuizType {
    id: string;
    title: string;
    description:string;
    type: 'single' | 'multi';
    answers : string[];
    correctAns?: string | string[];
}


export {QuizType}