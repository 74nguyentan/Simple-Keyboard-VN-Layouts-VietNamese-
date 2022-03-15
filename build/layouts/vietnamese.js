/**
 * Layout: English
 */
export default {
    layout: {
        default: [
            "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
            "ă â đ ê ô ơ ư",
            "{tab} q w e r t y u i o p [ ] \\",
            "{lock} a s d f g h j k l ; ' {enter}",
            "{shift} z x c v b n m , . / {shift}",
            "@ .com {space}",
        ],
        shift: [
            "~ ! @ # $ % ^ & * ( ) _ + {bksp}",
            "Ă Â Đ Ê Ô Ơ Ư",
            "{tab} Q W E R T Y U I O P { } |",
            '{lock} A S D F G H J K L : " {enter}',
            "{shift} Z X C V B N M < > ? {shift}",
            "@ .com {space}",
        ],
    },
    layoutCandidates: {
        a: "a á à ả ã ạ",
        ă: "ă ắ ằ ẳ ẵ ặ",
        â: "â ấ ầ ẩ ẫ ậ",
        e: "e é è ẻ ẽ ẹ",
        ê: "ê ế ề ể ễ ệ",
        i: "i í ì ỉ ĩ ị",
        o: "o ó ò ỏ õ ọ",
        ô: "ô ố ồ ổ ỗ ộ",
        ơ: "ơ ớ ờ ở ỡ ợ",
        u: "u ú ù ủ ũ ụ",
        ư: "ư ứ ừ ử ữ ự",
        y: "y ý ỳ ỷ ỹ ỵ",
    },
};