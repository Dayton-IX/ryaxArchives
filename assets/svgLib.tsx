import Colors from "../constants/Colors"

type Props = {
    color?: string,
    className?: string,
    width?: number,
    height?: number, 
}

export const LoadingCircle = ({color, className, width=24, height=24}: Props) => <svg className={className} width={width} height={height} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke={color} strokeWidth="4"></circle>
    <path className="opacity-75" fill={color} d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
</svg>

export const OpenLock = ({className, width=57, height=54}: Props) => <svg className={className} width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40.1324 38.6773C40.1324 41.5119 37.8345 43.8098 35 43.8098C32.1654 43.8098 29.8676 41.5119 29.8676 38.6773C29.8676 35.8428 32.1654 33.5449 35 33.5449C37.8345 33.5449 40.1324 35.8428 40.1324 38.6773Z" fill="white" stroke="white" strokeWidth="8"/>
    <path d="M35.9546 45.5533L31.783 37.2633L34.9489 37.2633L34.1611 31.7367L38.3327 40.0267L35.1669 40.0267L35.9546 45.5533Z" fill="url(#paint0_linear)" stroke="url(#paint1_linear)" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M50.5556 25.1918L19.4444 25.1918C16.9898 25.1918 15 27.3997 15 30.1233L15 47.3836C15 50.1072 16.9898 52.3151 19.4444 52.3151L50.5556 52.3151C53.0102 52.3151 55 50.1072 55 47.3836L55 30.1233C55 27.3997 53.0102 25.1918 50.5556 25.1918Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24 24L24 14.2222C24 10.9807 22.8411 7.87192 20.7782 5.57981C18.7153 3.28769 15.9174 2 13 2C10.0826 2 7.28473 3.28769 5.22182 5.57981C3.15892 7.87192 2 10.9807 2 14.2222L2 24" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
    <linearGradient id="paint0_linear" x1="35.6029" y1="45.5533" x2="35.6029" y2="31.7367" gradientUnits="userSpaceOnUse">
    <stop stopColor="#9F00EA"/>
    <stop offset="1" stopColor="#FA1DFF"/>
    </linearGradient>
    <linearGradient id="paint1_linear" x1="35.6029" y1="45.5533" x2="35.6029" y2="31.7367" gradientUnits="userSpaceOnUse">
    <stop stopColor="#9F00EA"/>
    <stop offset="1" stopColor="#FA1DFF"/>
    </linearGradient>
    </defs>
</svg>

export const Logo = ({className, width=128, height=158}: Props) => <svg className={className} width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M87.1488 112.518C87.1488 125.714 76.6459 136.296 63.8294 136.296C51.0129 136.296 40.51 125.714 40.51 112.518C40.51 99.3234 51.0129 88.7407 63.8294 88.7407C76.6459 88.7407 87.1488 99.3234 87.1488 112.518Z" fill="white" stroke="white" strokeWidth="8"/>
    <path d="M66.6852 133.433L54.2059 108.218L63.6765 108.218L61.32 91.4073L73.7992 116.623L64.3287 116.623L66.6852 133.433Z" fill="url(#paint0_linear)" stroke="url(#paint1_linear)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M110.363 71.5L17.2954 71.5C9.95257 71.5 4 78.2157 4 86.5L4 139C4 147.284 9.95257 154 17.2954 154L110.363 154C117.706 154 123.659 147.284 123.659 139L123.659 86.5C123.659 78.2157 117.706 71.5 110.363 71.5Z" stroke="white" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M30.5909 71.5L30.5909 41.5C30.5909 31.5544 34.0929 22.0161 40.3263 14.9835C46.5597 7.95088 55.0141 4 63.8295 4C72.6449 4 81.0993 7.95088 87.3327 14.9835C93.5662 22.0161 97.0681 31.5544 97.0681 41.5L97.0681 71.5" stroke="white" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
    <linearGradient id="paint0_linear" x1="65.6329" y1="133.433" x2="65.6329" y2="91.4073" gradientUnits="userSpaceOnUse">
    <stop stopColor="#9F00EA"/>
    <stop offset="1" stopColor="#FA1DFF"/>
    </linearGradient>
    <linearGradient id="paint1_linear" x1="65.6329" y1="133.433" x2="65.6329" y2="91.4073" gradientUnits="userSpaceOnUse">
    <stop stopColor="#9F00EA"/>
    <stop offset="1" stopColor="#FA1DFF"/>
    </linearGradient>
    </defs>
</svg>

export const Stick = ({color=Colors.dark.textSecondary, className, width=31, height=27}: Props) => <svg className={className} width={width} height={height} viewBox="0 0 31 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="1.5" y1="25" x2="29.5" y2="4" stroke={color} strokeWidth="5"/>
    <line x1="19.5092" y1="9.83435" x2="20.5092" y2="0.834352" stroke={color} strokeWidth="3"/>
    <line x1="16.5909" y1="14.6213" x2="23.5909" y2="17.6213" stroke={color} strokeWidth="3"/>
</svg>