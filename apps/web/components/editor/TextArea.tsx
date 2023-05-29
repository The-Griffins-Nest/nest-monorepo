import { AutoLinkNode, LinkNode } from "@lexical/link";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { FormProps, TextFormData } from "types/forms";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListItemNode, ListNode } from "@lexical/list";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { TRANSFORMERS } from "@lexical/markdown";
import CodeHighlightPlugin from "@shared/form/plugins/CodeHighlightPlugin";
import fonts from "@styles/fonts.module.css";
import LexicalAutoLinkPlugin from "@shared/form/plugins/LexicalAutoLinkPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import React, { useCallback } from "react";
import Theme from "@lib/lexical_theme";
import ToolbarPlugin from "@shared/form/plugins/ToolbarPlugin";
import { EditorState } from "lexical";

function TextArea({ formData, setFormData }: FormProps<TextFormData>) {
  const editorConfig = {
    namespace: "MyEditor",
    theme: Theme,
    onError: (err: any) => {
      console.log(err);
    },
    nodes: [HeadingNode, ListNode, ListItemNode, QuoteNode, CodeNode, CodeHighlightNode, AutoLinkNode, LinkNode],
  };

  const onChange = useCallback((editorState: EditorState) => {
    setFormData({ type: "Text", text: JSON.stringify(editorState.toJSON()) });
  }, []);

  return (
    <div className="bg-[#00000000] dark:hover:bg-[#00000024] hover:bg-[#00000008] rounded-lg">
      {/* <TextareaAutosize
        defaultValue={formData.text}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
          setFormData({ type: "Text", text: event.target.value });
        }}
        aria-label="text area"
        minRows={3}
        placeholder="Some text here!"
        className={`${fonts.publico} w-full h-full outline-none border-none text-lg m-2 bg-[#00000000] dark:text-white text-[#101935] font-[500] resize-none`}
      /> */}
      <LexicalComposer initialConfig={editorConfig}>
        <div className="hidden lg:block">
          <ToolbarPlugin />
        </div>
        <div
          className={`w-full relative ${fonts.publico} text-lg bg-[#00000000] dark:text-white text-[#101935] font-[500] `}
        >
          <RichTextPlugin
            contentEditable={
              <ContentEditable className="relative resize-none rounded-2xl outline-none py-[0.8rem] px-5" />
            }
            placeholder={
              <div className="absolute left-5 bottom-[12px] text-[#a5a5a5] overflow-hidden text-ellipsis truncate font-[15px] select-none pointer-events-none">
                Some Text Here!
              </div>
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
        </div>
        <CodeHighlightPlugin />
        <HistoryPlugin />
        <LexicalAutoLinkPlugin />
        <LinkPlugin />
        <ListPlugin />
        <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
        <OnChangePlugin onChange={onChange} />
      </LexicalComposer>
    </div>
  );
}
export default TextArea;
