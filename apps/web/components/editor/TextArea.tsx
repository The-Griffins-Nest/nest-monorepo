import { AutoLinkNode, LinkNode } from "@lexical/link";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
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
import useElements from "@stores/useElements";

function TextArea({index} : {index: number}) {
  const editorConfig = {
    namespace: "MyEditor",
    theme: Theme,
    onError: (err: any) => {
      console.log(err);
    },
    nodes: [HeadingNode, ListNode, ListItemNode, QuoteNode, CodeNode, CodeHighlightNode, AutoLinkNode, LinkNode],
  };
  const setFormData = useElements((state) => state.setFormData);
  const onChange = useCallback((editorState: EditorState) => {
    setFormData(index, { type: "Text", text: JSON.stringify(editorState.toJSON()) });
  }, []);

  return (
    <div className="bg-[#00000000] dark:hover:bg-[#00000024] hover:bg-[#00000008] rounded-lg relative group">
      <LexicalComposer initialConfig={editorConfig}>
        <div className="absolute hidden group-hover:block group-focus:block top-[-50px]">
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
