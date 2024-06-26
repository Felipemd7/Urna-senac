import { ThemeType } from '@types';

export default {
    font: {
        family: {
            default: "'Fira Sans Condensed', sans-serif",
            secondary: 'Roboto',
            third: "'Roboto', sans-serif",
        },
        weights: {
            extraLight: '200',
            light: '300',
            regular: '400',
            medium: '500',
            semiBold: '600',
            bold: '700',
            extraBold: '800',
        },
        sizes: {
            xsmall: '0.5rem',
            small: '0.7rem',
            xnormal: '0.9rem',
            normal: '1rem',
            title: '1.6rem',
            large: '2rem',
            xlarge: '4rem',
            xxlarge: '6rem',
        },
    },
    colors: {
        primary: '#C3D1EE',
        secondary: '#252930',
        green: '#14e318',
        darkGreen: '#0a820d',
        lightOrange: '#FF8B61',
        orange: '#f58b11',
        darkOrange: '#bd6b0d',
        lightGray: 'red',
        gray: 'white',
        darkGray: '#d9d8d7',
        lightBlue251: 'white',
        lightBlue250: 'white',
        lightBlue242: '#e3e2e1',
        lightBlue241: 'white',
        lightBlue240: '#e3e2e1',
        lightBlue239: '#B6C1D8',
        white: '#FFFFFF',
        black81: '#252930',
        black87: 'black',
        black89: '#0C171B',
    },
    borderRadius: {
        xsmall: '2px',
        small: '3px',
        xmedium: '5px',
        medium: '7px',
        xlarge: '34px',
        large: '35px',
    },
    spacings: {
        xsmall: '0.2rem',
        xxsmall: '0.4rem',
        small: '0.7rem',
        xmedium: '1rem',
        xxmedium: '1.2rem',
        medium: '1.5rem',
        xlarge: '2rem',
        xxlarge: '2.rem',
        large: '3rem',
    },
} as Partial<ThemeType>;
