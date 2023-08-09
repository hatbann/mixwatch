/** @format */

import { useForm } from "react-hook-form";

export type playerInputType = {
  name: string;
  position: string[];
  playTime: number;
};

export const usePlayerForm = () => {
  const f = useForm<playerInputType>({
    mode: "onChange",
    defaultValues: {
      name: "",
      position: [],
      playTime: 0,
    },
  });

  const r = {
    name: f.register("name", {
      required: true,
    }),
    position: f.register("position", {
      required: true,
    }),
    playTime: f.register("playTime", {
      required: true,
      pattern: {
        value: /^[0-9]+$/,
        message: "숫자만 입력해주세요",
      },
    }),
  };

  return { f, r };
};
