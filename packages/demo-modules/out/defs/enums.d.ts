/**
 * enums
 * global variables
 */
export declare const TESTMODE: boolean;
export declare const COMPRESS = true;
export declare const CUST_NAME = "S.T.A.R. Laboratories";
export declare const USER_NAME = "Barry Allen";
export declare const ARRSTRBITES: number[];
export declare const CHARSPERLINE = 130;
export declare const TABLE_NAMES_F: string[];
export declare const TABLE_NAMES_L: string[];
export declare const BASE_TABLE_OPTS: {
    x: number;
    y: number;
    colW: number[];
};
export declare const BKGD_LTGRAY = "F1F1F1";
export declare const COLOR_BLUE = "0088CC";
export declare const CODE_STYLE: {
    fill: {
        color: string;
    };
    margin: number;
    fontSize: number;
    color: string;
};
export declare const TITLE_STYLE: {
    fill: {
        color: string;
    };
    margin: number;
    fontSize: number;
    fontFace: string;
    color: string;
    valign: string;
    align: string;
};
export declare const BASE_TEXT_OPTS_L: {
    color: string;
    margin: number;
    border: {
        pt: number;
        color: string;
    }[];
};
export declare const BASE_TEXT_OPTS_R: {
    text: string;
    options: {
        color: string;
        margin: number;
        border: (number | {
            pt: number;
            color: string;
        })[];
        align: string;
    };
};
export declare const FOOTER_TEXT_OPTS: {
    x: number;
    y: number;
    w: string;
    h: number;
    margin: number;
    color: string;
    align: string;
    fontSize: number;
};
export declare const BASE_CODE_OPTS: {
    color: string;
    margin: number;
    border: {
        pt: number;
        color: string;
    };
    fill: {
        color: string;
    };
    fontFace: string;
    fontSize: number;
};
export declare const BASE_OPTS_SUBTITLE: {
    x: number;
    y: number;
    w: number;
    h: number;
    fontSize: number;
    fontFace: string;
    color: string;
    fill: {
        color: string;
    };
};
export declare const DEMO_TITLE_TEXT: {
    fontSize: number;
    color: string;
    bold: boolean;
};
export declare const DEMO_TITLE_TEXTBK: {
    fontSize: number;
    color: string;
    bold: boolean;
    breakLine: boolean;
};
export declare const DEMO_TITLE_OPTS: {
    fontSize: number;
    color: string;
};
export declare const IMAGE_PATHS: {
    peace4: {
        path: string;
    };
    starlabsBkgd: {
        path: string;
    };
    starlabsLogo: {
        path: string;
    };
    wikimedia1: {
        path: string;
    };
    wikimedia2: {
        path: string;
    };
    wikimedia_svg: {
        path: string;
    };
    ccCopyRemix: {
        path: string;
    };
    ccLogo: {
        path: string;
    };
    ccLicenseComp: {
        path: string;
    };
    ccDjGif: {
        path: string;
    };
    gifAnimTrippy: {
        path: string;
    };
    chicagoBean: {
        path: string;
    };
    sydneyBridge: {
        path: string;
    };
    tokyoSubway: {
        path: string;
    };
    sample_aif: {
        path: string;
    };
    sample_avi: {
        path: string;
    };
    sample_m4v: {
        path: string;
    };
    sample_mov: {
        path: string;
    };
    sample_mp4: {
        path: string;
    };
    sample_mpg: {
        path: string;
    };
    sample_mp3: {
        path: string;
    };
    sample_wav: {
        path: string;
    };
    big_earth_mp4: {
        path: string;
    };
    UPPERCASE: {
        path: string;
    };
    video_mp4_thumb: {
        path: string;
    };
};
export declare const LOREM_IPSUM_ENG = "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn\u2019t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word \"and\" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn\u2019t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their projects again and again. And if she hasn\u2019t been rewritten, then they are still using her. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn\u2019t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy. The copy warned the Little Blind Text, that.";
export declare const LOREM_IPSUM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum dignissim velit vel luctus. Donec feugiat ipsum quis tempus blandit. Donec mattis mauris vel est dictum interdum. Pellentesque imperdiet nibh vitae porta ornare. Fusce non nisl lacus. Curabitur ut mattis dui. Ut pulvinar urna velit, vitae aliquam neque pulvinar eu. Fusce eget tellus eu lorem finibus mattis. Nunc blandit consequat arcu. Ut sed pharetra tortor, nec finibus ipsum. Pellentesque a est vitae ligula imperdiet rhoncus. Ut quis hendrerit tellus. Phasellus non malesuada mi. Suspendisse ullamcorper tristique odio fermentum elementum. Phasellus mattis mollis mauris, non mattis ligula dapibus quis. Quisque pretium metus massa. Curabitur condimentum consequat felis, id rutrum velit cursus vel. Proin nulla est, posuere in velit at, faucibus dignissim diam. Quisque quis erat euismod, malesuada erat eu, congue nisi. Ut risus lectus, auctor at libero sit amet, accumsan ultricies est. Donec eget iaculis enim. Nunc ac egestas tellus, nec efficitur magna. Sed nec nisl ut augue laoreet sollicitudin vitae nec quam. Vestibulum pretium nisl bibendum, tempor velit eu, semper velit. Nulla facilisi. Aenean quis purus sagittis, dapibus nibh eget, ornare nunc. Donec posuere erat quis ipsum facilisis, quis porttitor dui cursus. Etiam convallis arcu sapien, vitae placerat diam molestie sit amet. Vivamus sapien augue, porta sed tortor ut, molestie ornare nisl. Nullam sed mi turpis. Donec sed finibus risus. Nunc interdum semper mauris quis vehicula. Phasellus in nisl faucibus, pellentesque massa vel, faucibus urna. Proin sed tortor lorem. Curabitur eu nisi semper, placerat tellus sed, varius nulla. Etiam luctus ac purus nec aliquet. Phasellus nisl metus, dictum ultricies justo a, laoreet consectetur risus. Vestibulum vulputate in felis ac blandit. Aliquam erat volutpat. Sed quis ultrices lectus. Curabitur at scelerisque elit, a bibendum nisi. Integer facilisis ex dolor, vel gravida metus vestibulum ac. Aliquam condimentum fermentum rhoncus. Nunc tortor arcu, condimentum non ex consequat, porttitor maximus est. Duis semper risus odio, quis feugiat sem elementum nec. Nam mattis nec dui sit amet volutpat. Sed facilisis, nunc quis porta consequat, ante mi tincidunt massa, eget euismod sapien nunc eget sem. Curabitur orci neque, eleifend at mattis quis, malesuada ac nibh. Vestibulum sed laoreet dolor, ac facilisis urna. Vestibulum luctus id nulla at auctor. Nunc pharetra massa orci, ut pharetra metus faucibus eget. Etiam eleifend, tellus id lobortis molestie, sem magna elementum dui, dapibus ullamcorper nisl enim ac urna. Nam posuere ullamcorper tellus, ac blandit nulla vestibulum nec. Vestibulum ornare, ligula quis aliquet cursus, metus nisi congue nulla, vitae posuere elit mauris at justo. Nullam ut fermentum arcu, nec laoreet ligula. Morbi quis consectetur nisl, nec consectetur justo. Curabitur eget eros hendrerit, ullamcorper dolor non, aliquam elit. Aliquam mollis justo vel aliquam interdum. Aenean bibendum rhoncus ante a commodo. Vestibulum bibendum sapien a accumsan pharetra... Curabitur condimentum consequat felis, id rutrum velit cursus vel. Proin nulla est, posuere in velit at, faucibus dignissim diam. Quisque quis erat euismod, malesuada erat eu, congue nisi. Ut risus lectus, auctor at libero sit amet, accumsan ultricies est. Donec eget iaculis enim. Nunc ac egestas tellus, nec efficitur magna. Sed nec nisl ut augue laoreet sollicitudin vitae nec quam. Vestibulum pretium nisl bibendum, tempor velit eu, semper velit. Nulla facilisi. Aenean quis purus sagittis, dapibus nibh eget, ornare nunc. Donec posuere erat quis ipsum facilisis, quis porttitor dui cursus. Etiam convallis arcu sapien, vitae placerat diam molestie sit amet. Vivamus sapien augue, porta sed tortor ut, molestie ornare nisl. Nullam sed mi turpis. Donec sed finibus risus. Nunc interdum semper mauris quis vehicula. Phasellus in nisl faucibus, pellentesque massa vel, faucibus urna. Proin sed tortor lorem. Curabitur eu nisi semper, placerat tellus sed, varius nulla. Etiam luctus ac purus nec aliquet. Phasellus nisl metus, dictum ultricies justo a, laoreet consectetur risus. Vestibulum vulputate in felis ac blandit. Aliquam erat volutpat. Sed quis ultrices lectus. Curabitur at scelerisque elit, a bibendum nisi. Integer facilisis ex dolor, vel gravida metus vestibulum ac. Aliquam condimentum fermentum rhoncus. Nunc tortor arcu, condimentum non ex consequat, porttitor maximus est. Duis semper risus odio, quis feugiat sem elementum nec. Nam mattis nec dui sit amet volutpat. Sed facilisis, nunc quis porta consequat, ante mi tincidunt massa, eget euismod sapien nunc eget sem. Curabitur orci neque, eleifend at mattis quis, malesuada ac nibh. Vestibulum sed laoreet dolor, ac facilisis urna. Vestibulum luctus id nulla at auctor. Nunc pharetra massa orci, ut pharetra metus faucibus eget. Etiam eleifend, tellus id lobortis molestie, sem magna elementum dui, dapibus ullamcorper nisl enim ac urna. Nam posuere ullamcorper tellus, ac blandit nulla vestibulum nec. Vestibulum ornare, ligula quis aliquet cursus, metus nisi congue nulla, vitae posuere elit mauris at justo. Nullam ut fermentum arcu, nec laoreet ligula. Morbi quis consectetur nisl, nec consectetur justo. Curabitur eget eros hendrerit, ullamcorper dolor non, aliquam elit. Aliquam mollis justo vel aliquam interdum. Aenean bibendum rhoncus ante a commodo. Vestibulum bibendum sapien a accumsan pharetra.";
