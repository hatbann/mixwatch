/** @format */
"use client";

import styles from "./page.module.css";
import { playerInputType, usePlayerForm } from "./form/form.player";
import { useState } from "react";

export default function Home() {
  const {
    f: {
      handleSubmit,
      resetField,
      formState: { errors, isValid },
    },
    r,
  } = usePlayerForm();
  const [players, setPlayers] = useState<playerInputType[]>([]);

  return (
    <main className={styles.main}>
      <section>
        <h2>정보입력</h2>
        <input type="checkbox" id="balance" name="teamType" />
        <label htmlFor="balance">밸런스</label>
        <input type="checkbox" id="similar" name="teamType" />
        <label htmlFor="similar">비슷한 유저끼리</label>
        <form action="">
          <div>
            <input type="text" {...r.name} placeholder="이름을 입력해주세요" />
            {errors.name ? <p>{errors.name.message}</p> : <></>}
          </div>
          <div>
            <input
              type="checkbox"
              {...r.position}
              id="tanker"
              name="position"
            />
            <label htmlFor="tanker">탱커</label>
          </div>
          <div>
            <input
              type="checkbox"
              {...r.position}
              id="dealer"
              name="position"
            />
            <label htmlFor="dealer">딜러</label>
          </div>
          <div>
            <input
              type="checkbox"
              {...r.position}
              id="healer"
              name="position"
            />
            <label htmlFor="healer">힐러</label>
          </div>
        </form>
      </section>
      <section>
        {players.map((player, idx) => (
          <div>
            <span>{player.name}</span>
            <span>{player.position}</span>
            <span>{player.playTime}</span>
          </div>
        ))}
      </section>
    </main>
  );
}
