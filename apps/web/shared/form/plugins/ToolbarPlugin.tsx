/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import useColorMode from "@stores/useColorMode";

import {
  $getSelection,
  $isRangeSelection,
  COMMAND_PRIORITY_CRITICAL,
  FORMAT_TEXT_COMMAND,
  SELECTION_CHANGE_COMMAND,
} from "lexical";
import { useCallback, useEffect, useState } from "react";

const CAN_USE_DOM: boolean =
  typeof window !== "undefined" &&
  typeof window.document !== "undefined" &&
  typeof window.document.createElement !== "undefined";

const IS_APPLE: boolean =
  CAN_USE_DOM && /Mac|iPod|iPhone|iPad/.test(navigator.platform);

type ToolbarButtonProperties = {
  activeEditor: any;
  active: boolean;
  apple_title: string;
  title: string;
  format_text_command: string;
  src: string;
};

function ToolbarButton({
  activeEditor,
  active,
  apple_title,
  title,
  format_text_command,
  src,
}: ToolbarButtonProperties) {
  const theme = useColorMode((state) => state.theme);
  return (
    <button
      onClick={() => {
        activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, format_text_command);
      }}
      className={`p-2 m-2 rounded-lg ${active && "bg-[#000000ce]"}`}
      title={IS_APPLE ? apple_title : title}
    >
      <img
        className={
          active
            ? theme === "dark"
              ? "filter-white"
              : "filter-black"
            : "filter-grey"
        }
        alt={format_text_command}
        src={src}
      />
    </button>
  );
}

export default function ToolbarPlugin(): JSX.Element {
  const [editor] = useLexicalComposerContext();
  const [activeEditor, setActiveEditor] = useState(editor);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);
  const [isSubscript, setIsSubscript] = useState(false);
  const [isSuperscript, setIsSuperscript] = useState(false);

  const updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      // Update text format
      setIsBold(selection.hasFormat("bold"));
      setIsItalic(selection.hasFormat("italic"));
      setIsUnderline(selection.hasFormat("underline"));
      setIsStrikethrough(selection.hasFormat("strikethrough"));
      setIsSubscript(selection.hasFormat("subscript"));
      setIsSuperscript(selection.hasFormat("superscript"));
    }
  }, [activeEditor]);

  useEffect(() => {
    return editor.registerCommand(
      SELECTION_CHANGE_COMMAND,
      (_payload, newEditor) => {
        updateToolbar();
        setActiveEditor(newEditor);
        return false;
      },
      COMMAND_PRIORITY_CRITICAL
    );
  }, [editor, updateToolbar]);

  return (
    <div className="flex flex-row overflow-x- overflow-y-hidden md:block sm:hidden">
      <ToolbarButton
        activeEditor={activeEditor}
        active={isBold}
        apple_title="Bold (⌘B)"
        title="Bold (Ctrl+B)"
        format_text_command="bold"
        src="/chat/bold.svg"
      />
      <ToolbarButton
        activeEditor={activeEditor}
        active={isItalic}
        apple_title="Italic (⌘I)"
        title="Italic (Ctrl+I)"
        format_text_command="italic"
        src="/chat/italic.svg"
      />
      <ToolbarButton
        activeEditor={activeEditor}
        active={isUnderline}
        apple_title="Underline (⌘U)"
        title="Underline (Ctrl+U)"
        format_text_command="underline"
        src="/chat/underline.svg"
      />
      <ToolbarButton
        activeEditor={activeEditor}
        active={isStrikethrough}
        apple_title="Strikethrough"
        title="Strikethrough"
        format_text_command="strikethrough"
        src="/chat/strikethrough.svg"
      />
      <ToolbarButton
        activeEditor={activeEditor}
        active={isSubscript}
        apple_title="Subscript"
        title="Subscript"
        format_text_command="subscript"
        src="/chat/subscript.svg"
      />
      <ToolbarButton
        activeEditor={activeEditor}
        active={isSuperscript}
        apple_title="Superscript"
        title="Superscript"
        format_text_command="superscript"
        src="/chat/superscript.svg"
      />
    </div>
  );
}
