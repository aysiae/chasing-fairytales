import EditorJS from '@editorjs/editorjs';
import List  from '@editorjs/list';
import Header from '@editorjs/header';
import SimpleImage from '@editorjs/simple-image';
import Quote from '@editorjs/quote';

// configs for EditorJS
export const editor = new EditorJS({
    tools: {
        list: {
            class: List,
            inlineToolbar: true,
        },
        header: Header,
        image: SimpleImage,
        quote: Quote,
    },
});