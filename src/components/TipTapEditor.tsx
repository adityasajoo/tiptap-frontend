// src/Tiptap.jsx
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

// define your extension array
const extensions = [StarterKit];

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
