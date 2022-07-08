import { FiEdit2, FiPlus } from "react-icons/fi";

import { useModal } from "../store/useModal";
import Button from "./common/Button";
import TextInput from "./common/TextInput";
import { useState } from "react";

import dynamic from "next/dynamic";
import { useProjects } from "../store/useProjects";
const Picker = dynamic(() => import("emoji-picker-react"), {
  ssr: false,
});

export default function EditProjectModal({ projectId }: { projectId: number }) {
  const modal = useModal((state) => state);
  const projects = useProjects((state) => state.projects);
  const editProject = useProjects((state) => state.editProject);

  const project = projects.find((p) => p.id === projectId);

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [name, setName] = useState(project?.name);
  const [emoji, setEmoji] = useState(project?.emoji);

  const onEmojiClick = (event: any, emojiObject: any) => {
    setEmoji(emojiObject.emoji);
    setShowEmojiPicker(false);
  };

  return (
    <div className="flex flex-col item-center justify-around w-96">
      <p className="font-bold text-center mb-4">Edit Project</p>
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
          icon={<FiEdit2 />}
          onClick={() => {
            editProject(projectId, emoji as string, name as string);
            modal.hideModal();
          }}
        >
          Edit Project
        </Button>
      </div>
    </div>
  );
}
