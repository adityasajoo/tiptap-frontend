// src/Tiptap.jsx
import Collaboration from '@tiptap/extension-collaboration';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { WebsocketProvider } from 'y-websocket';
import * as Y from 'yjs';

const doc = new Y.Doc();
//Add the websocket URL here
new WebsocketProvider('ws://localhost:1234', 'my-roomname', doc);

// define your extension array
const extensions = [
  StarterKit,
  Collaboration.configure({
    document: doc,
  }),
];

const content = '<p>Hello World!</p>';

const TipTapEditor = () => {
  const editor = useEditor({
    extensions,
    content,
  });

  return (
    <>
      <EditorContent editor={editor} />
    </>
  );
};

export default TipTapEditor;
