import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import LexicalAutoLinkPlugin from "@shared/form/plugins/LexicalAutoLinkPlugin";
import ToolbarPlugin from "@shared/form/plugins/ToolbarPlugin";
import CodeHighlightPlugin from "@shared/form/plugins/CodeHighlightPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { TRANSFORMERS } from "@lexical/markdown";
import fonts from "@styles/fonts.module.css";
import React, { useRef } from "react";
import Theme from "@lib/lexical_theme";
import { FormProps, TextFormData } from "types/forms";

function TextArea({ formData, setFormData }: FormProps<TextFormData>) {
  const editorConfig = {
    namespace: "MyEditor",
    theme: Theme,
    onError: (err: any) => {
      console.log(err);
    },
    nodes: [HeadingNode, ListNode, ListItemNode, QuoteNode, CodeNode, CodeHighlightNode, AutoLinkNode, LinkNode],
  };

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
              <ContentEditable
                id="chatbox"
                className="relative resize-none rounded-2xl outline-none py-[0.8rem] px-5"
              />
            }
            placeholder={
              <div className="absolute left-5 bottom-[12px] text-[#a5a5a5] overflow-hidden text-ellipsis truncate font-[15px] select-none pointer-events-none">
                Some Text Here!
              </div>
            }
          />
        </div>
        <HistoryPlugin />
        <ListPlugin />
        <LinkPlugin />
        <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
        <LexicalAutoLinkPlugin />
        <CodeHighlightPlugin />
      </LexicalComposer>
    </div>
  );
}
export default TextArea;
