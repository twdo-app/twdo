import { FiPlus } from "react-icons/fi";

import { useModal } from "../store/useModal";
import Button from "./common/Button";
import TextInput from "./common/TextInput";
import { useState } from "react";

import dynamic from "next/dynamic";
import { useProjects } from "../store/useProjects";
const Picker = dynamic(() => import("emoji-picker-react"), {
  ssr: false,
});

export default function AddProjectModal() {
  const modal = useModal((state) => state);
  const addProject = useProjects((state) => state.addProject);

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [name, setName] = useState("");
  const [emoji, setEmoji] = useState("😎");

  const onEmojiClick = (event: any, emojiObject: any) => {
    setEmoji(emojiObject.emoji);
    setShowEmojiPicker(false);
  };

  return (
    <div className="flex flex-col item-center justify-around w-96">
      <p className="font-bold text-center mb-4">New Project</p>
      <div className="flex mb-4">
        <Button
          className="mr-2"
          theme="text"
          onClick={() => setShowEmojiPicker(true)}
        >
          {emoji}
        </Button>
        {showEmojiPicker ? (
          <Picker
            onEmojiClick={onEmojiClick}
            pickerStyle={{ position: "absolute" }}
          />
        ) : null}
        <TextInput
          placeholder="Project Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-between">
        <Button onClick={modal.hideModal} theme="text">
          Cancel
        </Button>
        <Button
          icon={<FiPlus />}
          onClick={() => {
            addProject(emoji, name);
            modal.hideModal();
          }}
        >
          Create Project
        </Button>
      </div>
    </div>
  );
}
