import { Grid } from "@mui/material";

export default function Description() {
    return (
        <>
            <DescriptionHeader />
            <UserExperiences />
        </>
    )
}

function DescriptionHeader() {

    return <div className="description-container">
        <Grid container className="description-content">
            <h2 className="description-container-header">
                Watch Together, Miles Apart
            </h2>
            <Grid item xs={12} md={5.5} className="description-items">
                Welcome to the perfect solution for cozy movie nights with friends and family, regardless of the distance separating you. Bring your favorite people together for epic binges, even if they’re on the other side of the globe!
            </Grid>
            <Grid item xs={12} md={5.5} className="description-items">
                We support streaming from various popular platforms, as well as local files for those hard-to-find gems. So, gather your crew and let the cinematic adventures begin.
            </Grid>
        </Grid>
    </div>
}

function UserExperiences() {

    return (
        <div className="user-experience-container">
            <Grid container maxWidth={'1440px'} gap={"50px"}>
                <DetailsGridRenderer
                    header={'Seamless streaming experience, immersive virtual interaction'}
                    content={'Synchronize video playback across multiple devices for a smooth joint streaming experience, while diving into real-time conversations with our virtual chat box that brings everyone closer to the action.'}
                />
                <ImageGridRender direction="down" imgCss={'user-experience-image-1'} />
                <ImageGridRender direction="up" imgCss={'user-experience-image-2'} />
                <DetailsGridRenderer
                    header={'No setup hassles, Instantly dive into the fun'}
                    content={'Login, choose your preferred platform or local file, invite your friends, and voilà! You’re all set for a thrilling viewing party. It’s time to hit play and unleash the magic!. Experience the joy of movie nights together, even when you’re miles apart. Our platform brings the magic of cinema to your living rooms, creating unforgettable memories with your loved ones. From thrilling action flicks to heartwarming romances, find your favorites from our vast library of locally available films and ignite the cinephile in you.'}
                />
            </Grid>
        </div>
    )
}

function DetailsGridRenderer({ header, content }) {
    return (
        <Grid minWidth={'200px'} maxWidth={'4000px'} item xs={12} md={5.5}>
            <h3 className='user-experience-header'>
                {header}
            </h3>
            <h3 className='user-experience-paragrapgh'>
                {content}
            </h3>
        </Grid>
    )
}

function ImageGridRender({ imgCss, direction = 'left' }) {
    return (
        <Grid className={imgCss} minWidth={'200px'} item xs={12} md={5.5}>
        </Grid>
    )
}