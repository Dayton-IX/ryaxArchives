type Props = {
    title: string,
    imgURL: string
}

const ThumbNail = ({title, imgURL}: Props) => {
    return (
        <div className="flex flex-col group">
            <div className="w-11/12 mx-auto my-3 bg-dark-backgroundSecondary h-32 rounded-xl"></div>
            <h3 className="text-light-textMain dark:text-dark-textMain text-xl w-11/12 mx-5">{title}</h3>
        </div>
    )
};



export default ThumbNail;