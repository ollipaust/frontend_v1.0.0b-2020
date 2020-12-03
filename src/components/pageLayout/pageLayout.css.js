import { createGlobalStyle } from 'styled-components'
import { light, dark75 } from 'constants/colors'

export const PageLayoutStyles = createGlobalStyle`
.flexbox {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    align-items: center;

    > .intro {
        width: 60%;
        margin-left: 7.5vw;
    }
}


body.home {
    
    .threeCanvas {
        position: absolute!important;
        top: 50%;
        left: 50%;
        width: 100%!important;
        height: 100%!important;
        transform: translateX(-50%) translateY(-50%)!important;

            > canvas {
                pointer-events: all!important;
            }
    }
      
    [class*='LogoDark'] {
        svg {
            .a {
                fill: ${dark75};
            }
        }
    }
    [class*='MenuLines'] {
        background: ${dark75};
            ::before, ::after { background: ${dark75}; }
    }
    [class*='MenuButton'] {
        &.active {
            [class*='MenuLines'] {
                background: ${light}!important;
                  ::before, ::after { background: ${light}!important; }
            }
        }
    }
}
body.about {

}
body.projects {

}
body.stack {

}

body.contact {
    input {
        width: 50%;
        height: 50px;
        background: transparent;
        border-bottom: 2px solid black;
        border-top: none;
        border-left: none;
        border-right: none;
            :focus {
                outline: none;
     
            }
    }
    textarea {
        width: 50%;
        height: 350px;
        background: transparent;
        border-bottom: 2px solid black;
        border-top: none;
        border-left: 2px solid black;
        border-right: none;
            :focus {
                outline: none;
            }
    }
}
`
