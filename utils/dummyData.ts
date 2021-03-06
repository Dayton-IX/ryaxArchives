enum Series {
    MAXVSWILD = 'MAXVSWILD',
    LEGENDOFMAX = 'LEGENDOFMAX',
    DAILYLIFE = 'DAILYLIFE',
    REFRESHWARS = 'REFRESHWARS',
    NERFARTONLINE = 'NERFARTONLINE',
    NERFWARS = 'NERFWARS'
}

type Video = {
    id: string,
    title: string,
    imgUrl: string,
    vidUrl: string,
    series?: Series
}

export const videos: Video[] = [
    {
        id: '4435312',
        title: 'Max Vs. Wild Part 1: Thirst For Adventure',
        imgUrl: 'imgPlaceholder',
        vidUrl: 'videoPlaceholder',
        series: Series.MAXVSWILD
    },
    {
        id: '32535234567',
        title: 'Max Vs. Wild Part 2: The Quest For Sticks',
        imgUrl: 'imgPlaceholder',
        vidUrl: 'videoPlaceholder',
        series: Series.MAXVSWILD
    },
    {
        id: 'fffsefese4432rf',
        title: 'Legend Of Max Part 1:',
        imgUrl: 'imgPlaceholder',
        vidUrl: 'videoPlaceholder',
        series: Series.LEGENDOFMAX
    }
]