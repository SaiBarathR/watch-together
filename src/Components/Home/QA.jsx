import { Grid } from "@mui/material";
import { useMemo } from "react";

export default function QA() {

    const faqs = useMemo(() => {
        return [
            { question: 'Do you support subtitles?', answer: 'Absolutely! We understand the importance of subtitles and provide full support for them on our platform.' },
            { question: 'Is it for free?', answer: 'We do offer a free version with basic features, but to access advanced features and more, check out our subscription plans!' },
            { question: 'Any viewer limits?', answer: 'Our basic plan has a limit, but the premium plans provide higher viewer limits to cater to your streaming needs.' },
            { question: 'Loss in video quality?', answer: 'Absolutely not! We ensure the highest quality streaming without compromising sharpness and resolution.' }
        ]
    }, []);

    return (
        <div className="qa-container">
            <h2 className="qa-header">
                Quick Doubts, Quicker Answers
            </h2>
            <Grid container className="qa-content-container">
                {faqs.map((faq, index) => {
                    return <Grid key={index + faq.question} item sm={12} md={5.5}>
                        <h2 className='faq-question'>{faq.question}</h2>
                        <h2 className='faq-answer'>{faq.answer}</h2>
                    </Grid>
                })}
            </Grid>
        </div>
    )
}